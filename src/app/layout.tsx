import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Navigation/Menu/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Make Math",
  description: "Created by Max",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-full w-full bg-slate-100 text-black`} style={{ minHeight: "100vh", width: "100%" }}>
        <Sidebar />
        <div className="flex flex-1 min-h-full min-w-full flex-col items-center p-2 sm:p-4 md:pl-64 w-full">{children}</div>
      </body>
    </html>
  );
}
