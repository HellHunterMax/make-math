"use client";

import { useState } from "react";
import QuestionWithNumberInput from "./question-with-answer";
import MathQuestions from "./math-questions";
import { Operator } from "@/enums/operator";
import FilledButton from "./shared/filled-Button";
import OperatorChoice from "./operator-choice";

export default function Main() {
	const [numberOfMaths, setNumberOfQuestions] = useState(10);
	const [maxNumber, setmaxNumber] = useState(10);
	const [showMathQuestions, setshowMathQuestions] = useState(false);
	const [operator, setOperator] = useState(Operator.Add);
	return (
		<>
			{showMathQuestions && (
				<FilledButton
					buttonText={
						!showMathQuestions
							? "SOMMEN Maken!"
							: "Aantal veranderen"
					}
					onClick={() => setshowMathQuestions(!showMathQuestions)}
				></FilledButton>
			)}
			{!showMathQuestions && (
				<div className="flex flex-col min-w-max gap-4">
					<QuestionWithNumberInput
						question="Hoeveel sommen"
						setAnswer={setNumberOfQuestions}
						initial={numberOfMaths}
						max={20}
						min={1}
					/>
					<QuestionWithNumberInput
						question="Hoogste nummer"
						setAnswer={setmaxNumber}
						initial={maxNumber}
						max={100}
						min={0}
					/>
					<OperatorChoice
						chosenOperator={operator}
						setOperator={setOperator}
					/>
				</div>
			)}
			{showMathQuestions && (
				<MathQuestions
					maxNumber={maxNumber}
					numberOfMaths={numberOfMaths}
					operator={operator}
				></MathQuestions>
			)}
			<FilledButton
				buttonText={
					!showMathQuestions ? "SOMMEN Maken!" : "Aantal veranderen"
				}
				onClick={() => setshowMathQuestions(!showMathQuestions)}
			></FilledButton>
		</>
	);
}
