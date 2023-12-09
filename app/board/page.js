import { Suspense } from "react";
import { BoardSkeleton } from "@/app/ui/skeletons";
import List from "@/app/ui/board/list";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">전체 글 목록</h1>
      <Suspense fallback={<BoardSkeleton />}>
        <List />
        <div className="mt-4 flex justify-end">
          <Link
            href="/board/create"
            className="py-2 px-4 bg-blue-500 text-white rounded-md"
          >
            글 작성
          </Link>
        </div>
      </Suspense>
    </>
  );
}
