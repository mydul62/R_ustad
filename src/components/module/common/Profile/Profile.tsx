"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { TUser, UserProfile } from "@/type";
import { GetMe } from "@/services/singleUser";
import { GetSingleMember } from "@/services/reserarchers";
import { ChangePassword } from "@/services/ChangePassword";

const Profile = () => {
  const [user, setUser] = useState<TUser | null>(null);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
console.log(user,currentUser)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ oldPassword: string; newPassword: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetMe();
        setUser(result?.data);
     
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = async (data: { oldPassword: string; newPassword: string }) => {
    try {
      if (data) {
        const res = await ChangePassword(data);
        console.log(res);
        toast.success("Password changed successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to change password. Please try again.");
    }
  };

  return (
    <div className=" flex justify-center items-center bg-gray-100 p-6">
      <Card className="w-full max-w-5xl shadow-xl rounded-lg bg-white flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <div className="w-full md:w-2/5 bg-gradient-to-r from-blue-600 to-blue-400 text-white p-8 flex flex-col items-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <Avatar className="w-24 h-24 border-4 border-white shadow-md">
            <AvatarImage src="https://via.placeholder.com/150" alt="Profile" />
            <AvatarFallback className="text-2xl font-bold">AI</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl mt-4 text-center font-semibold">{user?.fullName}</CardTitle>
          <p className="text-gray-200 text-lg text-center mt-1">{user?.role}</p>
          <p className="text-gray-300 text-sm text-center mt-2">{user?.email}</p>
        </div>

        {/* Main Content */}
        <CardContent className="w-full md:w-3/5 p-8">
          {/* Password Change Notice */}
          <div
          className={`p-4 rounded-md mb-4 text-center font-semibold 
            ${user?.needsPasswordChange ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}
          `}
        >
          {user?.needsPasswordChange ? (
            <p>Please change your password as soon as possible!</p>
          ) : (
            
            <div>
            <p>Password Up to Date</p>
            <p>Password changed at: {new Date(user?.passwordChangedAt as string).toLocaleString()}</p>
          </div>
          )}
        </div>
        

          {/* Change Password */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Change Password</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Old Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Old Password</label>
                <Input
                  type="password"
                  placeholder="Enter Old Password"
                  {...register("oldPassword", { required: "Old password is required" })}
                  className="w-full border rounded-md p-2"
                />
                {errors.oldPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.oldPassword.message}</p>
                )}
              </div>

              {/* New Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">New Password</label>
                <Input
                  type="password"
                  placeholder="Enter New Password"
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters long" },
                  })}
                  className="w-full border rounded-md p-2"
                />
                {errors.newPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.newPassword.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
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
