import Link from "next/link";
import { articles } from "@/lib/articles";
import { Comment, getComments } from "@/lib/supabase";
import CommentList from "@/components/CommentList";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let generalComments: Comment[] = [];
  try {
    generalComments = await getComments(null);
  } catch {
    // If Supabase isn't configured yet, render without comments
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-brand-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-200 mb-3">
            Organ &amp; Tissue Donation and Transplantation
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Donation Bill of Rights
          </h1>
          <p className="text-brand-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            A collaborative foundation of thought and best practices in organ and tissue
            donation and transplantation — developed in partnership with the Organ Donation
            and Transplantation Alliance.
          </p>
          <p className="mt-4 text-sm text-brand-300">
            Alliance Meeting &bull; Orlando, FL &bull; March 25, 2026
          </p>
          <p className="mt-3">
            <Link href="/executive-summary" className="text-base font-semibold text-white underline hover:text-brand-100">
              Read the Executive Summary &rarr;
            </Link>
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Purpose statement */}
        <section className="mb-10 bg-brand-50 rounded-xl p-6 border border-brand-100">
          <h2 className="text-lg font-semibold text-brand-900 mb-3">About This Document</h2>
          <p className="text-sm text-brand-800 leading-relaxed">
            This Bill of Rights represents a consolidating effort to articulate the
            principles that should govern every interaction in the organ and tissue
            donation ecosystem — from the moment of donor registration through
            long-term recipient care. It is offered in response to a period of
            heightened public mistrust, with the conviction that transparency,
            accountability, and genuine patient-centeredness are the foundation
            on which public confidence must be rebuilt.
          </p>
          <p className="mt-3 text-sm text-brand-700 leading-relaxed">
            <strong>How to participate:</strong> Click any Article below to read its full
            text and leave a comment. Use the general comment section at the bottom of
            this page for broad feedback. All comments are visible to other collaborators.
          </p>
        </section>

        {/* Articles grid */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-5">The 15 Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="group block rounded-lg border border-gray-200 p-5 hover:border-brand-400 hover:bg-brand-50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-700 text-sm font-bold flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    {article.id}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-brand-700 leading-snug mb-1">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* General comments */}
        <CommentList
          initialComments={generalComments}
          articleSlug={null}
          heading="General Comments"
        />
      </div>

      <footer className="border-t border-gray-200 mt-12 py-6">
        <p className="text-center text-xs text-gray-400">
          Donation Bill of Rights — Collaborative Review Site
        </p>
      </footer>
    </main>
  );
}
