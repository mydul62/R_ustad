"use client"
import { TPost } from "@/type";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DeleteBlog } from "@/services/blogs";
import { toast } from "sonner";

const AllBlogs = ({ data }: { data: TPost[] }) => {
  const handleDelete =async (id: string) => {
    console.log("Deleting post with ID:", id);
    // Implement delete functionality here
    try {
      const res = await DeleteBlog(id)
      console.log(res)
      if(res.data){
      toast.success('Blog deleted successfully')
      }
    } catch (error) {
      console.log(error)
    }
  };

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
              <TableCell>{post.author?.name || "Unknown"}</TableCell>
              <TableCell>{post.category}</TableCell>
              <TableCell>{new Date(post.publishedDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <Button variant="outline" className="mr-2" onClick={() => handleView(post._id)}>
                  View
                </Button>
                <Button variant="destructive" onClick={() => handleDelete(post._id)}>
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
