"use server"

import { cookies } from "next/headers";

  export const GetAllResearchAssociate = async () => {
    try {

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/researchAssociate`, {
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
  export const GetSingleMember = async (id:string) => {
    try {
      const token = (await cookies()).get("accessToken")?.value;
  
      if (!token) {
        throw new Error("Access token not found");
      }
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/researchAssociate/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching single member:", error);
      return null;
    }
  };




    
 