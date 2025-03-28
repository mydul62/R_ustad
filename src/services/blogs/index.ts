"use server"

import { BlogPostForm } from "@/components/module/users/CreateBlog/CreateBlog";
import { cookies } from "next/headers";

export const GetAllBlog = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
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

export const BlogPost = async (formData:BlogPostForm) => {
  try {
    const cookieStore = await cookies();
    let token = cookieStore.get("accessToken")!.value;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify(formData),
    });

    // if (!response.ok) {
    //   throw new Error(`Request failed with status: ${response.status}`);
    // }

    return await response.json();
  } catch (error) {
    console.error("Error posting research paper:", error);
    throw error; // Re-throwing the error to be handled in the component
  }
};