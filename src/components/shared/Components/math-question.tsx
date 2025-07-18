"use client";
import { useState } from "react";
import mathQuestionProps from "../models/math-question-props";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function MathQuestion({ id, firstNumber, secondNumber, operator, answer, hideResult, setResult }: mathQuestionProps) {
  const [inputAnswer, setInputAnswer] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputAnswer(value === "" ? null : parseInt(value));
  };

  function handleSetResult() {
    if (setResult) {
      setResult(inputAnswer ?? 0);
      setInputAnswer(null);
      document.getElementById(`input-${id}`)?.focus();
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      if (!hideResult) {
        const numberInputs = Array.from(document.querySelectorAll<HTMLInputElement>('input[type="number"]'));
        const index = numberInputs.indexOf(event.currentTarget);

        if (index > -1 && index + 1 < numberInputs.length) {
          numberInputs[index + 1].focus();
        }
      } else {
        handleSetResult();
      }
    }
  }

  const isCorrect = inputAnswer !== null && answer === inputAnswer;
  const resultText = isCorrect ? "GOED!" : "FOUT!";
  const resultClass = isCorrect ? "text-green-600" : "text-red-600";

  return (
    <div className="grid grid-cols-[180px_100px_120px_auto] items-center gap-4">
      <div className="text-lg font-medium justify-self-end">
        {firstNumber} {operator} {secondNumber} =
      </div>
      <Input
        id={`input-${id}`}
        type="number"
        value={inputAnswer ?? ""}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={cn(
          "w-24 text-center font-medium border-2",
          "shadow-sm hover:shadow transition-all duration-200",
          "focus:border-primary focus:ring-2 focus:ring-primary/20",
          !hideResult &&
            inputAnswer !== null &&
            (isCorrect
              ? "border-green-500 focus:border-green-500 focus:ring-green-500/20"
              : "border-red-500 focus:border-red-500 focus:ring-red-500/20")
        )}
      />

      <div className={cn("font-bold min-w-[100px]", !hideResult && inputAnswer !== null ? resultClass : "opacity-0")}>
        {!hideResult ? (inputAnswer !== null ? resultText : "FOUT!") : ""}
      </div>

      {hideResult && (
        <Button variant="outline" onClick={handleSetResult} className="min-w-[60px] shadow-sm hover:shadow-md transition-shadow">
          Ok
        </Button>
      )}
    </div>
  );
}
