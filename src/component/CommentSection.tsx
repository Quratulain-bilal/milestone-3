"use client"
// src/app/components/CommentSection.tsx
// src/app/components/CommentSection.tsx
import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<{ text: string; image: string }[]>([]);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      // Fetch a random image from an API (e.g., Random User Generator)
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const randomImage = data.results[0].picture.thumbnail;

      // Add the new comment with the random image
      setComments([...comments, { text: comment, image: randomImage }]);
      setComment("");
    }
  };

  return (
    <div className="mt-8 w-full max-w-2xl">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded-lg"
          rows={4}
          placeholder="Leave a comment..."
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      <ul className="list-disc pl-5">
        {comments.map((c, index) => (
          <li key={index} className="mb-4 flex items-start">
            <img
              src={c.image}
              alt="User  Avatar"
              className="w-10 h-10 rounded-full mr-3"
            />
            <span>{c.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;