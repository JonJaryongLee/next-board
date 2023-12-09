"use client";

import { Suspense } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { DetailSkeleton } from "@/app/ui/skeletons";
import Detail from "@/app/ui/board/detail";
import { deleteArticle } from "@/app/lib/data";

/**
 * @function Page
 * @description 게시글 상세 페이지를 렌더링하는 컴포넌트
 */
export default function Page() {
  const pathname = usePathname();
  const router = useRouter();

  /** @type {string} id - URL에서 추출한 게시글 ID */
  const id = pathname.split("/").pop();

  /**
   * 게시글을 삭제하는 함수입니다.
   *
   * @async
   * @function handleDelete
   * @description 게시글을 삭제하고, 성공 시 게시글 목록 페이지로 이동합니다.
   * @returns {Promise<void>} 아무것도 반환하지 않습니다.
   * @throws 게시글 삭제에 실패하면 오류를 발생시킵니다.
   */
  async function handleDelete() {
    try {
      await deleteArticle(id);
      alert("글 삭제 성공");
      await router.push("/board");
      router.refresh();
    } catch (error) {
      alert("글 삭제 실패");
    }
  }

  return (
    <>
      <Suspense fallback={<DetailSkeleton />}>
        <Detail id={id} />
        <div className="mt-4 flex justify-end space-x-2">
          <Link
            href={`/board/${id}/update`}
            className="py-2 px-4 bg-blue-500 text-white rounded-md"
          >
            수정
          </Link>
          <button
            onClick={handleDelete}
            className="py-2 px-4 bg-red-500 text-white rounded-md"
          >
            삭제
          </button>
        </div>
      </Suspense>
    </>
  );
}
