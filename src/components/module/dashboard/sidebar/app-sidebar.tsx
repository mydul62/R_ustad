"use client";

import * as React from "react";
import {
  LayoutDashboard,
  UserPlus,
  CalendarPlus,
  FileText,
  Users,
  Sliders,
  HelpCircle,
  MessageSquare,
  Briefcase,
  ShoppingCart,
  Globe,
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
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Create User",
      url: "/admin/dashboard/createassociate",
      icon: UserPlus,
    },
    {
      title: "Create Events",
      url: "/admin/dashboard/createevents",
      icon: CalendarPlus,
    },
    {
      title: "All Blogs",
      url: "/admin/dashboard/allblogs",
      icon: CalendarPlus,
    },
    {
      title: "Manage Research Paper",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "All Research Paper",
          url: "/admin/dashboard/allresearchpaper",
        },
      ],
    },
    {
      title: "Manage Users",
      url: "#",
      icon: Users,
      items: [
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
    {
      title: "Settings",
      url: "#",
      icon: Sliders,
      items: [
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
      icon: HelpCircle,
    },
    {
      title: "Feedback",
      url: "#",
      icon: MessageSquare,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Briefcase,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: ShoppingCart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Globe,
    },
  ],
};

const userRoute = {
  navMain: [
    {
      title: "Dashboard",
      url: "/user/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Update Information",
      url: "/user/dashboard/updateinfo",
      icon: UserPlus,
    },
    {
      title: "My All Papers",
      url: "/user/dashboard/mypapers",
      icon: FileText,
    },
    {
      title: "Post a Blog",
      url: "/user/dashboard/createblog",
      icon: CalendarPlus,
    },
    {
      title: "My All Blogs",
      url: "/user/dashboard/mypapers",
      icon: FileText,
    },
    {
      title: "Add Research Paper",
      url: "/user/dashboard/addresearchpaper",
      icon: FileText,
    },
    {
      title: "Settings",
      url: "#",
      icon: Sliders,
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

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetMe();
        setUser(result?.data || null);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  if (!user) {
    return null;
  }

  const data =
    user.role === "superAdmin" || user.role === "admin" ? adminRoute : userRoute;

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
