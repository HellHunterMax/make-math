import { Operator } from "@/enums/operator";

type mathQuestionProps = {
	firstNumber: number;
	secondNumber: number;
	operator: Operator;
	answer: number;
	hideResult?: boolean;
	setResult?: (result: number) => void;
};

export default mathQuestionProps;
