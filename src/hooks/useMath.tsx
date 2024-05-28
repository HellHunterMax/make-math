import { MathQuestionProps } from "@/components/shared/Components/math-questions";
import { Operator } from "@/enums/operator";

const useMath = (operator: Operator, maxAnswer: number) => {
	const generateMathEquation = (): MathQuestionProps => {
		switch (operator) {
			case Operator.Add:
				return generateAddEquation();
			case Operator.Subtract:
				return generateSubtractEquation();
			default:
				throw new Error("Invalid operator");
		}
	};

	const generateAddEquation = (): MathQuestionProps => {
		const answer = Math.floor(Math.random() * (maxAnswer + 1));
		const firstNumber = Math.floor(Math.random() * (answer + 1));
		const secondNumber = answer - firstNumber;

		return {
			firstNumber,
			secondNumber,
			operator,
			answer,
		};
	};

	const generateSubtractEquation = (): MathQuestionProps => {
		const firstNumber = Math.floor(Math.random() * (maxAnswer + 1));
		const secondNumber = Math.floor(Math.random() * (firstNumber + 1));
		const answer = calculate(firstNumber, secondNumber, operator);

		return {
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
			default:
				throw new Error("Invalid operator");
		}
	};

	return {
		calculate,
		generateMathEquation,
	};
};

export default useMath;
