"use client";

import { useState } from "react";
import MathQuestions from "../../shared/Components/math-questions";
import { Operator } from "@/enums/operator";
import { Button } from "@/components/ui/button";
import MathQuestionTypeSelectorMenu from "@/components/shared/Components/math-question-type-selector-menu";
import { maxMathQuestionCount, maxMaxNumber, minMathQuestionCount, minMaxNumber } from "@/constants/website-constants";

export default function TrainingMain() {
  const [mathQuestionCount, setMathQuestionCount] = useState<number | null>(10);
  const [maxNumber, setMaxNumber] = useState<number | null>(10);
  const [showMathQuestions, setShowMathQuestions] = useState(false);
  const [selectedOperator, setSelectedOperator] = useState(Operator.Add);

  function isDisabled(): boolean {
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

  return (
    <div className="flex flex-col gap-4">
      {showMathQuestions && (
        <Button variant="outline" onClick={() => setShowMathQuestions(!showMathQuestions)}>
          {showMathQuestions ? "Aantal veranderen" : "SOMMEN Maken!"}
        </Button>
      )}
      {!showMathQuestions && (
        <MathQuestionTypeSelectorMenu
          mathQuestionCount={mathQuestionCount ?? 1}
          setMathQuestionCount={setMathQuestionCount}
          maxNumber={maxNumber ?? 0}
          setMaxNumber={setMaxNumber}
          selectedOperator={selectedOperator}
          setOperator={setSelectedOperator}
        />
      )}
      {showMathQuestions && <MathQuestions maxNumber={maxNumber ?? 0} numberOfMaths={mathQuestionCount ?? 0} operator={selectedOperator} />}
      <Button variant="outline" disabled={isDisabled()} onClick={() => setShowMathQuestions(!showMathQuestions)}>
        {showMathQuestions ? "Aantal veranderen" : "SOMMEN Maken!"}
      </Button>
    </div>
  );
}
