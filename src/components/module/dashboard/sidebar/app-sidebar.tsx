"use client";

import * as React from "react";
import {
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";
import { GetMe } from "@/services/singleUser";

interface User {
  _id: string;
  email: string;
  needsPasswordChange: boolean;
  role: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const adminRoute = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Create Events",
      url: "/admin/dashboard/createevents",
      icon: Bot,
    },
    {
      title: "Manage Blog",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "All Blog",
          url: "/admin/dashboard/allblog",
        },
      ],
    },
    {
      title: "Manage Research Paper",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "All Research Paper",
          url: "/admin/dashboard/allresearchpaper",
        },
      ],
    },
    {
      title: "Manage Membar",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Create Membar",
          url: "/admin/dashboard/createassociate",
          icon: Bot,
        },
        {
          title: "All Users",
          url: "/admin/dashboard/allusers",
        },
        {
          title: "Manage Members",
          url: "/admin/dashboard/members",
        },
      ],
    },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings,
    //   items: [
      
    //   ],
    // },
    {
      title: "Personal Working",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "My ResearchPaper",
          url: "/admin/dashboard/myresearchpaper",
          icon: Bot,
        },
        {
          title: "Create ResearchPaper",
          url: "/admin/dashboard/createresearchPaper",
          icon: Bot,
        },
        {
          title: "Blog Post",
          url: "/admin/dashboard/blogpost",
          icon: Bot,
        },
        {
          title: "Show All Post",
          url: "/admin/dashboard/createresearchPaper",
          icon: Bot,
        },
        {
          title: "Profile",
          url: "/user/dashboard/profileinfo",
        },

      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
    
  ],
};

const userRoute = {
  navMain: [
    {
      title: "Dashboard",
      url: "/user/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Update Information",
      url: "/user/dashboard/updateinfo",
      icon: Bot,
    },
    {
      title: "My All Papers",
      url: "/user/dashboard/mypapers",
      icon: Bot,
    },
    {
      title: "Post a Blog",
      url: "/user/dashboard/createblog",
      icon: Bot,
    },
    {
      title: "My All Blogs",
      url: "/user/dashboard/mypapers",
      icon: Bot,
    },
    {
      title: "Add Research Paper",
      url: "/user/dashboard/addresearchpaper",
      icon: Bot,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/user/dashboard/profileinfo",
        },
      ],
    },
    
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [user, setUser] = React.useState<User | null>(null);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetMe();
        setUser(result?.data || null);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
     
       <Sidebar>
         <div className="px-4">
    <div className="w-full   my-10 h-5 bg-gray-200 rounded-md animate-pulse"></div>
    <div className="w-25  h-5 bg-gray-200 rounded-md animate-pulse"></div>

  <div className="space-y-4 mt-4 ">
  <div className="flex items-center justify-center space-x-3">
   <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
   <div className="w-full h-4 bg-gray-200 rounded-md animate-pulse"></div>
 </div>
 <div className="flex items-center justify-center space-x-3">
   <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
   <div className="w-full h-4 bg-gray-200 rounded-md animate-pulse"></div>
 </div>
 <div className="flex items-center justify-center space-x-3">
   <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
   <div className="w-full h-4 bg-gray-200 rounded-md animate-pulse"></div>
 </div>
 <div className="flex items-center justify-center space-x-3">
   <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
   <div className="w-full h-4 bg-gray-200 rounded-md animate-pulse"></div>
 </div>
 <div className="flex items-center justify-center space-x-3">
   <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
   <div className="w-full h-4 bg-gray-200 rounded-md animate-pulse"></div>
 </div>
 <div className="flex items-center justify-center space-x-3">
   <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse"></div>
   <div className="w-full h-4 bg-gray-200 rounded-md animate-pulse"></div>
 </div>
{/* Skeleton Items */}

</div>
        </div>
       </Sidebar>
  
    );
  }

  if (!user) {
    return null;
  }

  const data = user.role === "superAdmin" || user.role === "admin" ? adminRoute : userRoute;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center"></div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">
                    Research <span className="text-red-400">Ustad</span>
                  </h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
