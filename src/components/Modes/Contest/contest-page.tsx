"use client";
import player from "./Models/player";

export type contestPageProps = {
	players: player[];
	numberOfQuestions: number;
};

export default function ContestPage({
	players,
	numberOfQuestions,
}: contestPageProps) {
	return <div></div>;
}
