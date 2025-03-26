"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TResearchAssociate } from "@/type";
import { DeleteMember } from "@/services/reserarchers";
import Link from "next/link";

const Members = ({ data }: { data: TResearchAssociate[] }) => {
console.log(data)

const handleUpdate =(id:string)=>{
  console.log(id)
}
const handleDelete =async(id:string)=>{
const res  = await DeleteMember(id)
console.log(res)
}
  return (
    <div className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact No</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length>0 && data?.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.fullName}</TableCell>
              <TableCell>{member.designation}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.contactNo}</TableCell>
              <TableCell className="flex gap-2">
                <Link className="btn" href={`members/${member?._id}`}>
                <Button>  Update</Button>
                </Link>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(member?.id)}>
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

export default Members;
