"use client";
import { useState } from "react";
import { MathQuestionProps } from "./math-questions";

export function MathQuestion(props: MathQuestionProps) {
	const [inputAnswer, setInputAnswer] = useState<number | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputAnswer(parseInt(e.target.value));
	};

	return (
		<div className="flex flex-row p-4">
			<p className="pr-2">
				{props.firstNumber} {props.operator} {props.secondNumber} =
			</p>
			<input
				className="max-w-24"
				type="number"
				value={inputAnswer ?? ""}
				onChange={handleChange}
			/>

			<p
				className={`font-bold pl-2 min-w-20 ${
					props.answer === inputAnswer
						? "text-green-600"
						: "text-red-600"
				}`}
			>
				{inputAnswer !== null &&
					(props.answer === inputAnswer ? "GOED!" : "FOUT!")}
			</p>
		</div>
	);
}
