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
		<div className="p-4 flex flex-col bg-white shadow-md rounded-xl bg-clip-border w-full">
			<p>{props.question}</p>
			<input
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				type="number"
				value={props.initial}
				max={props.max}
				min={props.min}
				onChange={(v) => props.setAnswer(parseInt(v.target.value))}
			/>
		</div>
	);
}
