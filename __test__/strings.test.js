describe("Comprobar cadenas de texto", () => {
  const text = "Este es nuestro string";
  test("Debe contener el siguiente texto", () => {
    expect(text).toMatch(/nuestro/);
  });
  test("No contiene el siguiente texto", () => {
    expect(text).not.toMatch(/bonito/);
  });
  test("Contiene 22 caracteres", () => {
    expect(text).toHaveLength(22);
  });
});
