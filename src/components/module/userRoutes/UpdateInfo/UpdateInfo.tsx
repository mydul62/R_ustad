"use client";

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


// Define form data structure
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

// Placeholder function for API call
const registerUser = async (formData: FormData) => {
  console.log("Registering user with data:", formData);
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

const UpdateInfo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [researchWorks, setResearchWorks] = useState<string[]>([""]);

  const handleAddResearch = () => {
    setResearchWorks([...researchWorks, ""]);
  };

  const handleResearchChange = (index: number, value: string) => {
    const updatedResearch = [...researchWorks];
    updatedResearch[index] = value;
    setResearchWorks(updatedResearch);
  };

  const handleRemoveResearch = (index: number) => {
    setResearchWorks(researchWorks.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    const payload = {
      password: "associate1234",
      ResearchAssociate: {
        fullName: data.fullName,
        email: data.email,
        contactNo: data.contactNo,
        designation: data.designation,
        current: {
          institution: data.currentInstitution,
          department: data.currentDepartment,
          degree: data.currentDegree,
        },
        education: {
          degree: data.educationDegree,
          field: data.educationField,
          institution: data.educationInstitution,
          status: data.educationStatus || "Ongoing",
          scholarship: data.scholarship,
        },
        research: researchWorks,
        shortBio: data.shortBio,
        socialLinks: {
          facebook: data.facebook,
          twitter: data.twitter,
          linkedin: data.linkedin,
        },
      },
    };

    const formData = new FormData();
    if (data.file?.[0]) {
      formData.append("file", data.file[0]);
    }
    formData.append("data", JSON.stringify(payload));

    try {
      await registerUser(data);
      setLoading(false);
      toast.success("User created successfully");
    } catch (error) {
      setLoading(false);
      toast.error("Error creating user");
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-full w-[98%] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 py-4">
        <h2 className="text-lg font-semibold">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" {...register("fullName", { required: "Full Name is required" })} />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email", { required: "Email is required" })} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactNo">Contact</Label>
            <Input id="contactNo" {...register("contactNo", { required: "Contact is required" })} />
            {errors.contactNo && <p className="text-red-500 text-sm">{errors.contactNo.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="designation">Designation</Label>
            <Input id="designation" {...register("designation", { required: "Designation is required" })} />
            {errors.designation && <p className="text-red-500 text-sm">{errors.designation.message}</p>}
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
          Add Research
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

        <h2 className="text-lg font-semibold">Profile Picture</h2>
        <div className="space-y-2">
          <Label htmlFor="file">Upload Image</Label>
          <Input type="file" id="file" {...register("file")} />
        </div>

        <DialogFooter>
          <Button type="submit">{loading ? <span>Submitting...</span> : <span>Submit</span>}</Button>
        </DialogFooter>
      </form>
    </div>
  );
};

export default UpdateInfo;
