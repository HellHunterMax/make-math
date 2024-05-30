import { Dispatch, SetStateAction, useState } from "react";
import QuestionWithNumberInput from "./question-with-answer";
import { operator } from "@/enums/operator";
import OperatorChoice from "./operator-choice";
import {
	maxMathQuestionCount,
	maxMaxNumber,
	minMathQuestionCount,
	minMaxNumber,
} from "@/constants/website-constants";

export type mathQuestionTypeSelectorMenuProps = {
	mathQuestionCount: number;
	setMathQuestionCount: Dispatch<SetStateAction<number>>;
	maxNumber: number;
	setmaxNumber: Dispatch<SetStateAction<number>>;
	selectedOperator: operator;
	setOperator: Dispatch<SetStateAction<operator>>;
};

export default function MathQuestionTypeSelectorMenu(
	props: mathQuestionTypeSelectorMenuProps
) {
	return (
		<div className="flex flex-col min-w-max gap-4">
			<QuestionWithNumberInput
				question="Hoeveel sommen"
				setAnswer={props.setMathQuestionCount}
				initial={props.mathQuestionCount}
				max={maxMathQuestionCount}
				min={minMathQuestionCount}
			/>
			<QuestionWithNumberInput
				question="Hoogste nummer"
				setAnswer={props.setmaxNumber}
				initial={props.maxNumber}
				max={maxMaxNumber}
				min={minMaxNumber}
			/>
			<OperatorChoice
				chosenOperator={props.selectedOperator}
				setOperator={props.setOperator}
			/>
		</div>
	);
}
