/* **Exercícios de interpretação de código**

EXERCÍCIO 1

O que o código abaixo está fazendo? Qual o resultado impresso no console?
 */

/* let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) */

/* R: O código está incrementando a variável valor de 1 em 1. No final, vai imprimir o valor final após realizar o loop, que será 4. */

// EXERCÍCIO 2

// Leia o código abaixo:


/* const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
        console.log(numero)
	}
} */

/* 
a. O que vai ser impresso no console? *

R: Vai ser impresso os numeros do array que forem maior que 18.
*/

/* 
b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso? 

R: Acredito que só podemos acessar um indice em específico com o for declarando o i.
*/

// DESAFIO 1

/* Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?  */

/* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))

let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

 */
// R: Será impresso 0, 00, 000, 0000. Enquanto a quantidade atual for menor que a entrada do usuário, será realizado um laço para inserção da linha. Esse laço verifica que enquanto a quantidade de asteriscos for menor que a quantidade atual, vai ser inserido um "0" na variável linha. A quantidade atual é incrementada apenas com um +1 porque ela é incrementada no final do while, e o valor acaba ficando igual ao do asterisco. Para o for rodar de maneira que funcione, é necessário colocar o +1, para a quantidade atual ser maior que o asterisco e o loop acontecer até o fim do while.


// ======== exercicio 3 ========
/* Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente. */

// a. Escreva um programa que:

/* - **Imprima** cada um dos valores do array original. */

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55] //deixar ativado

// ===========================
/* for (let num of array) {
    console.log(num)
} */
// ===========================

/* b. Escreva um programa que:

- **Imprima** cada um dos valores do array original divididos por 10
 */


// ============================
/* for (let num of array) {
    console.log(num / 10)
} */
// ============================

/* c. Escreva um programa que:

- **Crie** um novo array contendo, somente, os números pares do array original.
- **Imprima** esse novo array */

// ===============================
/* const novoArray = []

for(let num of array) {
    if(num % 2 === 0) {
        novoArray.push(num)
    }
}

console.log(novoArray) */
// ==================================

/* d. Escreva um programa que:

- **Crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`"
- **Imprima** este novo array */

// ================================================================
/* const novoArray = []
for(let i = 0; i < array.length; i++) {
    novoArray.push(`O elemento do index ${i} é ${array[i]}.`)
}

console.log(novoArray) */
// =================================================================


// e. Escreva um programa que imprima no console o maior e o menor números contidos no array original

// =================================================
/* let valorMaximo = 0;
let valorMinimo = array[0]
for(let num of array) {
    if(num > valorMaximo) {
        valorMaximo = num
    } else if(num < valorMinimo) {
        valorMinimo = num
    }
}

console.log(`O maior número é ${valorMaximo} e o menor número é ${valorMinimo}.`) */
// ================================================================================

// ========= DESAFIO 2 ============
// CODIGO ABAIXO =============================

// Entrada do Usuário.
/* let numberChoice = Number(prompt('Player1: Insira o número que você quer que se eu adversário advinhe: '));

// Início.
console.log('Vamos jogar!')


let contador = 0; // Contador
while(numberChoice) {               // Enquanto o número escolhido não for advinhado.
    let tryNumber = Number(prompt('Chute um número: ')) 
    contador += 1                   //Acrescentando 1 para o contador a cada tentativa.
    console.log(`O número chutado foi ${tryNumber}`)
    if(tryNumber === numberChoice) {                //Se o número for igual ao número escolhido.
        console.log('Acertou!!! Parabéns.')
        console.log(`O número de tentativas foram ${contador}.`)
        numberChoice = false;                   //Desliga o jogo.
    } else if (tryNumber > numberChoice) {              //Se for Maior
        console.log('Errou! O número escolhido é menor!')
    } else {
        console.log('Errou! O número escolhido é maior!')               //Se for menor
    }
}
 */

// ========= DESAFIO 3 ============

// Entrada do Usuário.
let numberRandom = Math.floor((Math.random() *100) + 1)

// Início.
console.log('Vamos jogar!')


let contador = 0; // Contador
while(numberRandom) {               // Enquanto o número escolhido não for advinhado.
    let tryNumber = Number(prompt('Chute um número: ')) 
    contador += 1                   //Acrescentando 1 para o contador a cada tentativa.
    console.log(`O número chutado foi ${tryNumber}`)
    if(tryNumber === numberRandom) {                //Se o número for igual ao número escolhido.
        console.log('Acertou!!! Parabéns.')
        console.log(`O número de tentativas foram ${contador}.`)
        numberRandom = false;                   //Desliga o jogo.
    } else if (tryNumber > numberRandom) {              //Se for Maior
        console.log('Errou! O número escolhido é menor!')
    } else {
        console.log('Errou! O número escolhido é maior!')               //Se for menor
    }
}


/* Reflexão: A alteração foi bem simples, só trocar a entrada de usuário pela função de random.
Acho que meu código poderia ter ficado menor, utilizando o for, mas não sabia uma maneira de integrar o contador usando o for. Então preferi criar um e ir incrementando. Também acredito que a maneira como 'desliguei' o jogo poderia ser diferente, mas foi a maneira que consegui resolver =(.  */