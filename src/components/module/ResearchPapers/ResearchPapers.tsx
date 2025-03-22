"use client"
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ApprovePaper, DeletePaper } from "@/services/allreserchPaper";

const ResearchPapers = ({ researchPapers }) => {
  console.log(researchPapers);

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

  return (
    <div>
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
            {researchPapers?.map((paper) => (
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
