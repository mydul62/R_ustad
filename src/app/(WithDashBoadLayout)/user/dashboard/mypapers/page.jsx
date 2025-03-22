
import ResearchPapers from "@/components/module/ResearchPapers/ResearchPapers";
import { GetAllResearchPaper } from "@/services/allreserchPaper";

const page =async () => {
  const data = await GetAllResearchPaper();
  const researchPapers = data?.data;


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Research Papers</h1>
     <ResearchPapers  researchPapers={researchPapers}></ResearchPapers>
    </div>
  );
};

export default page
