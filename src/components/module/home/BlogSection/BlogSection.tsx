import BlogCard from "@/components/blogs/blog/BlogCard"
import SectionTitle from "../../SectionTitle"
import blogPosts from "@/components/blogs/data"


const BlogSection = () => {
  return (
  <div className="container mx-auto w-[90%]  ">
  <div className="">
  <SectionTitle title="Our Recent Blog" />
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
