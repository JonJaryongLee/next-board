export default function Layout({ children }) {
  return (
    <>
      <h1 className="text-center text-3xl text-blue-600 font-bold p-4">게시판</h1>
      <div className="p-4 bg-white shadow rounded-lg">{children}</div>
    </>
  );
}
