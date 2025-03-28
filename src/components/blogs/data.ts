import { IPost } from "@/type";

const blogPosts:IPost[] = [
  {
    _id: "123",
    image: "/01.png", // Relative path from the public folder
    title: "The Future of Web Development",
    author: {
      _id:'1',
      name: "John Doe",
      designation: "Senior Web Developer",
      image: "/02.png",
      fullName:"junayet shiblu"
    },
    shortDescription: "Explore the latest trends in web development, including AI, serverless computing, and the rise of JavaScript frameworks.",
    category: "Technology",
  },
  {
    _id: "124",

    image: "/02.png",
    title: "UI/UX Design Principles",
    author: {
      _id:'2',
      name: "Jane Smith",
      designation: "UI/UX Designer",
      image: "/01.png",
      fullName:"junayet shiblu"

    },
    shortDescription: "Learn the essential UI/UX design principles that can improve user experience and increase engagement.",
    category: "Design",
  },
  {
    _id: "125",

    image: "/01.png",
    title: "Introduction to TypeScript",
    author: {
      _id:'1',
      name: "Alex Johnson",
      designation: "Software Engineer",
      image: "/02.png",
      fullName:"junayet shiblu"


    },
    shortDescription: "A beginner-friendly guide to understanding TypeScript and how it enhances JavaScript development.",
    category: "Programming",
  }
];

export default blogPosts;