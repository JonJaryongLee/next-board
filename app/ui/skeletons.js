/**
 * @name BoardSkeleton
 * @component
 * @description
 *   - 전체 게시글 로딩 컴포넌트
 *   - 스켈레톤 화면은 펄스 효과로 애니메이션되는 10개의 회색 막대로 구성됩니다.
 */
export function BoardSkeleton() {
  return (
    <>
      <div className="animate-pulse">
        {[...Array(10)].map((e, i) => (
          <div key={i} className="mt-4 bg-gray-300 h-6 rounded"></div>
        ))}
      </div>
    </>
  );
}

/**
 * @name DetailSkeleton
 * @component
 * @description
 *   - 특정 게시글 로딩 컴포넌트
 *   - 스켈레톤 화면은 펄스 효과로 애니메이션되는 회색 막대로 구성됩니다.
 */
export function DetailSkeleton() {
  return (
    <div className="border-b border-gray-200 py-2 animate-pulse">
      <h2 className="text-2xl font-bold mb-4 bg-gray-300 h-6 rounded"></h2>
      {[...Array(3)].map((_, i) => (
        <p key={i} className="bg-gray-300 h-6 rounded"></p>
      ))}
    </div>
  );
}

/**
 * @name FormSkeleton
 * @component
 * @description
 *   - 폼 로딩 컴포넌트
 *   - 스켈레톤 화면은 펄스 효과로 애니메이션되는 회색 막대로 구성됩니다.
 */
export function FormSkeleton() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 bg-gray-300 h-6 rounded animate-pulse"></h1>
      <form className="space-y-4 animate-pulse">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 bg-gray-300 h-6 rounded"
          ></label>
          <div
            id="title"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-300 rounded-md shadow-sm sm:text-sm h-6 rounded"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 bg-gray-300 h-6 rounded"
          ></label>
          <div
            id="content"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-300 rounded-md shadow-sm sm:text-sm h-24 rounded"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-gray-300 rounded-md h-6 rounded"
        ></button>
      </form>
    </>
  );
}
