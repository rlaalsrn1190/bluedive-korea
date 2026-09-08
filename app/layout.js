import "./globals.css";

export const metadata = {
  title: "BlueDive Korea",
  description: "대한민국 프리다이빙 포인트 커뮤니티",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
