"use client"
import { TPost } from "@/type";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DeleteBlog } from "@/services/blogs";
import { toast } from "sonner";
import Link from "next/link";
import { LinkIcon } from "lucide-react";


const AllBlogs = ({ data }: { data: TPost[] }) => {
  // const handleDelete =async (id: string) => {
  //   console.log("Deleting post with ID:", id);
  //   // Implement delete functionality here
  //   try {
  //     const res = await DeleteBlog(id)
  //     console.log(res)
  //     if(res.data){
  //     toast.success('Blog deleted successfully')
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  const handleView = (id: string) => {
    console.log("Viewing post with ID:", id);
    // Implement view functionality here
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">All Blogs</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Published Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((post) => (
            <TableRow key={post._id}>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.author?.fullName || "Unknown"}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>{new Date(post.publishedDate).toLocaleDateString()}</TableCell>
              <TableCell className=" flex items-center gap-4 ">
              <Link href={`/blog/${post?._id}`} className="btn  mr-2 cursor-pointer">
              <LinkIcon></LinkIcon>
                </Link>
                <Button variant="destructive" className=" cursor-pointer">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllBlogs;
