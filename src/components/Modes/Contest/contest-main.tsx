"use client";
import { useState } from "react";
import SelectContestPlayersMenu from "./select-contest-players-Menu";
import { player } from "./Models/player";
import { Operator } from "@/enums/operator";
import { Button } from "@/components/ui/button";
import MathQuestionTypeSelectorMenu from "@/components/shared/Components/math-question-type-selector-menu";
import { maxMathQuestionCount, maxMaxNumber, minMathQuestionCount, minMaxNumber } from "@/constants/website-constants";
import ContestPage from "./contest-page";
import { PlayIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function ContestMain() {
  const [players, setPlayers] = useState<player[]>([]);
  const [mathQuestionCount, setMathQuestionCount] = useState<number | null>(10);
  const [maxNumber, setMaxNumber] = useState<number | null>(10);
  const [selectedOperator, setSelectedOperator] = useState(Operator.Add);

  const [arePlayersSelected, setArePlayersSelected] = useState(false);
  const [isContestStarted, setIsContestStarted] = useState(false);

  function resetContest() {
    players.forEach((player) => {
      player.answers = [];
    });
    setArePlayersSelected(false);
    setIsContestStarted(false);
  }

  function isStartDisabled(): boolean {
    if (!maxNumber || !mathQuestionCount) {
      return false;
    }
    return !(
      maxNumber > minMaxNumber - 1 &&
      maxNumber < maxMaxNumber + 1 &&
      mathQuestionCount > minMathQuestionCount - 1 &&
      mathQuestionCount < maxMathQuestionCount + 1
    );
  }

  function onClickPlayersSelected() {
    if (players.length > 1) {
      setArePlayersSelected(true);
    }
  }

  function onClickStartContest() {
    if (!isStartDisabled()) {
      setIsContestStarted(true);
    }
  }

  return (
    <TooltipProvider>
      <div className="container mx-auto p-2">
        <div className="max-w-3xl mx-auto space-y-6 min-w-0 w-full">
          {!arePlayersSelected && !isContestStarted && (
            <div className="space-y-6">
              <SelectContestPlayersMenu Players={players} SetPlayers={setPlayers} />
              <div className="flex flex-col items-center gap-2">
                <Separator className="my-2" />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="lg" disabled={players.length < 2} onClick={onClickPlayersSelected} className="min-w-[200px] gap-2">
                      <ArrowRightIcon className="h-5 w-5" />
                      <span>Volgende</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{players.length < 2 ? "Voeg minimaal 2 spelers toe" : "Ga naar instellingen"}</TooltipContent>
                </Tooltip>
              </div>
            </div>
          )}

          {arePlayersSelected && !isContestStarted && (
            <div className="space-y-6">
              <MathQuestionTypeSelectorMenu
                mathQuestionCount={mathQuestionCount ?? 0}
                setMathQuestionCount={setMathQuestionCount}
                maxNumber={maxNumber ?? 0}
                setMaxNumber={setMaxNumber}
                selectedOperator={selectedOperator}
                setOperator={setSelectedOperator}
              />
              <div className="flex flex-col items-center gap-2">
                <Separator className="my-2" />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="lg" disabled={isStartDisabled()} onClick={onClickStartContest} className="min-w-[200px] gap-2">
                      <PlayIcon className="h-5 w-5" />
                      <span>Start Wedstrijd</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{isStartDisabled() ? "Controleer de instellingen" : "Begin de wedstrijd"}</TooltipContent>
                </Tooltip>
              </div>
            </div>
          )}

          {isContestStarted && (
            <ContestPage
              players={players}
              numberOfQuestions={mathQuestionCount ?? 0}
              maxNumber={maxNumber ?? 0}
              selectedOperator={selectedOperator}
              resetContest={resetContest}
            />
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
