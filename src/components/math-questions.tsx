"use client";

import { useState } from "react";
import { MathQuestion } from "./math-question";

export type MathQuestionProps = {
	firstNumber: number;
	secondNumber: number;
	operator: string;
	answer: number;
};

export type MathType = {
	numberOfMaths: number;
	maxNumber: number;
};

export default function MathQuestions(props: MathType) {
	const generateMathQuestions = () => {
		const questions = [];
		for (let i = 0; i < props.numberOfMaths; i++) {
			const answer = Math.floor(Math.random() * (props.maxNumber + 1)); // answer between 0 and maxNumber
			const firstNumber = Math.floor(Math.random() * (answer + 1)); // firstNumber between 0 and answer
			const secondNumber = answer - firstNumber;
			questions.push({
				firstNumber,
				secondNumber,
				operator: "+",
				answer,
			});
		}
		return questions;
	};

	const [questions] = useState(generateMathQuestions());

	return (
		<div>
			{questions.map((question, index) => (
				<MathQuestion key={index} {...question} />
			))}
		</div>
	);
}
