"use server"
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

  export const GetAllUsers= async () => {
    try {
      const cookieStore = await cookies();
      let token = cookieStore.get("accessToken")!.value;
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":token,
        },
        next: {
          tags: ["users"],
        
        },
      });
  
      // if (!response.ok) {
      //   throw new Error(`Request failed with status: ${response.status}`);
      // }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching All users:", error);
      return null;
    }
  };
  
    export const PromoteRole = async (id:string) => {

      try {
        const cookieStore = await cookies();
        let token = cookieStore.get("accessToken")!.value;
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/userToadmin/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization":token,
          },
        });
        revalidateTag("users");
        return await response.json();
      } catch (error) {
        console.error("Error changing role:", error);
        return null;
      }
    };