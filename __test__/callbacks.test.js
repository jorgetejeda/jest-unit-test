import { callbackHell } from "../callbacks";

describe("Propbando un Callback", () => {
  test("Callback", (done) => {
    function otherCallback(data) {
      expect(data).toBe("Hola Javascripters");
      done();
    //   El done es una forma de decirle a jest que se resolvio
    //   la funcion asincrona
    }
    callbackHell(otherCallback);
  });
});
