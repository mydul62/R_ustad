
import BlogPage from '@/components/blogs/BlogPage';
import { GetAllBlog } from '@/services/blogs';
import React from 'react';

const page =async () => {
const {data}=await GetAllBlog()
console.log(data)
    return (
        <div>
           <BlogPage data = {data}></BlogPage>
        </div>
    );
};

export default page;