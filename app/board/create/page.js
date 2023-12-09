"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createArticle } from "@/app/lib/data";

export default function Page() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  /**
   * 게시글 폼 제출을 처리합니다.
   *
   * @async
   * @param {Event} e - 이벤트 객체.
   * @returns {Promise<void>} 아무것도 반환하지 않습니다.
   * @throws 게시글 생성이 실패하면 오류를 발생시킵니다.
   */
  async function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용은 빈칸일 수 없습니다.");
      return;
    }
    try {
      const { id } = await createArticle(title, content);
      alert("글 생성 성공");
      await router.push(`/board/${id}`);
      router.refresh();
    } catch (error) {
      alert("글 생성 실패");
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">게시글 생성</h1>
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
          등록하기
        </button>
      </form>
    </>
  );
}
