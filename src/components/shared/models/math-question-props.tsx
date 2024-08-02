import { Operator } from "@/enums/operator";

type mathQuestionProps = {
	id: number;
	firstNumber: number;
	secondNumber: number;
	operator: Operator;
	answer: number;
	hideResult?: boolean;
	setResult?: (result: number) => void;
};

export default mathQuestionProps;
