"use client"
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ApprovePaper, DeletePaper, GetAllResearchPaper } from "@/services/allreserchPaper";
import { TPapers } from "@/type";
import { useEffect, useState } from "react";

const ResearchPapers = () => {
  const [researchPapers, setResearchPapers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllResearchPaper();
    console.log(data)
      setResearchPapers(data?.data || []);
    };

    fetchData();
  }, []);
  

  
  console.log(researchPapers)
  
  const handleApprove = async (id: string) => {
    console.log("Approving paper with ID:", id);
    const res = await ApprovePaper(id);
    console.log(res);
  };

  const handleDelete = async (id: string) => {
    console.log("Deleting paper with ID:", id);
    const res = await DeletePaper(id);
    console.log(res);
  };
  if(researchPapers.length<1){
    return <div className=" flex justify-center items-center"><div>No data available!</div></div>
  }
  return (
    <div>
    <h1 className="text-2xl font-bold mb-4">Research Papers</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Authors</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Journal</TableHead>
              <TableHead>Impact Factor</TableHead>
              <TableHead>Rank</TableHead>
              <TableHead>Journal Type</TableHead>
              <TableHead>Link</TableHead>
              <TableHead>Approve Action</TableHead>
              <TableHead>Delete Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {researchPapers?.map((paper:TPapers) => (
              <TableRow key={paper._id}>
                <TableCell>{paper.title}</TableCell>
                <TableCell>{paper.authors.join(", ")}</TableCell>
                <TableCell>{paper.year}</TableCell>
                <TableCell>{paper.journal}</TableCell>
                <TableCell>{paper.impactFactor}</TableCell>
                <TableCell>{paper.journalRank}</TableCell>
                <TableCell>{paper.journalType}</TableCell>
                <TableCell>
                  <Button asChild variant="link">
                    <a href={paper.visitLink} target="_blank" rel="noopener noreferrer">View Paper</a>
                  </Button>
                </TableCell>
                <TableCell>
                  {!paper.isApproved ? (
                    <Button onClick={() => handleApprove(paper._id)} variant="default">
                      Approve
                    </Button>
                  ) : (
                    <span className="text-green-600">Approved</span>
                  )}
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(paper._id)} variant="destructive">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ResearchPapers;
