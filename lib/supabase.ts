import { createClient } from "@supabase/supabase-js";

export interface Comment {
  id: string;
  article_slug: string | null;
  author_name: string;
  content: string;
  created_at: string;
}

function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error("SUPABASE_URL and SUPABASE_ANON_KEY must be set");
  }
  return createClient(url, key, {
    global: {
      fetch: (input, init = {}) => fetch(input, { ...init, cache: "no-store" }),
    },
  });
}

export async function getComments(articleSlug: string | null): Promise<Comment[]> {
  const supabase = getSupabaseClient();
  const base = supabase
    .from("comments")
    .select("*")
    .order("created_at", { ascending: true });

  const { data, error } = await (articleSlug === null
    ? base.is("article_slug", null)
    : base.eq("article_slug", articleSlug));

  if (error) throw error;
  return (data as Comment[]) ?? [];
}

export async function insertComment(
  articleSlug: string | null,
  authorName: string,
  content: string
): Promise<Comment> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("comments")
    .insert({ article_slug: articleSlug ?? null, author_name: authorName, content })
    .select()
    .single();
  if (error) throw error;
  return data as Comment;
}
