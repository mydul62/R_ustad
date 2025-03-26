"use client"
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash2, ShieldCheck } from "lucide-react";
import { TUser } from "@/type";
import { toast } from "sonner";
import { PromoteRole } from "@/services/Users";

const AllUsers = ({users}:{users:TUser[]}) => {


  const handleRoleChange = async (id:string, currentRole:string) => {
 try {
  if(currentRole =="superAdmin"){
    toast.error('superAdmin can not be change');
    return
    }
  if(currentRole =="user" || currentRole ==="admin"){
    const res = await PromoteRole(id);
   if(res.data){
   console.log(res.data.role)
   toast.success(`Promoted ${res?.data?.fullName} to ${res?.data?.role}`);
   }
  }
 } catch (error) {
  console.log(error)
 }
    
    
 
  };

  return (
    <div className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          { users?.length>0 && users?.map((user:TUser) => (
            <TableRow key={user._id}>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => handleRoleChange(user?._id,user?.role)}>
                  <ShieldCheck className="w-4 h-4" /> {user.role === "admin" ? "Promot to User" : "Promote to Admin"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllUsers;
