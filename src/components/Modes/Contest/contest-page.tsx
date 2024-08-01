"use client";
import { Operator } from "@/enums/operator";
import player from "./Models/player";
import useMath from "@/hooks/useMath";
import useContest from "./hooks/use-contest";
import ContestResults from "./contest-results";
import { MathQuestion } from "@/components/shared/Components/math-question";

export type contestPageProps = {
	players: player[];
	numberOfQuestions: number;
	maxNumber: number;
	selectedOperator: Operator;
};

export default function ContestPage({
	players,
	numberOfQuestions,
	maxNumber,
	selectedOperator,
}: contestPageProps) {
	var mathGenerator = useMath(selectedOperator, maxNumber);

	const generateMathQuestions = () => {
		const questions = [];
		for (let i = 0; i < numberOfQuestions; i++) {
			questions.push(mathGenerator.generateMathEquation());
		}
		return questions;
	};
	const questions = generateMathQuestions();
	var contest = useContest(players, questions);

	return (
		<>
			{contest.isContestFinished && (
				<ContestResults
					players={players}
					playerScores={contest.playerScores}
				/>
			)}
			{!contest.isContestFinished && (
				<MathQuestion
					firstNumber={contest.activeQuestion.firstNumber}
					secondNumber={contest.activeQuestion.secondNumber}
					answer={contest.activeQuestion.answer}
					setResult={(result) =>
						contest.SetAnswer(contest.activePlayer.Id, result)
					}
					operator={contest.activeQuestion.operator}
					hideResult
				/>
			)}
		</>
	);
}
