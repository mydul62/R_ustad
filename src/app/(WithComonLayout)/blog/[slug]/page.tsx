"use client";

import SingleBlogPage from "@/components/blogs/SingleBlogPage";

const Page = ({ params }:{params:any}) => {
  const slug = params?.slug;

  if (!slug) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <SingleBlogPage id={slug} />
    </div>
  );
};

export default Page;
