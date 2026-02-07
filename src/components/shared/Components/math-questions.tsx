"use client";

import { MathQuestion } from "./math-question";
import { Operator } from "@/enums/operator";
import useMath from "@/hooks/useMath";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export type mathType = {
  numberOfMaths: number;
  maxNumber: number;
  operator: Operator;
};

export default function MathQuestions(props: mathType) {
  const mathGenerator = useMath(props.operator, props.maxNumber);
  const generateMathQuestions = () => {
    const questions = [];
    for (let i = 1; i < props.numberOfMaths + 1; i++) {
      questions.push(mathGenerator.generateMathEquation(i));
    }
    return questions;
  };

  const [questions] = useState(generateMathQuestions());

  return (
    <Card className="w-full max-w-3xl mx-auto rounded-3xl border-[#40E0D0]/30">
      <CardContent className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col space-y-4 sm:space-y-6">
          {questions.map((question, index) => (
            <MathQuestion key={index} {...question} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
