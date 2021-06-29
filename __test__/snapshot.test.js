import { getCharacter } from "../snapshot";
import rick from "../rick.json";

describe("Es hora de las instantaneas", () => {
  test("Snapshot ", () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });
  test("Siempre fallara la instantanea", () => {
    const user = {
      id: Math.floor(Math.random() * 100),
      name: "Jorge Adames",
      profesion: "Javascript Developer",
      createAt: new Date(),
    };
    expect(user).toMatchSnapshot();
  });
  test("Tenemos una excepcion dentro del codigo", () => {
    const user = {
      id: Math.floor(Math.random() * 100),
      name: "Dominique Victoriano",
      createAt: new Date(),
    };
    expect(user).toMatchSnapshot({
      //Como el id es muy cambiante le agregamos una excepcion
      //A esta propiedad en especifico
      id: expect.any(Number),
      createAt: expect.any(Date),
    });
  });
});
