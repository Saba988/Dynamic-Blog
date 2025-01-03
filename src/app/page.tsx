
// 'use client'; // Mark this component as a Client Component

// import { useState } from 'react';
// import Link from 'next/link';
// import { blogPosts } from '@/data/blogPosts';

// export default function Home() {
//   return (
//     <main className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-5xl font-bold text-center text-teal-600">Welcome to My Blog</h1>
//       <p className="text-center text-gray-700 mt-3 font-serif text-lg">Explore, learn, and stay updated with the latest trends in web development and technology.</p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//         {blogPosts.map((post) => (
//           <Link key={post.slug} href={`/blog/${post.slug}`} className="block transform transition-all hover:scale-105">
//             <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col bg-white hover:bg-teal-50">
//               <div className="p-6 flex-1">
//                 <h2 className="text-2xl font-semibold text-gray-800 hover:text-teal-600 transition duration-300">{post.title}</h2>
//                 <p className="text-gray-600 mt-2">{post.excerpt}</p>
//               </div>
//               {/* Show More Button */}
//               <ShowMoreContent content={post.content} />
//             </div>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }

// // ShowMoreContent component to handle showing more/less content
// const ShowMoreContent = ({ content }: { content: string }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleContent = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="mt-4 p-6 bg-gray-50 border-t border-gray-200">
//       {isExpanded ? (
//         <div>
//           <p className="text-gray-700">{content}</p>
//           <button
//             onClick={toggleContent}
//             className="text-teal-500 mt-2 hover:text-teal-700 transition duration-300">
//             Show Less
//           </button>
//         </div>
//       ) : (
//         <button
//           onClick={toggleContent}
//           className="text-teal-500 mt-2 hover:text-teal-700 transition duration-300">
//           Show More
//         </button>
//       )}
//     </div>
//   );
// };
'use client'; // Mark this component as a Client Component

import { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-center text-indigo-800">Introduction to Cloud Computing</h1>
      <p className="text-center text-gray-600 mt-3 font-serif text-lg">
        Discover the fundamentals of cloud computing, its applications, and how it is revolutionizing industries worldwide.
      </p>
      <p className="text-center text-gray-600 mt-6 font-sans text-base max-w-3xl mx-auto">
        Cloud computing allows businesses and individuals to access and store data, applications, and services over the internet rather than on local hardware. 
        It offers unparalleled flexibility, scalability, and cost-effectiveness, making it a cornerstone of modern IT infrastructure. 
        With cloud services, organizations can focus on innovation rather than managing physical infrastructure. 
        Whether it’s hosting websites, analyzing data, or deploying complex applications, cloud platforms provide the tools needed for growth and efficiency. 
        As industries continue to embrace digital transformation, cloud computing plays a crucial role in driving agility and global collaboration.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block transform transition-all hover:scale-105"
          >
            <div className="border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col bg-white hover:bg-indigo-50">
              <div className="p-6 flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 hover:text-indigo-700 transition duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-700 mt-2">{post.excerpt}</p>
              </div>
              {/* Show More Button */}
              <ShowMoreContent content={post.content} />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

// ShowMoreContent component to handle showing more/less content
const ShowMoreContent = ({ content }: { content: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-4 p-6 bg-gray-50 border-t border-gray-300">
      {isExpanded ? (
        <div>
          <p className="text-gray-800">{content}</p>
          <button
            onClick={toggleContent}
            className="text-indigo-600 mt-2 hover:text-indigo-800 transition duration-300"
          >
            Show Less
          </button>
        </div>
      ) : (
        <button
          onClick={toggleContent}
          className="text-indigo-600 mt-2 hover:text-indigo-800 transition duration-300"
        >
          Show More
        </button>
      )}
    </div>
  );
};

