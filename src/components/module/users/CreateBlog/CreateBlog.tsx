"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { BlogPost } from "@/services/blogs";
import { TUser } from "@/type";
import { GetMe } from "@/services/singleUser";

const blogSchema = z.object({
  title: z.string().min(3, "Title is required"),
  category: z.string().min(3, "Category is required"),
  publishedDate: z.string(),
  shortDescription: z.string().min(10, " description is required"),
  image: z.instanceof(File).optional(),
});

type BlogFormData = z.infer<typeof blogSchema>;

const CreateBlog = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [user, setUser] = useState<TUser | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetMe();
        setUser(result?.data);
     
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(user)
  
  const onSubmit = async (data: BlogFormData) => {
    const formData = new FormData();
    if (data.image) formData.append("file", data.image);
    formData.append(
      "data",
      JSON.stringify({
        title: data.title,
        author:user?._id || "",
        category: data.category,
        publishedDate: data.publishedDate,
        shortDescription: data.shortDescription,
      })
    );

    try {
      const response =await BlogPost(formData)
      console.log(response)
        toast.success("Blog created successfully!");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-6 shadow-lg">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Create Blog</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label>Title</Label>
            <Input {...register("title")} placeholder="Enter title" />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>

          <div>
            <Label>Category</Label>
            <Input {...register("category")} placeholder="Category" />
            {errors.category && <p className="text-red-500">{errors.category.message}</p>}
          </div>

          <div>
            <Label>Published Date</Label>
            <Input type="date" {...register("publishedDate")} />
          </div>

          <div>
            <Label>Short Description</Label>
            <Textarea {...register("shortDescription")} placeholder="Write a short description..." />
            {errors.shortDescription && <p className="text-red-500">{errors.shortDescription.message}</p>}
          </div>

          <div>
            <Label>Upload Image</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setValue("image", e.target.files[0]);
                  setImagePreview(URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
            {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 rounded-lg w-32 h-32 object-cover" />}
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateBlog;
