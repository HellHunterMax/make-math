import {
	FilledButton,
	OutlinedButton,
} from "@/components/shared/Buttons/buttons";
import H4 from "@/components/shared/DefaultHTML/h4";
import { Dispatch, SetStateAction, useState } from "react";
import player from "./Models/player";

export type selectContestPlayersMenuProps = {
	Players: player[];
	SetPlayers: Dispatch<SetStateAction<player[]>>;
};

export default function SelectContestPlayersMenu(
	props: selectContestPlayersMenuProps
) {
	const [name, setName] = useState("");

	function onClickAddPlayer() {
		if (name.trim() !== "" && props.Players.length < 10) {
			props.SetPlayers([
				...props.Players,
				{ Id: props.Players.length, Name: name, answers: [] },
			]);

			setName("");
		}
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter") {
			onClickAddPlayer();
		}
	}

	return (
		<div className="flex flex-col gap-4 w-full items-center justify-center">
			<div>
				<H4>Regels:</H4>
				<ol className="list-disc">
					<li>minimaal 2 spelers</li>
					<li>maximaal 10 spelers</li>
				</ol>
			</div>
			<div>
				<H4>Spelers</H4>
				<ol className="list-disc">
					{props.Players.map((player) => (
						<li key={player.Id}>{player.Name}</li>
					))}
				</ol>
			</div>
			<div>
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					type="text"
					value={name}
					placeholder="Vul naam in"
					onChange={(v) => setName(v.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<div className="flex flex-row min-w-max space-2 p-2">
					<OutlinedButton
						buttonText={"+ Voeg speler toe"}
						disabled={
							props.Players.length > 9 || name.trim() === ""
						}
						onClick={onClickAddPlayer}
					/>
				</div>
			</div>
		</div>
	);
}
