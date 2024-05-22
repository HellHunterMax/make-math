import Main from "@/components/main";

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			<p className="mb-2 text-xl font-bold">Welkom!</p>
			<p className="mb-4">Klaar om sommen te maken?</p>
			<ul className="list-disc pl-4 mb-4">
				<p className="mb-2">Mogelijkheden:</p>
				<ul className="list-disc pl-6">
					<li className="mb-1">
						<span className="font-bold">Plus sommen:</span> 1 + 1 =
						2
					</li>
					<li className="mb-1">
						<span className="font-bold">Min sommen:</span> 3 - 1 = 2
					</li>
				</ul>
			</ul>
			<p className="mb-4">
				Klik in het menu op een van de opties en begin met sommen maken.
			</p>
		</main>
	);
}
