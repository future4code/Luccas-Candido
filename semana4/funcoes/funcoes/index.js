// 1

// Leia o código abaixo:


/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10)) */

/* a. O que vai ser impresso no console? */

// R: Vai ser impresso 10 e 50.

/* b. O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? */

// R: Retornará apenas o valor da ultima função invocada. 

// 2

// Leia o código abaixo:


/* let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const outraFuncao = function(array) {
	for (let i = 0; i < 2; i++) {
		console.log(array[i])
	}
}

outraFuncao(arrayDeNomes)
 */

/* a. Explicite quais são as saídas impressas no console 

R: A saidá será "Darvas" e "Goli"

*/

/* b. Se `arrayDeNomes` mudasse de valor para `["Amanda", "Caio"]`, o que vai ser impresso no console? 

R: Retornará "Amanda e Caio"

*/

// 3

/* O código abaixo mostra uma função que recebe um array e devolve outro array. Explique em poucas palavras o que ela faz e sugira um nome melhor para ela! */


/* const metodo = (array) => {
let arrayFinal = [];

  for (let x of array) {
	if (x % 2 === 0) {
	arrayFinal.push(x * x)
	}
  }

  return arrayFinal;
}
 */
// R: Esta função retorna um novo array. Nesse novo array vai conter numeros pares multiplicados por ele mesmo. Um nome melhor seria: paresMultiplicados

// 4

// Escreva as funções explicadas abaixo:

/* a. A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: */

/* const infosPessoais = () => {console.log('Eu sou Luccas, tenho 24 anos, moro em Lavras e sou estudante.')}

infosPessoais() */
/* 
b.  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e um `boolean` que representa se é estudante ou não. Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template: */


/* const dadosPessoais = (nome, idade, cidade, estudante) => {
    if(estudante === true) {
        return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou estudante!`
    } else {
        return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e não sou estudante!`
    }

}

console.log(dadosPessoais("Luccas", 24, "Lavras", false)) */

// Escreva as funções explicadas abaixo:

/* a. Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
 */

/* const somaNumeros = (a, b) => {
    return a + b
}

console.log(somaNumeros(1, 2)) */


/* b. Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
 */

/* const maiorOuIgual = (a, b) => {

    if(a >= b) {
        return true

    } else {
        return false
    }
}

console.log(maiorOuIgual(2, 3))
 */

/* c. Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima essa mensagem 10 vezes. (não é permitido escrever 10 `console.log` dentro da função, use outra estrutura de código para isso) */

/* const msg10 = (string) => {

    for(let i = 0; i < 10; i++ ) {
        console.log(string)
    }
}

msg10('Olá') */

// 6

// Para os itens a seguir, considere o seguinte array para os seus testes:


const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


// a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele

/* const qtdeDeElementos = (array) => {
    return `A quantidade de elementos no array é ${array.length}`
}

console.log(qtdeDeElementos(array)) */


// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

/* const parOuNao = (numero) => {

    if(numero % 2 === 0) {
        return true

    } else {
        return false
    }
}

console.log(parOuNao(2))
 */
// c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

/* const paresNoArray = (array) => {

    let quantidadePares = 0

    for(let i = 0; i < array.length; i++) {

        if(array[i] % 2 === 0) {
            quantidadePares += 1
        }
    }

    return quantidadePares
}

console.log(paresNoArray(array)) */

// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par

/* const parOuNao = (numero) => {

    if(numero % 2 === 0) {
        return true

    } else {
        return false
    }
}

const paresNoArray = (array) => {

    let quantidadePares = 0

    for(let i = 0; i < array.length; i++) {

        if(parOuNao(array[i])) {
            quantidadePares += 1
        }
    }

    return quantidadePares
}

console.log(paresNoArray(array)) */


// =========== DESAFIO =============

/* EXERCÍCIO 1

Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções: 
 */
// 1.  Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro.

// const imprimeConsole = (item) => {console.log(`${item}`) }


/* 2. Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimí-lo. */
/* 
const soma = (a, b) => {
    return a + b
}

imprimeConsole(soma(1, 2)) */

// EXERCÍCIO 2

// Considere o seguinte array e utilize ele para os exercícios:


const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

/* a. Escreva uma função que receba um array como parâmetro e retorne um array com apenas os números pares e multiplicados por 2. */

/* const novoArrayMulti = (array) => {
    let arrayParesMultiplicados = []

    for(let i = 0; i < array.length; i++) {

        if(array[i] % 2 === 0) {

            let multiplicado = (array[i] * 2)
            arrayParesMultiplicados.push(multiplicado)
        }
    }

    return arrayParesMultiplicados

}

console.log(novoArrayMulti(numeros))

 */

// b. Escreva uma função que receba um array como parâmetro e retorne o maior número deste array.

/* const maiorNumero = (array) => {

    let maior = 0

    for(let i = 0; i < array.length; i++) {

        if(array[i] > maior) {
            maior = array[i]   
        }
    }

    return maior
}
console.log(maiorNumero(numeros)) */

/* c. Escreva uma função que receba um array como parâmetro e retorne o **índice** do maior número deste array. */

/* const maiorIndice = (array) => {

    let maior = 0
    let indice = 0

    for(let i=0; i < array.length; i++) {

        if(array[i] > maior) {
            maior = array[i]
            indice = i

        }
    }

    return indice
}

console.log(maiorIndice(numeros)) */

const inverteArray = (array) => {
    return array.reverse()
}

console.log(inverteArray(numeros))