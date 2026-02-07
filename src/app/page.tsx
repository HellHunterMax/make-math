export default function Home() {
	return (
		<main className="flex flex-col items-center px-4 sm:px-0">
			<p className="mb-2 text-lg sm:text-xl font-bold">Welkom!</p>
			<p className="mb-4 text-sm sm:text-base">Klaar om sommen te maken?</p>
			<ul className="list-disc pl-4 mb-4 text-sm sm:text-base">
				<p className="mb-2">Mogelijkheden:</p>
				<ul className="list-disc pl-4 sm:pl-6">
					<li className="mb-1">
						<span className="font-bold">Plus sommen:</span> 1 + 1 =
						2
					</li>
					<li className="mb-1">
						<span className="font-bold">Min sommen:</span> 3 - 1 = 2
					</li>
					<li className="mb-1">
						<span className="font-bold">Keer sommen:</span> 2 x 1 =
						2
					</li>
					<li className="mb-1">
						<span className="font-bold">Deel sommen:</span> 3 : 1 =
						3
					</li>
				</ul>
			</ul>
			<p className="mb-4 text-sm sm:text-base text-center">
				Klik in het menu op een van de opties en begin met sommen maken.
			</p>
		</main>
	);
}
