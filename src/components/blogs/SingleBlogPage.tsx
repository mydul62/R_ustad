"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // For getting dynamic route params
import { Card } from "../ui/card";

function BlogDetailsPage({id}) {

  const post = 
    {
      id: 1,
      title: "The Importance of Continuous Learning",
      intro: "In today's fast-paced world, continuous learning is essential for personal and professional growth.",
      highlight: "In this post, we will explore the science behind happiness and what contributes to a fulfilling life. We will discuss the role of relationships, gratitude, and mindfulness in enhancing our overall well-being. By understanding the psychological aspects of happiness, we can make informed choices that lead to a more satisfying and joyful life.In this post, we will explore the science behind happiness and what contributes to a fulfilling life. We will discuss the role of relationships, gratitude, and mindfulness in enhancing our overall well-being. By understanding the psychological aspects of happiness, we can make informed choices that lead to a more satisfying and joyful life.In this post, we will explore the science behind happiness and what contributes to a fulfilling life. We will discuss the role of relationships, gratitude, and mindfulness in enhancing our overall well-being. By understanding the psychological aspects of happiness, we can make informed choices that lead to a more satisfying and joyful life.In this post, we will explore the science behind happiness and what contributes to a fulfilling life. We will discuss the role of relationships, gratitude, and mindfulness in enhancing our overall well-being. By understanding the psychological aspects of happiness, we can make informed choices that lead to a more satisfying and joyful life.In this post, we will explore the science behind happiness and what contributes to a fulfilling life. We will discuss the role of relationships, gratitude, and mindfulness in enhancing our overall well-being. By understanding the psychological aspects of happiness, we can make informed choices that lead to a more satisfying and joyful life.In this post, we will explore the science behind happiness and what contributes to a fulfilling life. We will discuss the role of relationships, gratitude, and mindfulness in enhancing our overall well-being. By understanding the psychological aspects of happiness, we can make informed choices that lead to a more satisfying and joyful life.In this post, we will explore the science behind happiness and what contributes to a fulfilling life. We will discuss the role of relationships, gratitude, and mindfulness in enhancing our overall well-being. By understanding the psychological aspects of happiness, we can make informed choices that lead to a more satisfying and joyful life.In this post, we will explore the science behind happiness and what contributes to a fulfilling life. We will discuss the role of relationships, gratitude, and mindfulness in enhancing our overall well-being. By understanding the psychological aspects of happiness, we can make informed choices that lead to a more satisfying and joyful lifeIn this post, we will explore the science behind happiness and what contributes to a fulfilling life. We will discuss the role of relationships, gratitude, and mindfulness in enhancing our overall well-being. By understanding the psychological aspects of happiness, we can make informed choices that lead to a more satisfying and joyful life.In this post, we will explore the science behind happiness and what contributes to a fulfilling life. We will discuss the role of relationships, gratitude, and mindfulness in enhancing our overall well-being. By understanding the psychological aspects of happiness, we can make informed choices that lead to a more satisfying and joyful life.In this post, we will explore the science behind happiness and what contributes to a fulfilling life. We will discuss the role of relationships, gratitude, and mindfulness in enhancing our overall well-being. By understanding the psychological aspects of happiness, we can make informed choices that lead to a more satisfying and joyful life.In this post, we will explore the science behind happiness and what contributes to a fulfilling life. We will discuss the role of relationships, gratitude, and mindfulness in enhancing our overall well-being. By understanding the psychological aspects of happiness, we can make informed choices that lead to a more satisfying and joyful life",
      footer: "Remember, the journey of learning never ends!",
      date: "January 28, 2025",
      likes: 120,
      comments: 30,
      imageMain: "/1.jpg",
      imageSecondary: "/1.jpg",
    }




  if (!post) {
    return <p>Loading or blog not found...</p>; // Handle loading or blog not found cases
  }

  return (
    <div className="container mx-auto py-[100px] px-4">

      <Card
        key={post.id}
        className="bg-white rounded-lg overflow-hidden mb-10"
      >
        {/* Main Image */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px]">
          <Image
            src={post.imageMain}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
  
        {/* Content Section */}
        <div className="p-4 sm:p-6">
          {/* Title and Intro */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            {post.title}
          </h1>
          <p className="text-gray-700 text-sm sm:text-base mb-6">
            {post.intro}
          </p>
  
          {/* Secondary Image with Highlight Text Wrap */}
          <div className="mb-6">
            <div className="float-none sm:float-left sm:w-1/3 w-full h-[200px] sm:h-[300px] lg:h-[400px] mb-4 relative">
              <Image
                src={post.imageSecondary}
                alt="Highlight"
                fill
                className="rounded-lg p-4 pl-0 object-cover"
              />
            </div>
            <p className="text-gray-700 text-sm sm:text-base">{post.highlight}</p>
          </div>
  
          {/* Clearfix to fix float */}
          <div className="clear-both"></div>
  
          {/* Quote Section */}
          <blockquote className="bg-gray-100 border-l-4 border-blue-500 italic text-sm sm:text-lg p-4 mb-6">
 
          </blockquote>
  
          {/* Footer Text */}
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            {post.footer}
          </p>
  
          {/* Metadata Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-500 border-t pt-4 gap-4">
            <span>{post.date}</span>
            <div className="flex items-center gap-4">
              <span className="text-blue-500">{post.likes} Likes</span>
              <span className="text-green-500">{post.comments} Comments</span>
            </div>
          </div>
        </div>
      </Card>

  </div>
  );
}

export default BlogDetailsPage;
