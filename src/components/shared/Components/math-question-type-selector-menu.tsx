import { Dispatch, SetStateAction } from "react";
import QuestionWithNumberInput from "./question-with-answer";
import { Operator } from "@/enums/operator";
import OperatorChoice from "./operator-choice";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { maxMathQuestionCount, maxMaxNumber, minMathQuestionCount, minMaxNumber } from "@/constants/website-constants";

export type MathQuestionTypeSelectorMenuProps = {
  mathQuestionCount: number;
  setMathQuestionCount: Dispatch<SetStateAction<number>>;
  maxNumber: number;
  setmaxNumber: Dispatch<SetStateAction<number>>;
  selectedOperator: Operator;
  setOperator: Dispatch<SetStateAction<Operator>>;
};

export default function MathQuestionTypeSelectorMenu({
  mathQuestionCount,
  setMathQuestionCount,
  maxNumber,
  setmaxNumber,
  selectedOperator,
  setOperator,
}: MathQuestionTypeSelectorMenuProps) {
  return (
    <Card className="w-full max-w-md mx-auto rounded-3xl border-[#40E0D0]/30">
      <CardHeader className="space-y-1 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Instellingen</h2>
        <p className="text-sm sm:text-base text-muted-foreground">Pas de som instellingen aan</p>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="font-medium">Aantal en Bereik</h3>
              <Separator className="flex-1" />
            </div>
            <QuestionWithNumberInput
              question="Hoeveel sommen"
              setAnswer={setMathQuestionCount}
              initial={mathQuestionCount}
              max={maxMathQuestionCount}
              min={minMathQuestionCount}
            />
            <QuestionWithNumberInput
              question={
                selectedOperator === Operator.Multiply || selectedOperator === Operator.Divide ? "Hoogste tafel" : "Hoogste antwoord"
              }
              setAnswer={setmaxNumber}
              initial={maxNumber}
              max={maxMaxNumber}
              min={minMaxNumber}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="font-medium">Operator</h3>
              <Separator className="flex-1" />
            </div>
            <OperatorChoice chosenOperator={selectedOperator} setOperator={setOperator} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
