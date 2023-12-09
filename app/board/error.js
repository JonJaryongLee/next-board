"use client";

import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function Error({ error }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <main className="flex flex-col items-center justify-center gap-2">
        <FaceFrownIcon className="w-10 text-gray-400" />
        <h2 className="text-xl font-semibold">Error</h2>
        <p>{error.message}</p>
        <Link
          href="/"
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        >
          홈으로
        </Link>
      </main>
    </div>
  );
}
