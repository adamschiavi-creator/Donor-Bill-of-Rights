import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";
import { Comment, getComments } from "@/lib/supabase";
import CommentList from "@/components/CommentList";
import ArticleBody from "@/components/ArticleBody";

export const dynamic = "force-dynamic";

interface Props {
  params: { slug: string };
}

export default async function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  let comments: Comment[] = [];
  try {
    comments = await getComments(article.slug);
  } catch {
    // Render without comments if Supabase isn't configured
  }

  const prev = articles.find((a) => a.id === article.id - 1);
  const next = articles.find((a) => a.id === article.id + 1);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-brand-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-brand-200 hover:text-white mb-4 transition-colors"
          >
            ← Back to all articles
          </Link>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300 mb-2">
            Article {article.id} of 15
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            Article {article.id}: {article.title}
          </h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Article body */}
        <article className="mb-4">
          <p className="text-gray-700 text-base italic mb-8 border-l-4 border-brand-400 pl-4 leading-relaxed">
            {article.summary}
          </p>
          <ArticleBody article={article} />
        </article>

        {/* Prev / Next navigation */}
        <nav className="flex justify-between gap-4 border-t border-gray-200 pt-6 mt-6">
          {prev ? (
            <Link
              href={`/articles/${prev.slug}`}
              className="text-sm text-brand-600 hover:text-brand-800 hover:underline"
            >
              ← Article {prev.id}: {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/articles/${next.slug}`}
              className="text-sm text-brand-600 hover:text-brand-800 hover:underline text-right"
            >
              Article {next.id}: {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>

        {/* Comments */}
        <CommentList
          initialComments={comments}
          articleSlug={article.slug}
          heading={`Comments on Article ${article.id}`}
        />
      </div>

      <footer className="border-t border-gray-200 mt-12 py-6">
        <p className="text-center text-xs text-gray-400">
          <Link href="/" className="hover:underline text-brand-400">
            Donation Bill of Rights
          </Link>{" "}
          — Collaborative Review Site
        </p>
      </footer>
    </main>
  );
}
