"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface BlogPostForm {
  title: string;
  image: FileList; // Accepts files instead of a URL
  shortDescription: string;
  category: string;
  publishedDate: string;
}

const CreateBlog: React.FC = () => {
  const { register, handleSubmit } = useForm<BlogPostForm>();

  const onSubmit: SubmitHandler<BlogPostForm> = (data) => {
    const blogPost = {
      title: data.title,
      shortDescription: data.shortDescription,
      category: data.category,
      publishedDate: data.publishedDate,
      author: '65a1bcdef01234567890abcd',
    };

    const formData = new FormData();
    for (const key in blogPost) {
      formData.append(key, blogPost[key as keyof typeof blogPost]);
    }

    // Append the image file to FormData
    if (data.image.length > 0) {
      formData.append('image', data.image[0]); // Upload only the first file
    }
    

  };

  return (
    <div className="max-w-full mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Blog Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" encType="multipart/form-data">
        <div>
          <Label htmlFor="title" className="mb-2">Title:</Label>
          <Input id="title" type="text" {...register('title', { required: true })} />
        </div>
        <div>
          <Label htmlFor="image" className="mb-2">Upload Image:</Label>
          <Input id="image" type="file" accept="image/*" {...register('image', { required: true })} />
        </div>
        <div>
          <Label htmlFor="shortDescription" className="mb-2">Description:</Label>
          <Textarea id="shortDescription" className="h-32 w-full resize-none" {...register('shortDescription', { required: true })} />
        </div>
        <div>
          <Label htmlFor="category" className="mb-2">Category:</Label>
          <Input id="category" type="text" {...register('category', { required: true })} />
        </div>
        <div>
          <Label htmlFor="publishedDate" className="mb-2">Published Date:</Label>
          <Input id="publishedDate" type="date" {...register('publishedDate', { required: true })} />
        </div>
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </div>
  );
};

export default CreateBlog;
