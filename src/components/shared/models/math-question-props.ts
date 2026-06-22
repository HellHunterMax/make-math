import { Operator } from "@/enums/operator";

export type MathQuestionProps = {
  id: number;
  firstNumber: number;
  secondNumber: number;
  operator: Operator;
  answer: number;
  hideResult?: boolean;
  setResult?: (result: number) => void;
};
