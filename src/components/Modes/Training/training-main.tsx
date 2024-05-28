"use client";

import { useState } from "react";
import QuestionWithNumberInput from "../../shared/Components/question-with-answer";
import MathQuestions from "../../shared/Components/math-questions";
import { Operator } from "@/enums/operator";
import OperatorChoice from "../../shared/Components/operator-choice";
import { OutlinedButton } from "@/components/shared/Buttons/buttons";

export default function TrainingMain() {
	const [mathQuestionCount, setMathQuestionCount] = useState(10);
	const [maxNumber, setmaxNumber] = useState(10);
	const [showMathQuestions, setshowMathQuestions] = useState(false);
	const [operator, setOperator] = useState(Operator.Add);
	const maxMaxNumber = 1000000;
	const minMaxNumber = 1;
	const maxMathQuestionCount = 50;
	const minMathQuestionCount = 1;

	function isDisabled(): boolean {
		if (!maxNumber && !mathQuestionCount) {
			return false;
		}
		return !(
			maxNumber > minMaxNumber - 1 &&
			maxNumber < maxMaxNumber + 1 &&
			mathQuestionCount > minMathQuestionCount - 1 &&
			mathQuestionCount < maxMathQuestionCount + 1
		);
	}

	return (
		<>
			{showMathQuestions && (
				<OutlinedButton
					buttonText={
						!showMathQuestions
							? "SOMMEN Maken!"
							: "Aantal veranderen"
					}
					onClick={() => setshowMathQuestions(!showMathQuestions)}
				></OutlinedButton>
			)}
			{!showMathQuestions && (
				<div className="flex flex-col min-w-max gap-4">
					<QuestionWithNumberInput
						question="Hoeveel sommen"
						setAnswer={setMathQuestionCount}
						initial={mathQuestionCount}
						max={maxMathQuestionCount}
						min={minMathQuestionCount}
					/>
					<QuestionWithNumberInput
						question="Hoogste nummer"
						setAnswer={setmaxNumber}
						initial={maxNumber}
						max={maxMaxNumber}
						min={minMaxNumber}
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
					numberOfMaths={mathQuestionCount}
					operator={operator}
				></MathQuestions>
			)}
			<OutlinedButton
				buttonText={
					!showMathQuestions ? "SOMMEN Maken!" : "Aantal veranderen"
				}
				disabled={isDisabled()}
				onClick={() => setshowMathQuestions(!showMathQuestions)}
			></OutlinedButton>
		</>
	);
}
