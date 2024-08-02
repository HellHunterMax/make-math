"use client";
import { useState } from "react";
import SelectContestPlayersMenu from "./select-contest-players-Menu";
import player from "./Models/player";
import { Operator } from "@/enums/operator";
import { FilledButton } from "@/components/shared/Buttons/buttons";
import MathQuestionTypeSelectorMenu from "@/components/shared/Components/math-question-type-selector-menu";
import {
	maxMathQuestionCount,
	maxMaxNumber,
	minMathQuestionCount,
	minMaxNumber,
} from "@/constants/website-constants";
import ContestPage from "./contest-page";

export default function ContestMain() {
	const [players, setPlayers] = useState<player[]>([]);
	const [mathQuestionCount, setMathQuestionCount] = useState(10);
	const [maxNumber, setmaxNumber] = useState(10);
	const [selectedOperator, setOperator] = useState(Operator.Add);

	const [arePlayersSelected, setArePlayersSelected] = useState(false);
	const [isContestStarted, setIsContestStarted] = useState(false);

	function resetContest() {
		setArePlayersSelected(false);
		setIsContestStarted(false);
	}

	function isStartDisabled(): boolean {
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

	function onClickPlayersSelected() {
		if (players.length > 1) {
			setArePlayersSelected(true);
		}
	}

	function onClickStartContest() {
		if (!isStartDisabled()) {
			setIsContestStarted(true);
		}
	}

	return (
		<>
			{!arePlayersSelected && !isContestStarted && (
				<div className="flex flex-col">
					<SelectContestPlayersMenu
						Players={players}
						SetPlayers={setPlayers}
					/>

					<FilledButton
						buttonText={"Klaar"}
						disabled={players.length < 2}
						onClick={onClickPlayersSelected}
					/>
				</div>
			)}
			{arePlayersSelected && !isContestStarted && (
				<div className="flex flex-col">
					<MathQuestionTypeSelectorMenu
						mathQuestionCount={mathQuestionCount}
						setMathQuestionCount={setMathQuestionCount}
						maxNumber={maxNumber}
						setmaxNumber={setmaxNumber}
						selectedOperator={selectedOperator}
						setOperator={setOperator}
					/>
					<FilledButton
						buttonText={"START"}
						disabled={isStartDisabled()}
						onClick={onClickStartContest}
					/>
				</div>
			)}
			{isContestStarted && (
				<ContestPage
					players={players}
					numberOfQuestions={mathQuestionCount}
					maxNumber={maxNumber}
					selectedOperator={selectedOperator}
					resetContest={resetContest}
				/>
			)}
		</>
	);
}
