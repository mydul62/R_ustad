"use client";
import { AiOutlineLogin } from "react-icons/ai";

import { JSX, useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaAngleDown, FaUser } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCurrentUser, logout } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import { DroopDown } from "@/components/ui/core/DropDown/DropDown";
import { Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { GetMe } from "@/services/singleUser";
const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "Our Wings", 
    subLinks: [
      { name: "Inter National Wings", href: "#" },
      { name: "National Wings", href: "#" },
      { name: "Publications", href: "/allpapers" },
      { name: "Recent Project", href: "#" }
    ]
  },
  { name: "Our Researchers", href: "/our-team" },
  { name: "Our Blogs & News", href: "#" }
];
interface NavItem {
  label: string;
  href?: string;
  subDropdown?: NavItem[];
}

const links: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Team Members", href: "/team-members" },
  { label: "News & Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [user, setData] = useState(null);
  const router = useRouter()
  const toggleDropdown = (index:any) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await GetMe();
      setData(result?.data);
    };

    fetchData();
  }, []); 
console.log(user)
  const handleLogOut = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container sm:w-[90%] mx-auto hidden lg:flex  justify-between items-center py-4">
        <Link href="/">
          <h2 className="font-bold text-[22px] flex">
            Research{" "}
            <span className="text-[#bc986b] hover:text-yellow-500">Ustad</span>
          </h2>
        </Link>

    

        <div
          className={`md:flex items-center space-x-8`}
        >
          <div>
            <DroopDown/>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger title="User">
            <AiOutlineLogin size={30}/>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
              {/* {user &&  <Link href={`/admin/dashboard`}>Dashboard</Link>} */}
               <Link href={`/admin/dashboard`}>Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="bg-red-500 cursor-pointer">
               {
               user?<span onClick={handleLogOut}>Logout</span>: <Link href={"/login"}>Login</Link>
               }
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
    </div>
    </div>
    <div>
    <div className="p-4 lg:hidden block bg-white shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Research<span className="text-yellow-600">Ustad</span></h1>
       <div className="flex items-center justify-end gap-4">
       <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="p-2 focus:outline-none">
            {open ? <X size={24} /> : <Menu size={24} />}
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <div key={link.name}>
                  {link.subLinks ? (
                    <div>
                      <button 
                        className="text-lg font-medium w-full text-left flex justify-between items-center" 
                        onClick={() => toggleDropdown(index)}
                      >
                        {link.name} <ChevronDown size={20} className={`transition-transform ${openDropdown === index ? "rotate-180" : ""}`} />
                      </button>
                      {openDropdown === index && (
                        <div className="pl-4 mt-2 space-y-2">
                          {link.subLinks.map((subLink) => (
                            <a key={subLink.name} href={subLink.href} className="block">
                              {subLink.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a href={link.href} className="text-lg font-medium">
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>
         
          </SheetContent>
        </Sheet>
        <div>
        <DropdownMenu>
            <DropdownMenuTrigger title="User">
            <AiOutlineLogin size={30}/>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
              {/* {user &&  <Link href={`/admin/dashboard`}>Dashboard</Link>} */}
              {user &&  <Link href={`/admin/dashboard`}>Dashboard</Link>}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="bg-red-500 cursor-pointer">
                <Link href={"/login"}>Login</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
       </div>
      </div>
      
    </div>
    </div>
    </nav>
  );
};

export default Navbar;
