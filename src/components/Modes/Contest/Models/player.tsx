export type player = {
	Id: string;
	Name: string;
	answers: mathAnswer[];
};

export type mathAnswer = {
	Id: number;
	answer: number;
};

export default player;
