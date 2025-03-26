"use server"

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

  export const GetAllResearchAssociate = async () => {
    try {

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/researchAssociate`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: ["member"],
        
        },
      });
     
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching research associates:", error);
      return null;
    }
  };
  export const GetSingleMember = async (id:string) => {
    try {
    
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/researchAssociate/singleGe/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      // if (!response.ok) {
      //   throw new Error(`Request failed with status: ${response.status}`);
      // }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching single member:", error);
      return null;
    }
  };




  export const DeleteMember = async (id:string) => {
  console.log(id)
    try {
      const cookieStore = await cookies();
      let token = cookieStore.get("accessToken")!.value;
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/researchAssociate/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization":token,
        },
      });
      revalidateTag("member");
      return await response.json();
    } catch (error) {
      console.error("Error delete memeber:", error);
      return null;
    }
  };
  export const UpdateMember = async (id:string,data:any) => {

    try {
      const cookieStore = await cookies();
      let token = cookieStore.get("accessToken")!.value;
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/researchAssociate/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization":token,
        },
        body:data
      });
      revalidateTag("member");
      return await response.json();
    } catch (error) {
      console.error("Error delete memeber:", error);
      return null;
    }
  };