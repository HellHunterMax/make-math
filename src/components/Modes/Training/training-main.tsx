"use client";

import { useState } from "react";
import MathQuestions from "../../shared/Components/math-questions";
import { Operator } from "@/enums/operator";
import { Button } from "@/components/ui/button";
import MathQuestionTypeSelectorMenu from "@/components/shared/Components/math-question-type-selector-menu";
import { maxMathQuestionCount, maxMaxNumber, minMathQuestionCount, minMaxNumber } from "@/constants/website-constants";

export default function TrainingMain() {
  const [mathQuestionCount, setMathQuestionCount] = useState(10);
  const [maxNumber, setmaxNumber] = useState(10);
  const [showMathQuestions, setshowMathQuestions] = useState(false);
  const [selectedOperator, setOperator] = useState(Operator.Add);

  function isDisabled(): boolean {
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

  return (
    <div className="flex flex-col gap-4">
      {showMathQuestions && (
        <Button variant="outline" onClick={() => setshowMathQuestions(!showMathQuestions)}>
          {!showMathQuestions ? "SOMMEN Maken!" : "Aantal veranderen"}
        </Button>
      )}
      {!showMathQuestions && (
        <MathQuestionTypeSelectorMenu
          mathQuestionCount={mathQuestionCount}
          setMathQuestionCount={setMathQuestionCount}
          maxNumber={maxNumber}
          setmaxNumber={setmaxNumber}
          selectedOperator={selectedOperator}
          setOperator={setOperator}
        />
      )}
      {showMathQuestions && <MathQuestions maxNumber={maxNumber} numberOfMaths={mathQuestionCount} operator={selectedOperator} />}
      <Button variant="outline" disabled={isDisabled()} onClick={() => setshowMathQuestions(!showMathQuestions)}>
        {!showMathQuestions ? "SOMMEN Maken!" : "Aantal veranderen"}
      </Button>
    </div>
  );
}
