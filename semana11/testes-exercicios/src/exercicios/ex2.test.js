import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true pra 'arara'", () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true pra 'asa'", () => {
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);
  });

  // O teste não funciona porque não lê caracteretes como: espaço, hífen, etc.
  it("retorna true pra frase", () => {
    const ehPalindromo = checaPalindromo(
      "Socorram-me subi no onibus em marrocos"
    );
    expect(ehPalindromo).toEqual(true);
  });

  // Aqui o mesmo
  it("retorna true pra essa frase de confirmação", () => {
    const ehPalindromo = checaPalindromo("A mala nada na lama");
    expect(ehPalindromo).toEqual(true);
  });
});
