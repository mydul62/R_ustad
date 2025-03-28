"use client";

import { GetSingleMember, UpdateMember } from "@/services/reserarchers";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  currentInstitution: z.string().min(2, "Institution name is required").optional(),
  currentDepartment: z.string().min(2, "Department is required").optional(),
  currentDegree: z.string().min(2, "Degree is required").optional(),
  educationDegree: z.string().min(2, "Education degree is required").optional(),
  educationField: z.string().min(2, "Field of study is required").optional(),
  educationInstitution: z.string().min(2, "Institution is required").optional(),
  educationStatus: z.string().min(2, "Education status is required").optional(),
  scholarship: z.string().optional().optional(),
  shortBio: z.string().max(500, "Short bio must be at maximum 500 characters").optional(),
  facebook: z.string().url("Invalid URL format").optional().optional(),
  twitter: z.string().url("Invalid URL format").optional().optional(),
  linkedin: z.string().url("Invalid URL format").optional().optional(),
});

interface MemberData {
  current?: {
    institution: string;
    department: string;
    degree: string;
  };
  education?: {
    degree: string;
    field: string;
    institution: string;
    status: string;
    scholarship: string;
  };
  research?: string[];
  shortBio: string;
  socialLinks?: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

interface Props {
  id: string;
}

const UpdateForm: React.FC<Props> = ({ id }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setMember] = useState<MemberData | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  useEffect(() => {
    const fetchMember = async () => {
      setLoading(true);
      try {
        const { data } = await GetSingleMember(id);
        setMember(data);
        setValue("currentInstitution", data?.current?.institution || "");
        setValue("currentDepartment", data?.current?.department || "");
        setValue("currentDegree", data?.current?.degree || "");
        setValue("educationDegree", data?.education?.degree || "");
        setValue("educationField", data?.education?.field || "");
        setValue("educationInstitution", data?.education?.institution || "");
        setValue("educationStatus", data?.education?.status || "Ongoing");
        setValue("scholarship", data?.education?.scholarship || "");
        setValue("shortBio", data?.shortBio || "N/A");
        setValue("facebook", data?.socialLinks?.facebook || "");
        setValue("twitter", data?.socialLinks?.twitter || "");
        setValue("linkedin", data?.socialLinks?.linkedin || "");
      } catch (error) {
        console.error("Error fetching member:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMember();
  }, [id, setValue]);

  const onSubmit = async (formData: any) => {
    setLoading(true);
    const payload = {
      ResearchMembar: {
        current: {
          institution: formData.currentInstitution,
          department: formData.currentDepartment,
          degree: formData.currentDegree,
        },
        education: {
          degree: formData.educationDegree,
          field: formData.educationField,
          institution: formData.educationInstitution,
          status: formData.educationStatus,
          scholarship: formData.scholarship,
        },
        research: data?.research || [],
        shortBio: formData.shortBio,
        socialLinks: {
          facebook: formData.facebook,
          twitter: formData.twitter,
          linkedin: formData.linkedin,
        },
      },
    };
    try {
      const res = await UpdateMember(id, JSON.stringify(payload));
      if (res.success === true) {
        toast.success("Member updated successfully!");
      }
    } catch (error) {
      toast.error("Failed to update member.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <Card className="w-full container mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Update Member</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-lg font-medium mt-4">Current Institution</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                Institution
                <Input type="text" {...register("currentInstitution")} />
                {errors.currentInstitution && (
                  <p className="text-red-500 text-sm">{errors.currentInstitution.message}</p>
                )}
              </label>
              <label>
                Department
                <Input type="text" {...register("currentDepartment")} />
                {errors.currentDepartment && (
                  <p className="text-red-500 text-sm">{errors.currentDepartment.message}</p>
                )}
              </label>
              <label>
                Degree
                <Input type="text" {...register("currentDegree")} />
                {errors.currentDegree && (
                  <p className="text-red-500 text-sm">{errors.currentDegree.message}</p>
                )}
              </label>
            </div>
    
            <h3 className="text-lg font-medium mt-4">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                Degree
                <Input type="text" {...register("educationDegree")} />
                {errors.educationDegree && (
                  <p className="text-red-500 text-sm">{errors.educationDegree.message}</p>
                )}
              </label>
              <label>
                Field
                <Input type="text" {...register("educationField")} />
                {errors.educationField && (
                  <p className="text-red-500 text-sm">{errors.educationField.message}</p>
                )}
              </label>
              <label>
                Institution
                <Input type="text" {...register("educationInstitution")} />
                {errors.educationInstitution && (
                  <p className="text-red-500 text-sm">{errors.educationInstitution.message}</p>
                )}
              </label>
              <label>
                Status
                <select {...register("educationStatus")} className="border rounded p-2 w-full">
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                  <option value="Dropped">Dropped</option>
                </select>
                {errors.educationStatus && (
                  <p className="text-red-500 text-sm">{errors.educationStatus.message}</p>
                )}
              </label>
              <label>
                Scholarship
                <Input type="text" {...register("scholarship")} />
                {errors.scholarship && (
                  <p className="text-red-500 text-sm">{errors.scholarship.message}</p>
                )}
              </label>
            </div>
    
            <h3 className="text-lg font-medium mt-4">Short Bio</h3>
            <label>
              Short Bio
              <Textarea {...register("shortBio")} />
              {errors.shortBio && (
                <p className="text-red-500 text-sm">{errors.shortBio.message}</p>
              )}
            </label>
    
            <h3 className="text-lg font-medium mt-4">Social Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label>
                Facebook
                <Input type="text" {...register("facebook")} />
                {errors.facebook && (
                  <p className="text-red-500 text-sm">{errors.facebook.message}</p>
                )}
              </label>
              <label>
                Twitter
                <Input type="text" {...register("twitter")} />
                {errors.twitter && (
                  <p className="text-red-500 text-sm">{errors.twitter.message}</p>
                )}
              </label>
              <label>
                LinkedIn
                <Input type="text" {...register("linkedin")} />
                {errors.linkedin && (
                  <p className="text-red-500 text-sm">{errors.linkedin.message}</p>
                )}
              </label>
            </div>
    
            <Button type="submit" disabled={loading} className="w-full mt-4 cursor-pointer">
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Update Member"}
            </Button>
          </form>
        </CardContent>
      </Card>
    );
    
};

export default UpdateForm;
