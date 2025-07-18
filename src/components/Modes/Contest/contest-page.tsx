"use client";
import { Operator } from "@/enums/operator";
import { player } from "./Models/player";
import useMath from "@/hooks/useMath";
import useContest from "./hooks/use-contest";
import ContestResults from "./contest-results";
import { MathQuestion } from "@/components/shared/Components/math-question";
import H4 from "@/components/shared/DefaultHTML/h4";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export type contestPageProps = {
  players: player[];
  numberOfQuestions: number;
  maxNumber: number;
  selectedOperator: Operator;
  resetContest: () => void;
};

export default function ContestPage({ players, numberOfQuestions, maxNumber, selectedOperator, resetContest }: contestPageProps) {
  const mathGenerator = useMath(selectedOperator, maxNumber);
  const generateMathQuestions = () => {
    const questions = [];
    for (let i = 1; i < numberOfQuestions + 1; i++) {
      questions.push(mathGenerator.generateMathEquation(i));
    }
    return questions;
  };
  const [questions] = useState(generateMathQuestions());

  const contest = useContest(players, questions);

  return (
    <>
      {contest.isContestFinished && (
        <div className="flex flex-1 flex-col gap-4">
          <ContestResults players={players} playerScores={contest.playerScores} />
          <Button variant="default" onClick={resetContest}>
            Opnieuw beginnen
          </Button>
        </div>
      )}
      {!contest.isContestFinished && (
        <div className="flex flex-col justify-center items-center">
          <H4>{contest.activePlayer.Name}</H4>
          <div className="flex flex-col justify-center items-center">
            <MathQuestion
              id={contest.activeQuestion.id}
              firstNumber={contest.activeQuestion.firstNumber}
              secondNumber={contest.activeQuestion.secondNumber}
              answer={contest.activeQuestion.answer}
              setResult={(result) => contest.SetAnswer(contest.activePlayer.Id, contest.activeQuestion.id, result)}
              operator={contest.activeQuestion.operator}
              hideResult
            />
          </div>
        </div>
      )}
    </>
  );
}
