"use server";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
export const registerUser = async (data:any) => {
  console.log(data)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/create-ResearchAssociate`, {
        method: "POST",
        headers: {
          Authorization: `${await (await cookies())?.get("accessToken")?.value || ""}`,
        },
        body: data,
      });
      const result = await res.json();
      return result;
    } catch (error:any) {
      return Error(error);
    }
  };
  
  export async function loginUser(data:FieldValues) {
  console.log(data)
try {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const res = await response.json();
  if (res.success) {
          (await cookies()).set("accessToken", res.data.accessToken);
        }
  return { success: !!res.success, message: res.message || "Login failed" };
} catch (error:any) {
  console.log(error)
}
  }
  
  
  
  
  
  
  

  export const getCurrentUser = async () => {
    try {
      const token = (await cookies()).get("accessToken")?.value;
  
      if (!token) {
        throw new Error("Access token not found");
      }
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":token,
        },
      });
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching current user:", error);
      return null;
    }
  };
  
  export const GetAllResearchAssociate = async (): Promise<any | null> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/researchAssociate`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":`${await (await cookies())?.get("accessToken")?.value || ""}`,
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
  
  



export const logout = async () => {
  (await cookies()).delete("accessToken");
};
