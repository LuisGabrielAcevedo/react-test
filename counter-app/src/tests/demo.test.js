describe("Pruebas en demo.test.js", () => {
  test("deben de ser iguales los strings", () => {
    const msg = "Hola mundo";
    const msg2 = "Hola mundo";
    expect(msg).toBe(msg2);
  });
});
