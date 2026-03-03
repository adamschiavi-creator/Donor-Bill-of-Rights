import { Article } from "@/lib/articles";
import Article1Body from "./article-bodies/Article1";
import Article2Body from "./article-bodies/Article2";

const bodyMap: Record<number, React.ComponentType> = {
  1: Article1Body,
  2: Article2Body,
};

interface Props {
  article: Article;
}

export default function ArticleBody({ article }: Props) {
  const Component = bodyMap[article.id];

  if (Component) {
    return <Component />;
  }

  // Fallback for articles not yet updated
  return (
    <div className="space-y-4">
      {article.body.split("\n\n").map((paragraph, i) => (
        <p key={i} className="text-gray-800 leading-relaxed text-base">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
