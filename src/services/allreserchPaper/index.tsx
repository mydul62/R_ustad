"use server"

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

  export const GetAllResearchPaper = async () => {
    try {
      const cookieStore = await cookies();
      let token = cookieStore.get("accessToken")!.value;
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/paper/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":token,
        },
        next: {
          tags: ["paper"],
        
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
  export const GetAllResearchPaperPublic = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/paper/public`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
  
  export const ApprovePaper = async (id:string) => {
  console.log(id)
    try {
      const cookieStore = await cookies();
      let token = cookieStore.get("accessToken")!.value;
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/paper/approve/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization":token,
        },
      });
      revalidateTag("paper");
      return await response.json();
    } catch (error) {
      console.error("Error Aprove researchPaper:", error);
      return null;
    }
  };
  export const DeletePaper = async (id:string) => {
  console.log(id)
    try {
      const cookieStore = await cookies();
      let token = cookieStore.get("accessToken")!.value;
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/paper/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization":token,
        },
      });
      revalidateTag("paper");
      return await response.json();
    } catch (error) {
      console.error("Error Aprove researchPaper:", error);
      return null;
    }
  };