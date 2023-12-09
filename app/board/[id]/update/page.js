"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { FormSkeleton } from "@/app/ui/skeletons";
import UpdateForm from "@/app/ui/board/update-form";

export default function Page() {
  const pathname = usePathname();

  /**
   * @type {string} id
   * @description
   * - URL에서 추출한 게시글 ID
   * - board/:id/update 에서 :id 부분만 가져오기
   */
  const id = pathname.split("/")[2];

  return (
    <>
      <Suspense fallback={<FormSkeleton />}>
        <UpdateForm id={id} />
      </Suspense>
    </>
  );
}
