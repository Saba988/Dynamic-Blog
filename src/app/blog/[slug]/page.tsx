import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts'; 
import CommentSection from '@/components/CommentSection';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
      <p className="text-gray-600 mt-4">{post.content}</p>
      
      <CommentSection />
    </main>
  );
}
