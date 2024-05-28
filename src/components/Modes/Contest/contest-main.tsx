"use client";
import { useState } from "react";
import SelectContestPlayersMenu, {
	Player,
} from "./select-contest-players-Menu";

export default function ContestMain() {
	const [players, setPlayers] = useState<Player[]>([]);
	const [isContestStarted, setIsContestStarted] = useState(false);

	return (
		<>
			<SelectContestPlayersMenu
				Players={players}
				SetPlayers={setPlayers}
				SetIsContestStarted={setIsContestStarted}
			/>
			{isContestStarted && <p>contest</p>}
		</>
	);
}
