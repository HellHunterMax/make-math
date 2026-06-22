import { Dispatch, SetStateAction } from "react";
import QuestionWithNumberInput from "./question-with-answer";
import { Operator } from "@/enums/operator";
import OperatorChoice from "./operator-choice";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  maxMathQuestionCount,
  maxMaxNumber,
  minMathQuestionCount,
  minMaxNumber,
  minFactor,
  maxFactor,
} from "@/constants/website-constants";
import type { MultiplyDivideConfig } from "@/components/shared/models/factor-range-config";

export type MathQuestionTypeSelectorMenuProps = {
  mathQuestionCount: number;
  setMathQuestionCount: Dispatch<SetStateAction<number | null>>;
  maxNumber: number;
  setMaxNumber: Dispatch<SetStateAction<number | null>>;
  selectedOperator: Operator;
  setOperator: Dispatch<SetStateAction<Operator>>;
  multiplyConfig: MultiplyDivideConfig;
  setMultiplyConfig: Dispatch<SetStateAction<MultiplyDivideConfig>>;
};

function makeFactorSetter(
  setConfig: Dispatch<SetStateAction<MultiplyDivideConfig>>,
  field: "firstFactor" | "secondFactor",
  key: "min" | "max",
): Dispatch<SetStateAction<number | null>> {
  return (value) => {
    setConfig((prev) => {
      const current = prev[field][key];
      const next = typeof value === "function" ? value(current) : value;
      if (next === null) return prev;
      return { ...prev, [field]: { ...prev[field], [key]: next } };
    });
  };
}

export default function MathQuestionTypeSelectorMenu({
  mathQuestionCount,
  setMathQuestionCount,
  maxNumber,
  setMaxNumber,
  selectedOperator,
  setOperator,
  multiplyConfig,
  setMultiplyConfig,
}: MathQuestionTypeSelectorMenuProps) {
  const isMultiplyOrDivide = selectedOperator === Operator.Multiply || selectedOperator === Operator.Divide;

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
              <h3 className="font-medium">Bewerking</h3>
              <Separator className="flex-1" />
            </div>
            <OperatorChoice chosenOperator={selectedOperator} setOperator={setOperator} />
          </div>

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
            {isMultiplyOrDivide ? (
              <>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    {selectedOperator === Operator.Divide ? "Antwoord" : "Eerste getal"}
                  </p>
                  <QuestionWithNumberInput
                    question="Minimum"
                    setAnswer={makeFactorSetter(setMultiplyConfig, "firstFactor", "min")}
                    initial={multiplyConfig.firstFactor.min}
                    max={multiplyConfig.firstFactor.max}
                    min={minFactor}
                  />
                  <QuestionWithNumberInput
                    question="Maximum"
                    setAnswer={makeFactorSetter(setMultiplyConfig, "firstFactor", "max")}
                    initial={multiplyConfig.firstFactor.max}
                    max={maxFactor}
                    min={multiplyConfig.firstFactor.min}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    {selectedOperator === Operator.Divide ? "Getal om te delen door" : "Tweede getal"}
                  </p>
                  <QuestionWithNumberInput
                    question="Minimum"
                    setAnswer={makeFactorSetter(setMultiplyConfig, "secondFactor", "min")}
                    initial={multiplyConfig.secondFactor.min}
                    max={multiplyConfig.secondFactor.max}
                    min={minFactor}
                  />
                  <QuestionWithNumberInput
                    question="Maximum"
                    setAnswer={makeFactorSetter(setMultiplyConfig, "secondFactor", "max")}
                    initial={multiplyConfig.secondFactor.max}
                    max={maxFactor}
                    min={multiplyConfig.secondFactor.min}
                  />
                </div>
              </>
            ) : (
              <QuestionWithNumberInput
                question="Hoogste antwoord"
                setAnswer={setMaxNumber}
                initial={maxNumber}
                max={maxMaxNumber}
                min={minMaxNumber}
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
