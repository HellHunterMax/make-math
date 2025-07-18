import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationMenu from "@/components/Navigation/Menu/navigation-menu";

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
      <body className={`${inter.className} h-full w-full bg-slate-300 text-black`} style={{ minHeight: "100vh", width: "100%" }}>
        <NavigationMenu />
        <div className="flex min-h-full min-w-full flex-col items-center absolute p-4 md:pl-60 pt-14">{children}</div>
      </body>
    </html>
  );
}
