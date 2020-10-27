const twoNumbers = (a: number, b: number): object => {
  const soma: number = a + b;
  const sub: number = a - b;
  const mult: number = a * b;

  if (a > b) {
    console.log(`O maior número é ${a}`);
  } else if (a < b) {
    console.log(`O maior número é ${b}`);
  } else {
    console.log("Os números são iguais");
  }

  const result: object = {
    soma: soma,
    sub: sub,
    multiplicacao: mult,
  };

  return result;
};

console.log(twoNumbers(10, 5));
