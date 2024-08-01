"use client";
import { useState } from "react";
import mathQuestionProps from "../models/math-question-props";
import { OutlinedButton } from "../Buttons/buttons";

export function MathQuestion({
	firstNumber,
	secondNumber,
	operator,
	answer,
	hideResult,
	setResult,
}: mathQuestionProps) {
	const [inputAnswer, setInputAnswer] = useState<number | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputAnswer(parseInt(e.target.value));
	};

	return (
		<div className="flex flex-row p-4">
			<p className="pr-2">
				{firstNumber} {operator} {secondNumber} =
			</p>
			<input
				className="max-w-24"
				type="number"
				value={inputAnswer ?? ""}
				onChange={handleChange}
			/>

			<p
				className={`font-bold pl-2 min-w-20 ${
					answer === inputAnswer ? "text-green-600" : "text-red-600"
				}`}
			>
				{inputAnswer !== null &&
					!hideResult &&
					(answer === inputAnswer ? "GOED!" : "FOUT!")}
			</p>
			{hideResult && (
				<OutlinedButton
					buttonText={"Ingevuld"}
					onClick={() => {
						if (setResult) {
							setResult(inputAnswer ?? 0);
						}
					}}
				/>
			)}
		</div>
	);
}
