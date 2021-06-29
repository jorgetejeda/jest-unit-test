import { getDataFromApi } from "../promise";

describe("Probar Async/Await", () => {
  const api = "https://rickandmortyapi.com/api/character/";
  const getRick = "https://rickandmortyapi.com/api/character/1";
  // No necesitamos utilizar 'done()' con async/await
  // Porque la prueba sabe que debe esperar a que esta retorne
  // A diferencia de la promesa que si debemos usar 'done()'
  test("Realizar una peticion a una api", async () => {
    await getDataFromApi(api).then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
    });
  });
  test("Obteniendo el nombre de Rick", async () => {
    // usando await en una constante para no usar 'then()'
    const data = await getDataFromApi(getRick);
    expect(data.name).toEqual("Rick Sanchez");
  });
  test("Realizando una peticion a una API con error", async () => {
    const apiError = "http://httpstat.us/500";
    const peticion = getDataFromApi(apiError);
    await expect(peticion).rejects.toEqual(
      Error("Request failed with status code 500")
    );
  });
  test("Resuelve un Hola", async () => {
    await expect(Promise.resolve("Hola")).resolves.toBe("Hola");
    await expect(Promise.reject("Error")).rejects.toBe("Error");
  });
});
