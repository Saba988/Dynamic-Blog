// import Link from 'next/link';
// import { blogPosts } from '@/data/blogPosts';

// export default function BlogPage() {
//   return (
//     <main className="max-w-6xl mx-auto py-12 px-4">
//       <h1 className="text-4xl font-bold text-center text-teal-500">Blog Posts</h1>
//       <p className="text-center text-gray-500 mt-2 font-serif">Explore insights on web development and technology</p>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//         {blogPosts.map((post) => (
//           <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
//             <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
//               <div className="p-6">
//                 <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
//                 <p className="text-gray-600 mt-2">{post.excerpt}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-center  from-indigo-600 to-blue-500">Blog Posts</h1>
      <p className="text-center text-gray-600 mt-4 text-lg font-serif">
        Explore insights on web development and technology.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="p-6 flex flex-col h-full">
                <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-4">{post.excerpt}</p>
              </div>
              <div className="p-6 bg-blue-200 text-center rounded-b-xl">
                <button className="px-6 py-2  from-indigo-600 to-blue-500 text-blue-600 font-semibold rounded-md  transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
