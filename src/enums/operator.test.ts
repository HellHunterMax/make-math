import { describe, expect, it } from "vitest";
import { Operator } from "./operator";

describe("Operator enum", () => {
  it("defines stable operator symbols", () => {
    expect(Operator.Add).toBe("+");
    expect(Operator.Subtract).toBe("-");
    expect(Operator.Multiply).toBe("x");
    expect(Operator.Divide).toBe(":");
  });
});
