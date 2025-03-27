import AllBlogs from "@/components/module/admin/AllBlogs/AllBlogs"
import { GetAllBlog } from "@/services/blogs"


const page = async() => {
 const {data} =await GetAllBlog()
 console.log(data)
  return (
    <div ><AllBlogs data={data}></AllBlogs></div>
  )
}

export default page