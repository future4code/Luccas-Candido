export function checaPalindromo(frase) {
  // Criei uma função pra ignorar espaços, utilizando o método split para ignorar os espaços e juntando tudo que ta dentro da frase
  // em uma coisa só, com o .join
  const ignorarEspacos = (str) => {
    str.split(" ").join("");
  };
  return (
    ignorarEspacos(frase) === ignorarEspacos(frase.split("").reverse().join(""))
  );
}
