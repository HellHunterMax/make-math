import { Operator } from "@/enums/operator";

const useMath = (operator: Operator, maxAnswer: number) => {
	const generateAnswer = (): number => {
		switch (operator) {
			case Operator.Add:
				return Math.floor(Math.random() * (maxAnswer + 1));
			case Operator.Subtract:
				return Math.floor(Math.random() * (maxAnswer + 1));
			default:
				throw new Error("Invalid operator");
		}
	};
	const generateFirstNumber = (answer: number): number => {
		switch (operator) {
			case Operator.Add:
				return Math.floor(Math.random() * (answer + 1));
			case Operator.Subtract:
				return Math.floor(Math.random() * (answer + 1));
			default:
				throw new Error("Invalid operator");
		}
	};
	const generateSecondNumber = (
		answer: number,
		firstNumber: number
	): number => {
		switch (operator) {
			case Operator.Add:
				return answer - firstNumber;
			case Operator.Subtract:
				return firstNumber - answer;
			default:
				throw new Error("Invalid operator");
		}
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
		generateFirstNumber,
		generateSecondNumber,
		generateAnswer,
	};
};

export default useMath;
