import type { Metadata } from "next";
// import { Vazirmatn } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// const vazir = Vazirmatn({ subsets: ["arabic"] });
// className={vazir.className}

export const metadata: Metadata = {
  title: "Nextjs 14",
  description: "Nextjs 14 Crash Course",
};

const vazirfont = localFont({
  src: "../public/fonts/Vazirmatn-Regular.woff2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`bg-slate-900 text-slate-200 ${vazirfont.className}`}>
        <main className="p-5">{children}</main>
      </body>
    </html>
  );
}
