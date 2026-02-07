"use client";
import { Operator } from "@/enums/operator";
import { player } from "./Models/player";
import useMath from "@/hooks/useMath";
import useContest from "./hooks/use-contest";
import ContestResults from "./contest-results";
import { MathQuestion } from "@/components/shared/Components/math-question";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrophyIcon } from "@heroicons/react/24/outline";

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
    <div className="container mx-auto max-w-3xl">
      {contest.isContestFinished ? (
        <Card className="rounded-3xl border-[#40E0D0]/30">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <TrophyIcon className="h-8 w-8 text-[#40E0D0]" />
                <h2 className="text-xl sm:text-2xl font-semibold">Wedstrijd Afgelopen!</h2>
              </div>
              <ContestResults players={players} playerScores={contest.playerScores} />
              <Button
                variant="outline"
                size="lg"
                onClick={resetContest}
                className="w-full sm:w-auto sm:min-w-[200px] shadow-sm hover:shadow-md transition-all">
                Opnieuw beginnen
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="rounded-3xl border-[#40E0D0]/30">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Huidige Speler</h3>
                <div className="text-xl sm:text-2xl font-semibold text-[#40E0D0]">{contest.activePlayer.Name}</div>
              </div>

              <div className="w-full max-w-xl mx-auto">
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
          </CardContent>
        </Card>
      )}
    </div>
  );
}

