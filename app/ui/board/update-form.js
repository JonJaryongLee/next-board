import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchArticle, updateArticle } from "@/app/lib/data";

/**
 * @name UpdateForm
 * @component
 * @description 서버로부터 해당 게시글 정보를 받아온 후, 수정 페이지 보여줌
 *
 * @typedef {{
 *   id: number;
 *   title: string;
 *   content: string;
 * }} Article 게시글 데이터
 *
 * @param {number} id - 가져올 게시글의 ID
 */
export default function UpdateForm({ id }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  /**
   * @async
   * @function getArticle
   * @description
   *   - 게시글의 ID를 사용하여 게시글을 가져옵니다.
   *   - 가져온 게시글의 제목과 내용은 state 에 설정됩니다.
   *   - 만약 게시글이 존재하지 않는다면, 사용자는 게시판 페이지로 리디렉션됩니다.
   * @param {number} id - 가져올 게시글의 ID
   * @returns {Promise<void>} 아무것도 반환하지 않습니다.
   * @throws 게시글을 가져오는 데 실패하면 오류를 발생시킵니다.
   */
  async function getArticle(id) {
    /** @type {Article} */
    const article = await fetchArticle(id);
    if (article === null) {
      router.push("/board");
    }
    setTitle(article.title);
    setContent(article.content);
  }

  useEffect(() => {
    getArticle(id);
  }, [id]);

  /**
   * 게시글 폼 제출을 처리합니다.
   *
   * @async
   * @param {Event} e - 이벤트 객체.
   * @returns {Promise<void>} 아무것도 반환하지 않습니다.
   * @throws 게시글 수정이 실패하면 오류를 발생시킵니다.
   */
  async function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용은 빈칸일 수 없습니다.");
      return;
    }
    try {
      await updateArticle(id, title, content);
      alert("글 수정 성공");
      await router.push(`/board/${id}`);
      router.refresh();
    } catch (error) {
      alert("글 수정 실패");
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">게시글 수정</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            제목
          </label>
          <input
            id="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            내용
          </label>
          <textarea
            id="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          수정하기
        </button>
      </form>
    </>
  );
}
