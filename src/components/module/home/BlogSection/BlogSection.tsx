import BlogCard from "@/components/blogs/blog/BlogCard"
import { blogPosts } from "@/components/blogs/data"
import SectionTitle from "../../SectionTitle"


const BlogSection = () => {
  return (
  <div className="container mx-auto w-[90%]   mt-8 md:my-10 ">
  <div className=" mb-12">
  <SectionTitle title="Our Recent Events" />
  </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts?.slice(0,3)?.map((post, index) => (
            <BlogCard key={index} post={post}/>
          ))}
        </div>
  </div>
  )
}

export default BlogSection
