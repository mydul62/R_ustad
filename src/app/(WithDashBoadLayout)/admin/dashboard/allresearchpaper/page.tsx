import { GetAllResearchPaper } from "@/services/allreserchPaper";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import ResearchPapers from "@/components/module/ResearchPapers/ResearchPapers";

const ResearchPapersPage = async () => {
  const data = await GetAllResearchPaper();
  const researchPapers = data?.data;


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Research Papers</h1>
     <ResearchPapers  researchPapers={researchPapers}></ResearchPapers>
    </div>
  );
};

export default ResearchPapersPage;