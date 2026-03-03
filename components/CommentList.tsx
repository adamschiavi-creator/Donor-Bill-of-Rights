"use client";

import { useState } from "react";
import { Comment } from "@/lib/supabase";
import CommentForm from "./CommentForm";

interface CommentListProps {
  initialComments: Comment[];
  articleSlug?: string | null;
  heading?: string;
}

export default function CommentList({
  initialComments,
  articleSlug = null,
  heading = "Comments",
}: CommentListProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  function handleCommentAdded(comment: Comment) {
    setComments((prev) => [...prev, comment]);
  }

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        {heading}
      </h2>

      {comments.length === 0 ? (
        <p className="text-sm text-gray-500 mb-8">
          No comments yet. Be the first to share your thoughts.
        </p>
      ) : (
        <ul className="space-y-6 mb-10">
          {comments.map((c) => (
            <li key={c.id} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium text-gray-900 text-sm">{c.author_name}</span>
                <span className="text-gray-400 text-xs">·</span>
                <time
                  dateTime={c.created_at}
                  className="text-xs text-gray-400"
                >
                  {new Date(c.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </time>
              </div>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{c.content}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-base font-medium text-gray-900 mb-4">Leave a Comment</h3>
        <CommentForm articleSlug={articleSlug} onCommentAdded={handleCommentAdded} />
      </div>
    </section>
  );
}
