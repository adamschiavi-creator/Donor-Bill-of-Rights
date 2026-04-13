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
            Organ Donation
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            The Donation Commitments and Common Values Initiative
          </h1>
          <p className="text-brand-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            A collaborative foundation of thought and best practices in organ donation —
            developed in partnership with the Organ Donation and Transplantation Alliance.
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
            This effort represents a consolidating effort to articulate the
            principles that should govern every interaction in the organ
            donation ecosystem — from the moment of donor registration through
            long-term recipient care. The foundation of public confidence requires
            transparency, accountability, and genuine patient-centeredness.
          </p>
          <p className="mt-3 text-sm text-brand-700 leading-relaxed">
            <strong>How to participate:</strong> Click any Article below to read its full
            text and leave a comment. Use the general comment section at the bottom of
            this page for broad feedback. All comments are visible to other collaborators.
          </p>
        </section>

        {/* Articles list */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-5">The 15 Articles</h2>
          <div className="flex flex-col gap-3">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="group block rounded-lg border border-gray-200 p-5 hover:border-brand-400 hover:bg-brand-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-100 text-brand-700 text-sm font-bold flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    {article.id}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-brand-700 leading-snug mb-2">
                      Article {article.id}: {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
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
