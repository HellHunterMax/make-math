import mathQuestionProps from "@/components/shared/models/math-question-props";
import player from "../Models/player";
import { useEffect, useState } from "react";

export type playerScore = {
	playerId: number;
	winner: boolean;
	score: number;
};

const useContest = (players: player[], questions: mathQuestionProps[]) => {
	const [activePlayerId, setActivePlayerId] = useState(players[0].Id);
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
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
		console.log(players);
	}, [players[0].answers.length]);

	useEffect(() => {
		if (isContestFinished) {
			const scores = getResult();
			console.log(`setting player scores.`, scores);

			setPlayerScores(scores);
		}
	}, [isContestFinished]);

	function setAnswer(playerId: number, questionId: number, answer: number) {
		// Update the player's answer for the current question
		const player = players.find((player) => player.Id === playerId);
		if (player) {
			player.answers.push({ Id: questionId, answer });
			SetNextQuestionOrPlayer();
		}
	}

	const getResult = (): playerScore[] => {
		// Calculate results and determine winners
		const scores = players.map((player) => {
			let score = 0;
			player.answers.forEach((answer) => {
				const question = questions.find((q) => q.id === answer.Id);
				if (question && question.answer === answer.answer) {
					score++;
				}
			});
			return { playerId: player.Id, winner: false, score: score };
		});

		const maxScore = Math.max(...scores.map((s) => s.score));
		scores.forEach((s) => (s.winner = s.score === maxScore));
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
