import {
	FilledButton,
	OutlinedButton,
} from "@/components/shared/Buttons/buttons";
import H4 from "@/components/shared/DefaultHTML/h4";
import { Dispatch, SetStateAction, useState } from "react";

export type Player = {
	Id: number;
	Name: string;
};

export type SelectContestPlayersMenuProps = {
	Players: Player[];
	SetPlayers: Dispatch<SetStateAction<Player[]>>;
	SetIsContestStarted: Dispatch<SetStateAction<boolean>>;
};

export default function SelectContestPlayersMenu(
	props: SelectContestPlayersMenuProps
) {
	const [name, setName] = useState("");

	function onClickAddPlayer() {
		if (name.trim() !== "" && props.Players.length < 10) {
			props.SetPlayers([
				...props.Players,
				{ Id: props.Players.length, Name: name },
			]);

			setName("");
		}
	}

	function onClickStartContest() {
		if (props.Players.length > 1) {
			props.SetIsContestStarted(true);
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

					<FilledButton
						buttonText={"START"}
						disabled={props.Players.length < 2}
						onClick={onClickStartContest}
					/>
				</div>
			</div>
		</div>
	);
}
