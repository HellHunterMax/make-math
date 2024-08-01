import mathQuestionProps from "@/components/shared/models/math-question-props";
import { Operator } from "@/enums/operator";
import player from "../Models/player";
import { useEffect, useState } from "react";

export type playerAnswers = {
	[playerId: number]: number[];
};

export type playerScore = {
	playerId: number;
	winner: boolean;
	score: number;
};

const useContest = (players: player[], questions: mathQuestionProps[]) => {
	const [activePlayerId, setActivePlayerId] = useState(players[0].Id);
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
	const [questionAnswers, setQuestionAnswers] = useState<playerAnswers>({});
	const [isContestFinished, setIsContestFinished] = useState(false);
	const [playerScores, setPlayerScores] = useState<playerScore[]>([]);

	function SetNextQuestionOrPlayer() {
		if (activeQuestionIndex < questions.length - 1) {
			setActiveQuestionIndex((prevIndex) => prevIndex + 1);
		} else {
			const currentPlayerIndex = players.findIndex(
				(player) => player.Id === activePlayerId
			);
			if (currentPlayerIndex < players.length - 1) {
				setActivePlayerId(players[currentPlayerIndex + 1].Id);
				setActiveQuestionIndex(0);
			} else {
				setIsContestFinished(true);
			}
		}
	}

	useEffect(() => {
		if (isContestFinished) {
			const scores = getResult();
			setPlayerScores(scores);
		}
	}, [isContestFinished]);

	function setAnswer(playerId: number, answer: number) {
		setQuestionAnswers((prevAnswers) => {
			const playerAnswers = prevAnswers[playerId] || [];
			const updatedAnswers = [...playerAnswers];
			updatedAnswers[activeQuestionIndex] = answer;
			return {
				...prevAnswers,
				[playerId]: updatedAnswers,
			};
		});
		SetNextQuestionOrPlayer();
	}

	const getResult = (): playerScore[] => {
		const scores = players.map((player) => {
			const playerAnswers = questionAnswers[player.Id] || [];
			const correctCount = playerAnswers.reduce(
				(count, answer, index) => {
					return count + (answer === questions[index].answer ? 1 : 0);
				},
				0
			);
			return { playerId: player.Id, winner: false, score: correctCount };
		});

		const maxScore = Math.max(...scores.map((score) => score.score));
		scores.forEach((score) => {
			if (score.score === maxScore) {
				score.winner = true;
			}
		});

		return scores;
	};

	return {
		activePlayer: players.find((x) => x.Id == activePlayerId)!,
		activeQuestion: questions[activeQuestionIndex],
		SetAnswer: setAnswer,
		isContestFinished,
		playerScores,
	};
};

export default useContest;
