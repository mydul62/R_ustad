"use client";

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { UpdateMember } from "@/services/reserarchers";
import { TResearchAssociate } from "@/type";
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
  image?: FileList;
}

// Placeholder function for API call
const updateMember = async (id: string, data: any) => {
  console.log("Updating member with ID:", id, "Data:", data);
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

const UpdateForm = ({ data,id }: { data: TResearchAssociate,id:string }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [researchWorks, setResearchWorks] = useState<string[]>(data.research || [""]);
  const [previewImage, setPreviewImage] = useState<string>(data.image || "");

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (formData: FormData) => {
    setLoading(true);

    // Image upload logic (if needed)
    let imageURL = data.profileImg;
    if (formData.image && formData.image.length > 0) {
      const uploadedImage = formData.image[0]; // Handle image file upload
      console.log("Uploading Image:", uploadedImage);
      imageURL = URL.createObjectURL(uploadedImage); // Placeholder for actual image URL after upload
    }

    const payload = {
      fullName: formData.fullName || data.fullName,
      email: formData.email || data.email,
      contactNo: formData.contactNo || data.contactNo,
      designation: formData.designation || data.designation,
      current: {
        institution: formData.currentInstitution || data.current?.institution || "",
        department: formData.currentDepartment || data.current?.department || "",
        degree: formData.currentDegree || data.current?.degree || "",
      },
      education: {
        degree: formData.educationDegree || data.education?.degree || "",
        field: formData.educationField || data.education?.field || "",
        institution: formData.educationInstitution || data.education?.institution || "",
        status: formData.educationStatus || data.education?.status || "Ongoing",
        scholarship: formData.scholarship || data.education?.scholarship || "",
      },
      research: researchWorks,
      shortBio: formData.shortBio || data.shortBio || "",
      socialLinks: {
        facebook: formData.facebook || data.socialLinks?.facebook || "",
        twitter: formData.twitter || data.socialLinks?.twitter || "",
        linkedin: formData.linkedin || data.socialLinks?.linkedin || "",
      },
      image: imageURL, // Store updated image URL
    };

    try {

   if(payload){
   console.log(payload)
    const res=  await UpdateMember(id, payload);
    console.log(res)
     setLoading(false);
     toast.success("Member updated successfully");
   }
    } catch (error) {
      setLoading(false);
      toast.error("Error updating member");
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-full w-[98%] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 py-4">
        <h2 className="text-lg font-semibold">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName"  >Full Name</Label>
            <Input id="fullName"   defaultValue={data.fullName} {...register("fullName")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email"   type="email" defaultValue={data.email} {...register("email")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactNo">Contact</Label>
            <Input id="contactNo"   defaultValue={data.contactNo} {...register("contactNo")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="designation">Designation</Label>
            <Input id="designation"   defaultValue={data.designation} {...register("designation")} />
          </div>
        </div>

        <Separator />

        <h2 className="text-lg font-semibold">Profile Image</h2>
        <div className="flex flex-col items-center gap-4">
          {previewImage && <img src={previewImage} alt="Preview" className="w-32 h-32 rounded-full object-cover" />}
          <Input type="file" accept="image/*" {...register("image")} onChange={handleImageChange} />
        </div>

  
        <Separator />

<h2 className="text-lg font-semibold">Current Institution Details</h2>
<div className="grid grid-cols-3 gap-4">
  <div className="space-y-2">
    <Label htmlFor="currentInstitution">Institution</Label>
    <Input id="currentInstitution" defaultValue={data.current?.institution} {...register("currentInstitution")} />
  </div>
  <div className="space-y-2">
    <Label htmlFor="currentDepartment">Department</Label>
    <Input id="currentDepartment" defaultValue={data.current?.department} {...register("currentDepartment")} />
  </div>
  <div className="space-y-2">
    <Label htmlFor="currentDegree">Degree</Label>
    <Input id="currentDegree" defaultValue={data.current?.degree} {...register("currentDegree")} />
  </div>
</div>

<Separator />

<h2 className="text-lg font-semibold">Educational Background</h2>
<div className="grid grid-cols-3 gap-4">
  <div className="space-y-2">
    <Label htmlFor="educationDegree">Degree</Label>
    <Input id="educationDegree" defaultValue={data.education?.degree} {...register("educationDegree")} />
  </div>
  <div className="space-y-2">
    <Label htmlFor="educationField">Field of Study</Label>
    <Input id="educationField" defaultValue={data.education?.field} {...register("educationField")} />
  </div>
  <div className="space-y-2">
    <Label htmlFor="educationInstitution">Institution</Label>
    <Input id="educationInstitution" defaultValue={data.education?.institution} {...register("educationInstitution")} />
  </div>
</div>

<div className="grid grid-cols-2 gap-4">
  <div className="space-y-2">
    <Label htmlFor="educationStatus">Education Status</Label>
    <Input id="educationStatus" defaultValue={data.education?.status} {...register("educationStatus")} />
  </div>
  <div className="space-y-2">
    <Label htmlFor="scholarship">Scholarship</Label>
    <Input id="scholarship" defaultValue={data.education?.scholarship} {...register("scholarship")} />
  </div>
</div>


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
          <Textarea id="shortBio" defaultValue={data.shortBio} {...register("shortBio")} />
        </div>

        <Separator />

<h2 className="text-lg font-semibold">Social Links</h2>
<div className="grid grid-cols-3 gap-4">
  <div className="space-y-2">
    <Label htmlFor="facebook">Facebook</Label>
    <Input type="url" id="facebook" defaultValue={data.socialLinks?.facebook} {...register("facebook")} />
  </div>
  <div className="space-y-2">
    <Label htmlFor="twitter">Twitter</Label>
    <Input type="url" id="twitter" defaultValue={data.socialLinks?.twitter} {...register("twitter")} />
  </div>
  <div className="space-y-2">
    <Label htmlFor="linkedin">LinkedIn</Label>
    <Input type="url" id="linkedin" defaultValue={data.socialLinks?.linkedin} {...register("linkedin")} />
  </div>
</div>


        <DialogFooter>
          <Button type="submit">{loading ? <span>Updating...</span> : <span>Update</span>}</Button>
        </DialogFooter>
      </form>
    </div>
  );
};

export default UpdateForm;
