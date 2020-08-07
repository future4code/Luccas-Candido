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

// ---------- FUNÇÕES -----------

// 1. Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o segundo menor número. Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.)

/* const arrayNumeros = [20, 5, 7, 24, 30, 22, 10, 80, 75, 88, 98, 15]

function segundoMaior(array) {

    let maior = array[0]
    let menor = array[0]
    let maiorSegundo;

    // Meu deus não sei o que fiz mas deu certo. Utilizei
    // dois métodos pra dar uma variada :D

    array.forEach((elemento, index) => {

        if(elemento < menor) {
            menor = elemento
        }

        array.splice(menor[index], 1)
        
    })

    for(let i = 0; i < array.length; i++) {

        if(array[i] > maior) {
            maior = array[i]
            array.splice(maior[i], 1)
            maiorSegundo = maior
        }

    }

    console.log(`O segundo maior número do array é ${maiorSegundo}`)
    console.log(`O segundo menor número do array é ${menor}`)


}

segundoMaior(arrayNumeros) */



/* const naoNomeada = () => {
    alert("Hello Future4")
}

function alertaNaTela() {
    naoNomeada()
}

alertaNaTela()

 */

//  1. Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos.

/* Podemos utilizar os arrays para armazenar objetos com propriedades e valores diferentes, facilitando acessos aos elementos que precisamos manipular.  */


/* 2. Crie uma função chamada criaRetangulo que recebe como parâmetros dois lados (lado1 e lado2) e retorna um objeto com 4 informações: largura (lado1), altura (lado2), perímetro (2 * (lado1 + lado2)) e área (lado1 * lado2). */


/* function criaRetangulo(lado1, lado2) {

    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: lado1 * lado2
    }

    return retangulo
}


 */

 /* 3. Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes). Imprima na tela a seguinte string, baseada nos valores do objeto:
`Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n`. A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.*/


/* const filmeFavorito = {
    titulo: 'Clube da Luta',
    ano: 1999,
    diretor: 'David Fincher',
    atores: ['Brad Pitt', ' Edward Norton']

}


console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores}`) */

/* // 4.3. Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes). Imprima na tela a seguinte string, baseada nos valores do objeto:
`Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n`. A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.
 */

/*  const pessoaQualquer = {
     nome: 'Luccas',
     idade: 24,
     email: 'xxx@gmail.com',
     endereco: 'Rua tal, numero tal'
 }

function anonimizarPessoa() {
    return pessoa2 = {
    ...pessoaQualquer,
    nome: 'ANONIMO'
    }

    
}

console.log(anonimizarPessoa()) */


// ---------- FUNÇÕES DE ARRAY -----------

/* const array = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
] */

// a)
/* 
const idade = array.filter((elemento) => {
    return elemento.idade >= 20
})
// b)
const menorIdade = array.filter((elemento) => {
    return elemento.idade < 20
})

 */

//  2

const exemploArray = [1, 2, 3, 4, 5, 6]

/* function multiplicados(array) {

    const arrayNovo = array.map((elemento) => {
        return elemento * 2
    })

    return arrayNovo
}


console.log(multiplicados(exemploArray))
 */


//  b)

/* function multiplicados(array) {

    const arrayNovo = array.map((elemento) => {
        return elemento * 3
    })

    return arrayNovo

}

console.log(multiplicados(exemploArray)) */

// c

/* function parOuImpar(array) {

    const arrayNovo = array.map((elemento) => {
        if(elemento % 2 === 0) {
            return `O número ${elemento} é par!`
        } 

        if(elemento % 2 !== 0) {
            return `O número ${elemento} é impar!`
        }
    })

    return arrayNovo

}

console.log(parOuImpar(exemploArray))

 */

//  3