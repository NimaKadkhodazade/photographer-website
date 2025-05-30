import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const myEnglishFont = localFont({ src: "../../public/font/FiraCode.ttf" });

export const metadata: Metadata = {
  title: "My App",
  description: "Generated by Nima Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={`${myEnglishFont.className} font-bold`}>
          {children}
        </main>
      </body>
    </html>
  );
}
