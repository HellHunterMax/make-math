"use client";

import { useState } from "react";
import QuestionWithNumberInput from "./question-with-answer";
import MathQuestions from "./math-questions";
import { Operator } from "@/enums/operator";

export default function Main() {
	const [numberOfMaths, setNumberOfQuestions] = useState(10);
	const [maxNumber, setmaxNumber] = useState(10);
	const [showMathQuestions, setshowMathQuestions] = useState(false);
	return (
		<>
			{!showMathQuestions && (
				<div>
					<QuestionWithNumberInput
						question="Hoeveel sommen wil je krijgen?"
						setAnswer={setNumberOfQuestions}
						initial={numberOfMaths}
						max={20}
						min={1}
					/>
					<QuestionWithNumberInput
						question="wat mag het hoogste antwoord zijn?"
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
					operator={Operator.Add}
				></MathQuestions>
			)}
			<button
				className="border-4 border-cyan-600 px-4 hover:bg-cyan-600 rounded m-4"
				onClick={() => setshowMathQuestions(!showMathQuestions)}
			>
				{!showMathQuestions ? "SOMMEN Maken!" : "Aantal veranderen"}
			</button>
		</>
	);
}
