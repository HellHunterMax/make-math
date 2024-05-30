import { mathQuestionProps } from "@/components/shared/Components/math-questions";
import { operator } from "@/enums/operator";

const useMath = (operator: operator, maxAnswer: number) => {
	const generateMathEquation = (): mathQuestionProps => {
		switch (operator) {
			case operator.Add:
				return generateAddEquation();
			case operator.Subtract:
				return generateSubtractEquation();
			default:
				throw new Error("Invalid operator");
		}
	};

	const generateAddEquation = (): mathQuestionProps => {
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

	const generateSubtractEquation = (): mathQuestionProps => {
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

	const calculate = (a: number, b: number, operator: operator): number => {
		switch (operator) {
			case operator.Add:
				return a + b;
			case operator.Subtract:
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
