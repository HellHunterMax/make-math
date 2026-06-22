import type { MathQuestionProps } from "@/components/shared/models/math-question-props";
import type { Player } from "../Models/player";
import { useCallback, useEffect, useState } from "react";

export type PlayerScore = {
  playerId: string;
  winner: boolean;
  score: number;
};

const useContest = (players: Player[], questions: MathQuestionProps[]) => {
  const [activePlayerId, setActivePlayerId] = useState(players[0].Id);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [isContestFinished, setIsContestFinished] = useState(false);
  const [playerScores, setPlayerScores] = useState<PlayerScore[]>([]);

  function setNextQuestionOrPlayer() {
    if (activeQuestionIndex < questions.length - 1) {
      setActiveQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      const currentPlayerIndex = players.findIndex((player) => player.Id === activePlayerId);
      if (currentPlayerIndex < players.length - 1) {
        setActivePlayerId(players[currentPlayerIndex + 1].Id);
        setActiveQuestionIndex(0);
      } else {
        setIsContestFinished(true);
      }
    }
  }

  const getResult = useCallback((): PlayerScore[] => {
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
  }, [players, questions]);

  useEffect(() => {
    if (isContestFinished) {
      const scores = getResult();
      setPlayerScores(scores);
    }
  }, [getResult, isContestFinished]);

  function setAnswer(playerId: string, questionId: number, answer: number) {
    const player = players.find((player) => player.Id === playerId);
    if (player) {
      player.answers.push({ Id: questionId, answer });
      setNextQuestionOrPlayer();
    }
  }

  return {
    activePlayer: players.find((x) => x.Id === activePlayerId)!,
    activeQuestion: questions[activeQuestionIndex],
    setAnswer,
    isContestFinished,
    playerScores,
  };
};

export default useContest;
