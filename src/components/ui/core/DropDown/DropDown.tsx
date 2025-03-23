"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Card, CardDescription, CardFooter, CardTitle } from "../../card"
import { Button } from "../../button"
import { GetAllResearchPaperPublic } from "@/services/allreserchPaper"
import { ResearchPaper } from "@/type"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Inter National Wings",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "National Wings",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Publications",
    href: "/allpapers",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Recent Project",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  }

]

export function DroopDown() {
  const [papers, setPapers] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllResearchPaperPublic();
      setPapers(data?.data); 
    };
  
    fetchData(); 
  }, []);

  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Recent ResearchPaper</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-2">
    

                 {papers?.slice(0,3).map((paper:ResearchPaper) => (
                   <Link href={paper?.visitLink} target="_blank">
                    <Card key={paper._id} className="max-w-sm py-1  rounded-lg bg-white">
                    <div className="p-4">
                      <CardTitle className="text-lg font-semibold">{paper.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">
                        <p>Authors: {paper.authors.join(", ")}</p>
                        <p>Journal: {paper.journal}</p>
                      </CardDescription>
                    </div>
                  </Card>
                    
                   </Link>
                    ))}
               <Card className=" justify-center h-fit  items-center ">
               <Link className=" hover:underline hover:text-blue-400" href={'allpapers'}>See more</Link>
               </Card>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Wings</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/team-members" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Our Researchers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Our Events & news
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
