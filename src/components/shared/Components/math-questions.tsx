"use client";

import { MathQuestion } from "./math-question";
import { Operator } from "@/enums/operator";
import useMath from "@/hooks/useMath";
import { useState } from "react";

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
		<div className="flex flex-col p-4">
			{questions.map((question, index) => (
				<MathQuestion key={index} {...question} />
			))}
		</div>
	);
}
