"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaUniversity, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { TUser, UserProfile } from "@/type";
import { GetMe } from "@/services/singleUser";
import { GetSingleMember } from "@/services/reserarchers";
import { ChangePassword } from "@/services/ChangePassword";

const Profile = () => {
  const [user, setUser] = useState<TUser | null>(null);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  // useForm Hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetMe();
        setUser(result.data);
        if (result?.data?._id) {
          const res = await GetSingleMember(result.data._id);
          setCurrentUser(res.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const onSubmit =async (data: any) => {
  console.log(data)
    if(data){
      const res =await ChangePassword(data)
      console.log(res)
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <Card className="w-full max-w-7xl shadow-xl rounded-lg bg-white flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-2/4 bg-blue-500 text-white p-8 py-3 flex flex-col items-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <Avatar className="w-24 h-24 border-4 border-white shadow-md">
            <AvatarImage src="https://via.placeholder.com/150" alt="Profile" />
            <AvatarFallback className="text-2xl font-bold">AI</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl mt-4 text-center">
            {currentUser?.fullName || "Anis Islam"}
          </CardTitle>
          <p className="text-gray-200 text-lg text-center">
            {currentUser?.role || "Research Associate"}
          </p>
          <p className="text-gray-300 text-sm text-center mt-2">
            {currentUser?.email || "anissir@gmail.com"}
          </p>
          <p className="flex items-center text-gray-300 mt-2">
            <FaUniversity className="mr-2 text-white" />
            {currentUser?.education?.institution || "ABC University"},{" "}
            {currentUser?.education?.field || "Computer Science"}
          </p>
          {/* Social Links */}
          <div className="mt-4 flex space-x-4">
            <a href={currentUser?.socialLinks?.facebook || "#"} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl hover:scale-110 transition-transform" />
            </a>
            <a href={currentUser?.socialLinks?.twitter || "#"} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl hover:scale-110 transition-transform" />
            </a>
            <a href={currentUser?.socialLinks?.linkedin || "#"} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <CardContent className="w-full md:w-2/3 p-8">
          {/* Research Areas */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Research Areas</h3>
            <ul className="list-disc list-inside text-gray-600 text-md mt-2 space-y-1">
              {(currentUser?.research || ["AI in Healthcare", "Blockchain Security"]).map(
                (topic, index) => (
                  <li key={index}>{topic}</li>
                )
              )}
            </ul>
          </div>

          {/* Change Password */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800">Change Password</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
              <Input
                type="password"
                placeholder="Old Password"
                {...register("oldPassword", { required: "Current password is required" })}
              />
              {/* {errors.currentPassword && (
                <p className="text-red-500 text-sm">{errors.currentPassword.message}</p>
              )} */}

              <Input
                type="password"
                placeholder="New Password"
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters long" },
                })}
              />
              {/* {errors.newPassword && (
                <p className="text-red-500 text-sm">{errors.newPassword.message}</p>
              )} */}

              <Button type="submit" className="w-full bg-blue-500 text-white">
                Change Password
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
