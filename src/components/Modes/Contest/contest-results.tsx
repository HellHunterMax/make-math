import { player } from "./Models/player";
import { playerScore } from "./hooks/use-contest";

type contestResultsProps = {
	players: player[];
	playerScores: playerScore[];
};

export default function ContestResults({
	players,
	playerScores,
}: contestResultsProps) {
	const getPlayerScore = (playerId: string): playerScore | undefined =>
		playerScores.find((score) => score.playerId === playerId);

	return (
		<ul className="">
			{players.map((player) => {
				const score = getPlayerScore(player.Id);
				return (
					<>
						{score && (
							<div className="flex flex-row p-4">
								<li
									key={player.Id}
									className="flex items-center flex-col"
								>
									<span className="font-bold">
										{player.Name}:{" "}
									</span>

									<>
										<span>Score: {score.score}</span>
									</>
								</li>
								{score.winner && (
									<span className="font-bold pl-2 min-w-20 text-green-600">
										WINNER
									</span>
								)}
							</div>
						)}
					</>
				);
			})}
		</ul>
	);
}
