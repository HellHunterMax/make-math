"use client";

import { useState } from "react";
import QuestionWithNumberInput from "./question-with-answer";
import MathQuestions from "./math-questions";

export default function Main() {
	const [numberOfMaths, setNumberOfQuestions] = useState(10);
	const [maxNumber, setmaxNumber] = useState(10);
	const [showMathQuestions, setshowMathQuestions] = useState(false);
	return (
		<>
			<button
				className="border-4 border-cyan-600 px-4 hover:bg-cyan-600 rounded m-4"
				onClick={() => setshowMathQuestions(!showMathQuestions)}
			>
				{!showMathQuestions ? "SOMMEN Maken!" : "Aantal veranderen"}
			</button>
			{!showMathQuestions && (
				<div>
					<QuestionWithNumberInput
						question="Hoeveel vragen wil je krijgen?"
						setAnswer={setNumberOfQuestions}
						initial={numberOfMaths}
						max={20}
						min={1}
					/>
					<QuestionWithNumberInput
						question="wat mag het hoogste getal zijn?"
						setAnswer={setmaxNumber}
						initial={maxNumber}
						max={100}
						min={0}
					/>
				</div>
			)}
			{showMathQuestions && (
				<MathQuestions
					maxNumber={maxNumber}
					numberOfMaths={numberOfMaths}
				></MathQuestions>
			)}
		</>
	);
}
