import mathQuestionProps from "@/components/shared/models/math-question-props";
import { Operator } from "@/enums/operator";

const useMath = (operator: Operator, maxAnswer: number) => {
  const generateMathEquation = (id: number): mathQuestionProps => {
    switch (operator) {
      case Operator.Add:
        return generateAddEquation(id);
      case Operator.Subtract:
        return generateSubtractEquation(id);
      case Operator.Multiply:
        return generateMultiplyEquation(id);
      case Operator.Divide:
        return generateDivideEquation(id);
      default:
        throw new Error("Invalid operator");
    }
  };

  const generateAddEquation = (id: number): mathQuestionProps => {
    const answer = Math.floor(Math.random() * (maxAnswer + 1));
    const firstNumber = Math.floor(Math.random() * (answer + 1));
    const secondNumber = answer - firstNumber;

    return {
      id,
      firstNumber,
      secondNumber,
      operator,
      answer,
    };
  };

  const generateSubtractEquation = (id: number): mathQuestionProps => {
    const firstNumber = Math.floor(Math.random() * (maxAnswer + 1));
    const secondNumber = Math.floor(Math.random() * (firstNumber + 1));
    const answer = calculate(firstNumber, secondNumber, operator);

    return {
      id,
      firstNumber,
      secondNumber,
      operator,
      answer,
    };
  };

  const generateMultiplyEquation = (id: number): mathQuestionProps => {
    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const secondNumber = Math.floor(Math.random() * maxAnswer) + 1;
    const answer = firstNumber * secondNumber;

    return {
      id,
      firstNumber,
      secondNumber,
      operator,
      answer,
    };
  };

  const generateDivideEquation = (id: number): mathQuestionProps => {
    const answer = Math.floor(Math.random() * 10) + 1;
    const secondNumber = Math.floor(Math.random() * maxAnswer) + 1;
    const firstNumber = secondNumber * answer;

    return {
      id,
      firstNumber,
      secondNumber,
      operator,
      answer,
    };
  };

  const calculate = (a: number, b: number, operator: Operator): number => {
    switch (operator) {
      case Operator.Add:
        return a + b;
      case Operator.Subtract:
        return a - b;
      case Operator.Multiply:
        return a * b;
      default:
        throw new Error("Invalid Operator");
    }
  };

  return {
    calculate,
    generateMathEquation,
  };
};

export default useMath;
