'use client';

import { useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleAddComment = () => {
    if (input.trim()) {
      setComments((prev) => [...prev, input.trim()]);
      setInput('');
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-800">Comments</h2>
      <textarea
        className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
        rows={4}
        placeholder="Write a comment..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAddComment}
        className="mt-2 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition"
      >
        Submit
      </button>
      <div className="mt-6">
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li key={index} className="bg-gray-100 border border-gray-200 rounded-md p-4">
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}
