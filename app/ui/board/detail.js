import { fetchArticle } from "@/app/lib/data";
import { useRouter } from "next/navigation";

/**
 * @name Detail
 * @component
 * @description 특정 게시글을 렌더링하는 컴포넌트
 *
 * @typedef {{
 *   id: number;
 *   title: string;
 *   content: string;
 * }} Article 게시글 데이터
 *
 * @param {number} id - 가져올 게시글의 ID
 */
export default async function Detail({ id }) {
  const router = useRouter();

  /** @type {Article} */
  const article = await fetchArticle(id);

  if (article === null) {
    router.push("/board");
  }

  return (
    <div className="border-b border-gray-200 py-2">
      <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
      <p>글번호: {article.id}</p>
      <p>{article.content}</p>
    </div>
  );
}
