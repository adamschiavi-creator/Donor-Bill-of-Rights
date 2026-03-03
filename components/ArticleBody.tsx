import { Article } from "@/lib/articles";
import Article1Body from "./article-bodies/Article1";
import Article2Body from "./article-bodies/Article2";
import Article3Body from "./article-bodies/Article3";
import Article4Body from "./article-bodies/Article4";
import Article5Body from "./article-bodies/Article5";
import Article6Body from "./article-bodies/Article6";
import Article7Body from "./article-bodies/Article7";
import Article8Body from "./article-bodies/Article8";
import Article9Body from "./article-bodies/Article9";
import Article10Body from "./article-bodies/Article10";

const bodyMap: Record<number, React.ComponentType> = {
  1: Article1Body,
  2: Article2Body,
  3: Article3Body,
  4: Article4Body,
  5: Article5Body,
  6: Article6Body,
  7: Article7Body,
  8: Article8Body,
  9: Article9Body,
  10: Article10Body,
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
