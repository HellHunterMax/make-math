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

	function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter") {
			if (!hideResult) {
				const numberInputs = Array.from(
					document.querySelectorAll<HTMLInputElement>(
						'input[type="number"]'
					)
				);
				const index = numberInputs.indexOf(event.currentTarget);

				if (index > -1 && index + 1 < numberInputs.length) {
					numberInputs[index + 1].focus();
				}
			} else {
				if (setResult) {
					setResult(inputAnswer ?? 0);
					setInputAnswer(null);
				}
			}
		}
	}

	return (
		<div className="flex flex-row py-4 items-center">
			<p className="pr-2">
				{firstNumber} {operator} {secondNumber} =
			</p>
			<input
				className="max-w-24"
				type="number"
				value={inputAnswer ?? ""}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>

			{!hideResult && (
				<p
					className={`font-bold pl-2 min-w-20 ${
						answer === inputAnswer
							? "text-green-600"
							: "text-red-600"
					}`}
				>
					{inputAnswer !== null &&
						!hideResult &&
						(answer === inputAnswer ? "GOED!" : "FOUT!")}
				</p>
			)}
			{hideResult && (
				<div className="mx-4">
					<OutlinedButton
						buttonText={"Ingevuld"}
						onClick={() => {
							if (setResult) {
								setResult(inputAnswer ?? 0);
							}
						}}
					/>
				</div>
			)}
		</div>
	);
}
