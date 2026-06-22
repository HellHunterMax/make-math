import type { Player } from "./Models/player";
import type { PlayerScore } from "./hooks/use-contest";

type ContestResultsProps = {
  players: Player[];
  playerScores: PlayerScore[];
};

export default function ContestResults({ players, playerScores }: ContestResultsProps) {
  const getPlayerScore = (playerId: string): PlayerScore | undefined =>
    playerScores.find((score) => score.playerId === playerId);

  return (
    <ul className="">
      {players.map((player) => {
        const score = getPlayerScore(player.Id);
        return (
          <div key={player.Id}>
            {score && (
              <div className="flex flex-row p-4">
                <li className="flex items-center flex-col">
                  <span className="font-bold">{player.Name}: </span>

                  <>
                    <span>Score: {score.score}</span>
                  </>
                </li>
                {score.winner && <span className="font-bold pl-2 min-w-20 text-green-600">WINNER</span>}
              </div>
            )}
          </div>
        );
      })}
    </ul>
  );
}
