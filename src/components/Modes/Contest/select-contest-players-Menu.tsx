import { Button } from "@/components/ui/button";
import H4 from "@/components/shared/DefaultHTML/h4";
import { Dispatch, SetStateAction, useState } from "react";
import { player } from "./Models/player";
import { v7 as uuidv7 } from "uuid";

export type selectContestPlayersMenuProps = {
  Players: player[];
  SetPlayers: Dispatch<SetStateAction<player[]>>;
};

export default function SelectContestPlayersMenu(props: selectContestPlayersMenuProps) {
  const [name, setName] = useState("");

  function onClickAddPlayer() {
    if (name.trim() !== "" && props.Players.length < 10) {
      props.SetPlayers([...props.Players, { Id: uuidv7(), Name: name, answers: [] }]);

      setName("");
    }
  }

  function onClickRemovePlayer(id: string) {
    if (id) {
      const player = props.Players.find((x) => x.Id === id);
      if (player) {
        const updatedPlayers = props.Players.filter((x) => x.Id !== id);
        props.SetPlayers(updatedPlayers);
      }
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
            <div key={player.Id} className="flex flex-row items-center justify-center gap-4 m-4">
              <li>{player.Name}</li>
              <Button variant="outline" onClick={() => onClickRemovePlayer(player.Id)}>
                Verwijder
              </Button>
            </div>
          ))}
        </ol>
      </div>
      <div className="flex flex-col gap-4">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type="text"
          value={name}
          placeholder="Vul naam in"
          onChange={(v) => setName(v.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button variant="outline" disabled={props.Players.length > 9 || name.trim() === ""} onClick={onClickAddPlayer}>
          + Voeg speler toe
        </Button>
      </div>
    </div>
  );
}
