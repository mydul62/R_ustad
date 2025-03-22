"use client";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ApprovePaper, DeletePaper, GetAllResearchPaper } from "@/services/allreserchPaper";
import { useEffect, useState } from "react";

const MyResearch = () => {
  const [researchPapers, setResearchPapers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await GetAllResearchPaper();
        setResearchPapers(data?.data || []);
      } catch (error) {
        setError("Failed to fetch research papers.");
        console.error("Error fetching research papers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleApprove = async (id: string) => {
    try {
      console.log("Approving paper with ID:", id);
      const res = await ApprovePaper(id);
      if (res.success) {
        setResearchPapers((prev) =>
          prev.map((paper) => (paper._id === id ? { ...paper, isApproved: true } : paper))
        );
      } else {
        alert("Approval failed!");
      }
    } catch (error) {
      console.error("Error approving paper:", error);
      alert("Error approving paper!");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      console.log("Deleting paper with ID:", id);
      const res = await DeletePaper(id);
      if (res.success) {
        setResearchPapers((prev) => prev.filter((paper) => paper._id !== id));
      } else {
        alert("Deletion failed!");
      }
    } catch (error) {
      console.error("Error deleting paper:", error);
      alert("Error deleting paper!");
    }
  };

  return (
    <div className="overflow-x-auto w-full p-4">
      <h2 className="text-2xl font-semibold mb-4">Research Papers</h2>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <Table >
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {researchPapers.length > 0 ? (
            researchPapers.map((paper) => (
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
                    <a href={paper.visitLink} target="_blank" rel="noopener noreferrer">
                      View Paper
                    </a>
                  </Button>
                </TableCell>
               
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={10} className="text-center text-gray-500">
                No research papers found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyResearch;
