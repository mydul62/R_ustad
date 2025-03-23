import Image from "next/image"

const BlogCard = ({post}) => {
  return (
     <div >
                  <div className="relative">
                  <Image
                      className="object-cover object-center w-full max-h-64 rounded-lg lg:h-80"
                      src={post.image}
                      alt={post.title}
                      width={500}
                      height={320}
                      layout="responsive"
                    />
                    <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                      <Image
                        className="object-cover object-center w-10 h-10 rounded-full"
                        src={post.avatar}
                        alt={post.author}
                        width={40}
                        height={40}
                      />
                      <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{post.author}</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{post.role}</p>
                      </div>
                    </div>
                  </div>
    
                  <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h1>
                  <hr className="w-32 my-6 text-blue-500" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">{post.excerpt}</p>
    
                  <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">
                    Read more
                  </a>
                </div>
  )
}

export default BlogCard
