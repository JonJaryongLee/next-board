import { fetchArticles } from "@/app/lib/data";
import Link from "next/link";

/**
 * @name List
 * @component
 * @description 게시글 목록을 렌더링하는 컴포넌트. 만약 게시글이 없다면 "작성된 글이 없습니다"를 표시합니다.
 *
 * @typedef {Array<{
 *   id: number;
 *   title: string;
 *   content: string;
 * }>} Articles 게시글 데이터
 *
 */
export default async function List() {
  /** @type {Articles} */
  const articles = await fetchArticles();

  if (articles.length === 0) {
    return <p>작성된 글이 없습니다</p>;
  }

  return (
    <>
      {articles.map((article) => {
        return (
          <p key={article.id} className="border-b border-gray-200 py-2">
            <Link
              href={`/board/${article.id}`}
              className="transition-colors duration-200 text-black hover:bg-blue-200 hover:text-white"
            >
              {article.title}
            </Link>
          </p>
        );
      })}
    </>
  );
}
