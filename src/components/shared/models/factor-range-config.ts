export type FactorRange = {
  min: number;
  max: number;
};

export type MultiplyDivideConfig = {
  firstFactor: FactorRange;
  secondFactor: FactorRange;
};

export const defaultMultiplyDivideConfig: MultiplyDivideConfig = {
  firstFactor: { min: 1, max: 10 },
  secondFactor: { min: 1, max: 10 },
};
