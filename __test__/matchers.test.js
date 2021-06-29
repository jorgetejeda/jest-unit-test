describe("Comparadores comunes", () => {
  const user = {
    name: "Jorge",
    lastName: "Tejeda",
  };
  const user2 = {
    name: "Jorge",
    lastName: "Tejeda",
  };
  const user3 = {
    name: "Evelyn",
    lastName: "Adames",
  };
  const expected = user;
  const result = user2;
  const result2 = user3;
  test("Igualdad de elementos ", () => {
    expect(expected).toEqual(result);
  });
  test("Igualdad de elementos ", () => {
    expect(expected).not.toEqual(result2);
  });
});
