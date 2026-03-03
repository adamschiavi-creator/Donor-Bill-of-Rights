"use client";

import { useState, useTransition } from "react";
import type { Comment } from "@/lib/supabase";

interface CommentFormProps {
  articleSlug?: string | null;
  onCommentAdded: (comment: Comment) => void;
}

export default function CommentForm({ articleSlug = null, onCommentAdded }: CommentFormProps) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name.trim() || !content.trim()) {
      setError("Please enter your name and a comment.");
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("/api/comments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            article_slug: articleSlug,
            author_name: name.trim(),
            content: content.trim(),
          }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          const msg = data.detail ? `${data.error}: ${data.detail}` : (data.error ?? "Failed to submit comment. Please try again.");
          setError(msg);
          return;
        }

        const comment = await res.json() as Comment;
        onCommentAdded(comment);
        setName("");
        setContent("");
        setSuccess(true);
      } catch {
        setError("Network error. Please check your connection and try again.");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="First and last name"
          maxLength={100}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          disabled={isPending}
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
          Comment <span className="text-red-500">*</span>
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts, feedback, or suggestions…"
          rows={5}
          maxLength={3000}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 resize-y"
          disabled={isPending}
        />
        <p className="mt-1 text-xs text-gray-400">{content.length}/3000</p>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {error}
        </p>
      )}

      {success && (
        <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
          Your comment has been submitted. Thank you!
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center rounded-md bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isPending ? "Submitting…" : "Submit Comment"}
      </button>
    </form>
  );
}
