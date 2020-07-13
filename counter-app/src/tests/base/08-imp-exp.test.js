import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en 08-imp-exp.js", () => {
  test("Debe de retornar un heroe por id", () => {
    const resp1 = getHeroeById(1);
    const heroeData1 = heroes.find((h) => h.id === 1);
    expect(resp1).toEqual(heroeData1);
  });
  test("Debe de retornar undefined si heroe no existe", () => {
    const resp1 = getHeroeById(10);
    expect(resp1).toBe(undefined);
  });
  test("Debe retornar un arreglo con los heroes de DC", () => {
    const resp1 = getHeroesByOwner("DC");
    const heroeData1 = heroes.filter((h) => h.owner === "DC");
    expect(resp1).toEqual(heroeData1);
  });
  test("Debe retornar un arreglo con los heroes de Marvel", () => {
    const resp1 = getHeroesByOwner("Marvel");
    const heroeData1 = heroes.filter((h) => h.owner === "Marvel");
    expect(resp1).toEqual(heroeData1);
    expect(resp1.length).toBe(2);
  });
});
