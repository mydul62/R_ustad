"use server"

import { cookies } from "next/headers";

export const ChangePassword = async (data:any) => {
  console.log(data)
    try {
      const token = (await cookies()).get("accessToken")?.value;
  console.log(token)
      if (!token) {
        throw new Error("Access token not found");
      }
      const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/change-password`, {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: data,
      });
      const result = await res.json();
      return result;
    } catch (error:any) {
      return Error(error);
    }
  };
  