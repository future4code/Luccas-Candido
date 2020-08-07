// ---------- INTERPRETAÇÃO DE CÓDIGO -----------

// 1.

/* Foi criado uma função que converte dolar em real de acordo com a entrada do usuário da cotação do dolar atual.
No console é impresso o valor de 100 * a cotação que o usuário inserir.
*/

// 2.

/* O primeiro console imprime o valor do investimento em ações que é multiplicado por 1.1 e o segundo montando vai dar o tipo de investimento informado incorreto,
já que no switch não existe esse parâmetro.  */

// 3.

/* O primeiro console vai retornar o total de número do array numeros. 
O segundo console retorna o tamanho do array1 que só contem números pares.
O terceiro console retorna o tamanho do array2 que só contém números ímpares.*/

// 4.

/* O primeiro if do laço vai retornar o menor número do array.
No outro bloco, se o número de número for maior que 0, logo o número2 recebe este valor. O primeiro console retorna o menor número, o segundo retorna o maior número do array, 1590. */

// ---------- LÓGICA DE PROGRAMAÇÃO -----------

// 1. Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.

// Podemos utilizar for, o for of e o forEach.

/* const arrayEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arrayEx.forEach((elemento) => {
    console.log(elemento)
})
 */

//  2. 

// 1bol = true, 2bol = false, 3bol = true, 4bol = false -> Só pra eu me achar

/* a) false
b) false 
c)  true
d) true 
e) true */

// 3.

/* const quantidadeDeNumerosPares
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
} */


// O código não funciona porque o quantidadeDeNumerosPares não tem valor pra condição funcionar. O i também não tá sendo incrementado para a condição ser realizada.
// Reformulando:

/* const quantidadeDeNumerosPares = 5

let i = 0
while(i < quantidadeDeNumerosPares) {
    console.log(i * 2)
    i++
} */

// 4.

/* 
function ladosTriangulo(a, b, c) {
    if(a === b && b === c) {
        console.log('Triangulo Equilátero')
    } else if (a == b || a == c || c == b) {
        console.log('Triângulo Isósceles')
    } else {
        console.log('Triângulo Escaleno')
    }
} */

/*5.  Faça um programa que, dados dois números

i. indique qual é o maior,

ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e

iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre) */

/* function doisNumeros(num1, num2) {

    let maior = 0
    let menor = 0

    if(num1 > num2) {
        maior = num1
        menor = num2
        console.log(`O maior número é ${num1}`)
    } else if(num2 > num1) {
        console.log(`O maior número é ${num2}`)
        maior = num2
        menor = num1

    }
     else {
         console.log('Os numeros são iguais!')
    }

    if(num1 % num2 === 0) {
        console.log(`${num1} é divisível por ${num2}`)
    } else if(num2 % num1 === 0) {
        console.log(`${num2} é divisível por ${num1}`)
    } 
    
    if(num1 % num2 !== 0) {
        console.log(`${num1} não é divisível por ${num2}`)
    } 
    
    if(num2 % num1 !== 0) {
        console.log(`${num2} não é divisível por ${num1}`)

    }
    

    const dif = (maior - menor)
    console.log(`A diferença entre eles é ${dif}`)
    

}

console.log(doisNumeros(5, 10)) */