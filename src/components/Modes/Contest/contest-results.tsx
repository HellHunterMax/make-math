import player from "./Models/player";
import { playerScore } from "./hooks/use-contest";

type contestResultsProps = {
	players: player[];
	playerScores: playerScore[];
};

export default function ContestResults({
	players,
	playerScores,
}: contestResultsProps) {
	const getPlayerScore = (playerId: number): playerScore | undefined =>
		playerScores.find((score) => score.playerId === playerId);

	return (
		<ul>
			{players.map((player) => {
				const score = getPlayerScore(player.Id);
				return (
					<li key={player.Id} className="flex items-center">
						<span>{player.Name}: </span>
						{score && (
							<>
								<span>Score: {score.score}</span>
								{score.winner && (
									<span className="font-bold pl-2 min-w-20 text-green-600">
										WINNER
									</span>
								)}
							</>
						)}
					</li>
				);
			})}
		</ul>
	);
}
