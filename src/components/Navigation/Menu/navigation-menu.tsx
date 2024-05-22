"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavigationMenu() {
	const menuItems = [
		{ title: "Home", url: "/" },
		{ title: "Sommen Maken", url: "/exercises" },
	];
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuItemClick = () => {
		setMenuOpen(false);
	};

	return (
		<>
			{/* Desktop Menu */}
			<div className="hidden text-white md:top-0 md:left-0 md:px-4 pt-4 md:h-full md:bg-slate-500 md:flex md:flex-col md:absolute md:w-60 md:gap-4 z-50">
				{menuItems.map((menuItem, index) => (
					<Link
						key={index}
						href={menuItem.url}
						className="border-2 border-blue-300 rounded-xl h-10 flex items-center justify-center px-6 hover:text-blue-300"
					>
						{menuItem.title}
					</Link>
				))}
			</div>

			{/* Mobile Menu Button */}
			<div
				className={`absolute md:hidden left-0 top-0 z-50 p-4 cursor-pointer`}
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<div className="relative text-gray-700">
					<svg
						className={`absolute h-10 w-10 transition-all duration-100 ease-in ${
							menuOpen
								? "opacity-0 invisible"
								: "opacity-100 visible"
						}`}
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<svg
						className={`absolute h-10 w-10 transition-all duration-100 ease-in ${
							menuOpen
								? "opacity-100 visible"
								: "opacity-0 invisible"
						}`}
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed inset-0 z-40 bg-slate-300 transition-all duration-300 ease-in ${
					menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
			>
				<div
					className={`mt-10 flex flex-col gap-1 p-4 text-white transition-al`}
				>
					{menuItems.map((menuItem, index) => (
						<Link
							key={index}
							href={menuItem.url}
							className="bg-slate-500 hover:bg-gray-700 hover:text-blue-300 rounded-md px-3 py-2 text-base font-medium"
							onClick={handleMenuItemClick}
						>
							{menuItem.title}
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
