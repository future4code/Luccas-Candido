import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  it("Verifica se números duplicados existem no array", () => {
    const temDuplicado = checaItensDuplicados([1, 1]);
    expect(temDuplicado).toEqual(true);
  });

  it("Verifica se números duplicados existem no array", () => {
    const temDuplicado = checaItensDuplicados([1, 2, 1]);
    expect(temDuplicado).toEqual(true);
  });

  it("Verifica se números duplicados existem no array", () => {
    const temDuplicado = checaItensDuplicados([3, 3, 4, 4]);
    expect(temDuplicado).toEqual(true);
  });

  it("Verifica se números duplicados existem no array", () => {
    const temDuplicado = checaItensDuplicados([5, 5, 3, 6, 5, 6, 7, 7, 7, 7]);
    expect(temDuplicado).toEqual(true);
  });
});
