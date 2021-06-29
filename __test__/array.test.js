import { arrayFruits, arrayColors } from "../array";

describe("Probando nuestros arreglos", () => {
  test("Tiene una banana", () => {
    expect(arrayFruits()).toContain("banana");
  });
  test("¿No tiene una mango?", () => {
    expect(arrayFruits()).not.toContain("mango");
  });
  test("Comprobar el tamano de un arreglo", () => {
    expect(arrayFruits()).toHaveLength(6);
  });
  test("Comprobando existe el color rosado en el array",()=>{
      expect(arrayColors()).toContain('rosa');
  })
});
