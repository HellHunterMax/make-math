"use client";

import { SetStateAction, useState } from "react";
import QuestionWithNumberInput from "../../shared/Components/question-with-answer";
import MathQuestions from "../../shared/Components/math-questions";
import { Operator } from "@/enums/operator";
import OperatorChoice from "../../shared/Components/operator-choice";
import { OutlinedButton } from "@/components/shared/Buttons/buttons";
import MathQuestionTypeSelectorMenu from "@/components/shared/Components/math-question-type-selector-menu";
import {
	maxMathQuestionCount,
	maxMaxNumber,
	minMathQuestionCount,
	minMaxNumber,
} from "@/constants/website-constants";

export default function TrainingMain() {
	const [mathQuestionCount, setMathQuestionCount] = useState(10);
	const [maxNumber, setmaxNumber] = useState(10);
	const [showMathQuestions, setshowMathQuestions] = useState(false);
	const [selectedOperator, setOperator] = useState(Operator.Add);

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
		<div className="flex flex-col gap-4">
			{showMathQuestions && (
				<OutlinedButton
					buttonText={
						!showMathQuestions
							? "SOMMEN Maken!"
							: "Aantal veranderen"
					}
					onClick={() => setshowMathQuestions(!showMathQuestions)}
				/>
			)}
			{!showMathQuestions && (
				<MathQuestionTypeSelectorMenu
					mathQuestionCount={mathQuestionCount}
					setMathQuestionCount={setMathQuestionCount}
					maxNumber={maxNumber}
					setmaxNumber={setmaxNumber}
					selectedOperator={selectedOperator}
					setOperator={setOperator}
				/>
			)}
			{showMathQuestions && (
				<MathQuestions
					maxNumber={maxNumber}
					numberOfMaths={mathQuestionCount}
					operator={selectedOperator}
				/>
			)}
			<OutlinedButton
				buttonText={
					!showMathQuestions ? "SOMMEN Maken!" : "Aantal veranderen"
				}
				disabled={isDisabled()}
				onClick={() => setshowMathQuestions(!showMathQuestions)}
			/>
		</div>
	);
}
