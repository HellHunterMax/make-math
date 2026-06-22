export type Player = {
  Id: string;
  Name: string;
  answers: MathAnswer[];
};

export type MathAnswer = {
  Id: number;
  answer: number;
};
