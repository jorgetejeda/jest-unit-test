import { sumar, multiplicar, dividir, restar } from "../math";

describe("Calculos matematicos", () => {
  test("Prueba de sumas", () => {
    const expected = sumar(1, 1);
    const result = 2;
    expect(expected).toBe(result);
  });
  test("Prueba de restar", () => {
    const expected = restar(6, 2);
    const result = 4;
    expect(expected).toBe(result);
  });
  test("Prueba de multiplicar", () => {
    const expected = multiplicar(2, 6);
    const result = 12;
    expect(expected).toBe(result);
  });
  test("Prueba de dividir", () => {
    const expected = dividir(15, 5);
    const result = 3;
    expect(expected).toBe(result);
  });
});
