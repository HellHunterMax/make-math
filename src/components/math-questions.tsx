"use client";

import { useState } from "react";

type MathQuestionProps = {
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

function MathQuestion(props: MathQuestionProps) {
	const [inputAnswer, setInputAnswer] = useState<number | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputAnswer(Number(e.target.value));
	};

	return (
		<div className="flex flex-row justify-start p-4">
			<p className="pr-2">
				{props.firstNumber} {props.operator} {props.secondNumber} ={" "}
				{props.answer}
			</p>
			<input
				type="number"
				value={inputAnswer ?? ""}
				onChange={handleChange}
			/>
			{inputAnswer !== null && (
				<p
					className={`font-bold pl-2 ${
						props.answer === inputAnswer
							? "text-green-600"
							: "text-red-600"
					}`}
				>
					{props.answer === inputAnswer ? "GOED!" : "FOUT!"}
				</p>
			)}
		</div>
	);
}
