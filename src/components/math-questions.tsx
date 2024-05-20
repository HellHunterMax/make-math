"use client";

import { MathQuestion } from "./math-question";
import { Operator } from "@/enums/operator";
import useMath from "@/hooks/useMath";

export type MathQuestionProps = {
	firstNumber: number;
	secondNumber: number;
	operator: Operator;
	answer: number;
};

export type MathType = {
	numberOfMaths: number;
	maxNumber: number;
	operator: Operator;
};

export default function MathQuestions(props: MathType) {
	const mathGenerator = useMath(props.operator, props.maxNumber);
	const generateMathQuestions = () => {
		const questions = [];
		for (let i = 0; i < props.numberOfMaths; i++) {
			const answer = mathGenerator.generateAnswer();
			const firstNumber = mathGenerator.generateFirstNumber(answer);
			const secondNumber = mathGenerator.generateSecondNumber(
				answer,
				firstNumber
			);
			questions.push({
				firstNumber,
				secondNumber,
				operator: props.operator,
				answer,
			});
		}
		return questions;
	};

	const questions = generateMathQuestions();

	return (
		<div className="flex flex-col p-4">
			{questions.map((question, index) => (
				<MathQuestion key={index} {...question} />
			))}
		</div>
	);
}
