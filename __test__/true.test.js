import { isNull, isTrue, isFalse, isUndefined } from "../true";

describe("Probando nuestras funciones null, booleanas e indefinidas", () => {
  test("Es null ", () => {
    expect(isNull()).toBeNull();
  });
  test("Es True ", () => {
    expect(isTrue()).toBeTruthy();
  });
  test("Es Falso ", () => {
    expect(isFalse()).toBeFalsy();
  });
  test("Es indefinido ", () => {
    expect(isUndefined()).toBeUndefined();
  });
  test("Es contrario a True ", () => {
    expect(isFalse()).not.toBeTruthy();
  });
});
