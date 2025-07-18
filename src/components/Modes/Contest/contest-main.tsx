"use client";
import { useState } from "react";
import SelectContestPlayersMenu from "./select-contest-players-Menu";
import { player } from "./Models/player";
import { Operator } from "@/enums/operator";
import { Button } from "@/components/ui/button";
import MathQuestionTypeSelectorMenu from "@/components/shared/Components/math-question-type-selector-menu";
import { maxMathQuestionCount, maxMaxNumber, minMathQuestionCount, minMaxNumber } from "@/constants/website-constants";
import ContestPage from "./contest-page";

export default function ContestMain() {
  const [players, setPlayers] = useState<player[]>([]);
  const [mathQuestionCount, setMathQuestionCount] = useState(10);
  const [maxNumber, setmaxNumber] = useState(10);
  const [selectedOperator, setOperator] = useState(Operator.Add);

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
    if (!maxNumber && !mathQuestionCount) {
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
    <div className="flex flex-col gap-4">
      {!arePlayersSelected && !isContestStarted && (
        <div className="flex flex-col gap-4">
          <SelectContestPlayersMenu Players={players} SetPlayers={setPlayers} />
          <Button variant="default" disabled={players.length < 2} onClick={onClickPlayersSelected}>
            Klaar
          </Button>
        </div>
      )}
      {arePlayersSelected && !isContestStarted && (
        <div className="flex flex-col gap-4">
          <MathQuestionTypeSelectorMenu
            mathQuestionCount={mathQuestionCount}
            setMathQuestionCount={setMathQuestionCount}
            maxNumber={maxNumber}
            setmaxNumber={setmaxNumber}
            selectedOperator={selectedOperator}
            setOperator={setOperator}
          />
          <Button variant="default" disabled={isStartDisabled()} onClick={onClickStartContest}>
            START
          </Button>
        </div>
      )}
      {isContestStarted && (
        <ContestPage
          players={players}
          numberOfQuestions={mathQuestionCount}
          maxNumber={maxNumber}
          selectedOperator={selectedOperator}
          resetContest={resetContest}
        />
      )}
    </div>
  );
}
