"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dispatch, SetStateAction, useState } from "react";
import { player } from "./Models/player";
import { v7 as uuidv7 } from "uuid";
import { UserPlusIcon, UserMinusIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

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
    <TooltipProvider>
      <Card className="w-full max-w-2xl mx-auto rounded-3xl border-[#40E0D0]/30">
        <CardHeader className="space-y-1 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Spelers Selecteren</h2>
            <Badge variant="outline" className="text-[#40E0D0]">
              {props.Players.length}/10 spelers
            </Badge>
          </div>
          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <h3 className="font-medium">Regels:</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Minimaal 2 spelers</li>
              <li>Maximaal 10 spelers</li>
            </ul>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {props.Players.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">Spelers</h3>
                <Separator className="flex-1" />
              </div>
              <div className="space-y-3">
                {props.Players.map((player) => (
                  <div
                    key={player.Id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30 group hover:bg-muted/50 transition-colors">
                    <span className="font-medium">{player.Name}</span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onClickRemovePlayer(player.Id)}
                          className="opacity-50 hover:opacity-100 transition-opacity">
                          <UserMinusIcon className="h-5 w-5 text-red-500" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Verwijder speler</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Input
                type="text"
                value={name}
                placeholder="Vul naam in"
                onChange={(v) => setName(v.target.value)}
                onKeyDown={handleKeyDown}
                className={cn("h-9", "min-h-[36px]")}
              />
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  disabled={props.Players.length > 9 || name.trim() === ""}
                  onClick={onClickAddPlayer}
                  className="gap-2">
                  <UserPlusIcon className="h-5 w-5" />
                  <span>Voeg speler toe</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {props.Players.length > 9
                  ? "Maximum aantal spelers bereikt"
                  : name.trim() === ""
                  ? "Vul een naam in"
                  : "Voeg nieuwe speler toe"}
              </TooltipContent>
            </Tooltip>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}
