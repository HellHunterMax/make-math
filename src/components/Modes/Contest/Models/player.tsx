export type player = {
	Id: number;
	Name: string;
	answers: mathAnswer[];
};

export type mathAnswer = {
	Id: number;
	answer: number;
};

export default player;
