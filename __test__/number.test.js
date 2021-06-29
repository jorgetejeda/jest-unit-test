import { number } from "../number";

describe("Comparacion de numeros", () => {
  test("Mayor que", () => {
    const expected = number(2, 3);
    const result = 3;
    expect(expected).toBeGreaterThan(result);
  });
  test("Mayor que o igual que", () => {
    const expected = number(2, 3);
    const result = 5;
    expect(expected).toBeGreaterThanOrEqual(result);
  });
  test("Menor que", () => {
    const expected = number(2, 3);
    const result = 6;
    expect(expected).toBeLessThan(result);
  });
  test("Menor que o igual que", () => {
    const expected = number(2, 3);
    const result = 5;
    expect(expected).toBeLessThanOrEqual(result);
  });
  test("Cercano a", () => {
    const expected = number(0.2, 0.2);
    const result = 0.4;
    // Sirve para evaluar valores decimales
    expect(expected).toBeCloseTo(result);
  });
});
