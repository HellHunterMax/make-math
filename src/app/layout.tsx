import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
		<html lang="en">
			<body
				className={`${inter.className} flex min-h-full min-w-full flex-col items-center bg-slate-300 text-black m-4`}
			>
				{children}
			</body>
		</html>
	);
}
