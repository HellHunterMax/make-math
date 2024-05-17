"use client";

import { Dispatch, SetStateAction, useState } from "react";

export type QuestionWithNumberInputProps = {
	question: string;
	initial: number;
	setAnswer: Dispatch<SetStateAction<number>>;
	max: number;
	min: number;
};

export default function QuestionWithNumberInput(
	props: QuestionWithNumberInputProps
) {
	return (
		<>
			<p>{props.question}</p>
			<input
				type="number"
				value={props.initial}
				max={props.max}
				min={props.min}
				onChange={(v) => props.setAnswer(parseInt(v.target.value))}
			/>
		</>
	);
}
