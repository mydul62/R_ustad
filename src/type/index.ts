export type TResearchAssociate = {
  current: {
    institution: string;
    department: string;
    degree: string;
  };
  education: {
    degree: string;
    field: string;
    institution: string;
    status: "Ongoing" | "Completed";
    scholarship: string;
  };
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
  _id: string;
  user: string;
  profileImg: string;
  email: string;
  contactNo: string;
  fullName: string;
  designation: string;
  research: any[]; // Adjust if research has a specific structure
  shortBio: string;
  isDeleted: boolean;
  id: string;
};
export type ResearchPaper = {
  _id: string;
  year: number;
  title: string;
  authors: string[];
  journal: string;
  volume: string;
  impactFactor: number;
  journalRank: string;
  visitLink: string;
};
