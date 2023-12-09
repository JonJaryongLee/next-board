import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import SideNav from "@/app/ui/sidenav";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Next.js 연습",
  description: "Next.js App Router 연습 프로젝트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className} antialiased`}>
        <nav>
          <SideNav />
        </nav>
        <main className="pl-64">{children}</main>
      </body>
    </html>
  );
}
