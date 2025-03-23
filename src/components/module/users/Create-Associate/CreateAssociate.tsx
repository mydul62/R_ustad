"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { registerUser } from "@/services/AuthService";
import { toast } from "sonner";
import NMImageUploader from "@/components/ui/core/NMImageUploader";

interface FormData {
  fullName: string;
  email: string;
  contactNo: string;
  designation: string;
  currentInstitution?: string;
  currentDepartment?: string;
  currentDegree?: string;
  educationDegree?: string;
  educationField?: string;
  educationInstitution?: string;
  educationStatus?: string;
  scholarship?: string;
  shortBio?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  file?: FileList;
}

const CreateAssociate: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [researchWorks, setResearchWorks] = useState<string[]>([""]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const handleAddResearch = (): void => {
    setResearchWorks([...researchWorks, ""]);
  };

  const handleResearchChange = (index: number, value: string): void => {
    const updatedResearch = [...researchWorks];
    updatedResearch[index] = value;
    setResearchWorks(updatedResearch);
  };

  const handleRemoveResearch = (index: number): void => {
    setResearchWorks(researchWorks.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: FormData): Promise<void> => {
    setLoading(true);

    const payload = {
      password: "associate1234",
      ResearchMembar: {
        fullName: data.fullName,
        email: data.email,
        contactNo: data.contactNo,
        designation: data.designation,
        current: {
          institution: data.currentInstitution || "", // যদি undefined হয়, তাহলে ""
          department: data.currentDepartment || "",
          degree: data.currentDegree || "",
        },
        education: {
          degree: data.educationDegree || "",
          field: data.educationField || "",
          institution: data.educationInstitution || "",
          status: data.educationStatus || "Ongoing",
          scholarship: data.scholarship || "",
        },
        research: researchWorks,
        shortBio: data.shortBio || "",
        socialLinks: {
          facebook: data.facebook || "",
          twitter: data.twitter || "",
          linkedin: data.linkedin || "",
        },
      },
    };
    

    const formData = new FormData();
    if (data.file?.[0]) {
      formData.append("file", data.file[0]);
    }
    formData.append("data", JSON.stringify(payload));
console.log(imageFiles)
    try {
      const res = await registerUser(formData);
      toast.success("User created successfully");
      console.log("Response from backend:", res);
    } catch (error) {
      console.log("Error from backend:", error);
      toast.error("User registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-full w-[98%] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 py-4">
        <h2 className="text-lg font-semibold">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { id: "fullName", label: "Full Name", required: true },
            { id: "email", label: "Email", type: "email", required: true },
            { id: "contactNo", label: "Contact", required: true },
            { id: "designation", label: "Designation", required: true },
          ].map(({ id, label, type = "text", required }) => (
            <div key={id} className="space-y-2">
              <Label htmlFor={id}>{label}</Label>
              <Input
                id={id}
                type={type}
                {...register(id as keyof FormData, required ? { required: `${label} is required` } : {})}
              />
              {errors[id as keyof FormData] && (
                <p className="text-red-500 text-sm">{errors[id as keyof FormData]?.message}</p>
              )}
            </div>
          ))}
        </div>

        <Separator />

        <h2 className="text-lg font-semibold">Current Position</h2>
        <div className="grid grid-cols-3 gap-4">
          {["currentInstitution", "currentDepartment", "currentDegree"].map((id) => (
            <div key={id} className="space-y-2">
              <Label htmlFor={id}>{id.replace("current", "")}</Label>
              <Input id={id} {...register(id as keyof FormData)} />
            </div>
          ))}
        </div>

        <Separator />

        <h2 className="text-lg font-semibold">Educational Background</h2>
        <div className="grid grid-cols-3 gap-4">
          {["educationDegree", "educationField", "educationInstitution"].map((id) => (
            <div key={id} className="space-y-2">
              <Label htmlFor={id}>{id.replace("education", "")}</Label>
              <Input id={id} {...register(id as keyof FormData)} />
            </div>
          ))}
          <div className="space-y-2">
            <Label htmlFor="educationStatus">Education Status</Label>
            <select id="educationStatus" {...register("educationStatus")} className="w-full p-2 border rounded">
              <option value="">Select Status</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="scholarship">Scholarship</Label>
            <Input id="scholarship" {...register("scholarship")} />
          </div>
        </div>

        <Separator />

        <h2 className="text-lg font-semibold">Research Work</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {researchWorks.map((research, index) => (
            <div key={index} className="flex items-center gap-2">
              <Input
                value={research}
                onChange={(e) => handleResearchChange(index, e.target.value)}
                placeholder={`Research ${index + 1}`}
              />
              <Button type="button" onClick={() => handleRemoveResearch(index)} variant="destructive">
                ✕
              </Button>
            </div>
          ))}
        </div>
        <Button variant="outline" type="button" onClick={handleAddResearch}>
          + Add Research
        </Button>

        <Separator />

<h2 className="text-lg font-semibold">Short Bio</h2>
<div className="space-y-2">
  <Label htmlFor="shortBio">Short Bio</Label>
  <Textarea id="shortBio" {...register("shortBio")} />
</div>

<Separator />

<h2 className="text-lg font-semibold">Social Links</h2>
<div className="grid grid-cols-3 gap-4">
  <div className="space-y-2">
    <Label htmlFor="facebook">Facebook</Label>
    <Input type="url" id="facebook" {...register("facebook")} />
  </div>
  <div className="space-y-2">
    <Label htmlFor="twitter">Twitter</Label>
    <Input type="url" id="twitter" {...register("twitter")} />
  </div>
  <div className="space-y-2">
    <Label htmlFor="linkedin">LinkedIn</Label>
    <Input type="url" id="linkedin" {...register("linkedin")} />
  </div>
</div>

<Separator />

        <h2 className="text-lg font-semibold">Upload Profile Image</h2>
        {imagePreview.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-4">
            {imagePreview.map((src, index) => (
              <img key={index} src={src} alt={`Preview ${index}`} className="w-12 h-12 object-cover rounded-md" />
            ))}
          </div>
        )}
        <NMImageUploader setImageFiles={setImageFiles} setImagePreview={setImagePreview} />

     

        <DialogFooter>
          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </DialogFooter>
      </form>
    </div>
  );
};

export default CreateAssociate;
