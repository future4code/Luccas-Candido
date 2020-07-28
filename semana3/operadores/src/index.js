// // 1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

//     // const bool1 = true 
//     // const bool2 = false
//     // const bool3 = !bool2

//     // let resultado = bool1 && bool2
//     // console.log("a. ", resultado) //false

//     // resultado = bool1 && bool2 && bool3
//     // console.log("b. ", resultado) //false
//     //             //true          //true
//     // resultado = !resultado && (bool1 || bool1)
//     // console.log("c. ", resultado) //true

//     // console.log("e. ", typeof resultado) //boolean


//     // 2.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

//     // let array
//     // console.log('a. ', array) //undefined
    
//     // array = null
//     // console.log('b. ', array) //null
    
//     // array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//     // console.log('c. ', array.length) //11
    
//     // let i = 0
//     // console.log('d. ', array[i]) //3
    
//     // array[i+1] = 19
//     // console.log('e. ', array) //[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] ou array[1] = 19;
    
//     // const valor = array[i+6]
//     // console.log('f. ', valor) //9

//     // **Exercícios de escrita de código**

// // 1. Faça um programa que:
// // a. Pergunte a idade do usuário

// const ageAsk = Number(prompt('Qual sua idade?'));
// console.log(ageAsk);

// // b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// const ageBf = Number(prompt('Qual a idade do seu melhor amigo?'));
// console.log(ageBf);

// // Dica: não se esqueça de converter as respostas para o tipo número

// // c. **Imprima na tela** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

// const comparacao = ageAsk > ageBf;

// console.log('Sua idade é maior que a do seu amigo?', comparacao);

// // //retorno até aqui 
// // 24
// // 21
// // Sua idade é maior que a do seu amigo? true


// // d. **Imprima na tela** a diferença de idade (não tem problema se sair um número negativo)

// console.log(ageAsk - ageBf);

// //retorno até aqui
// // 24
// // 22
// // Sua idade é maior que a do seu amigo? true
// // 2

// 2. Faça um programa que:
// a. Peça ao usuário que insira um número **par**.

// const leiaPar = Number(prompt('Insira um número par: '))

// b. Imprima na tela **o resto da divisão** desse número por 2.

// console.log(leiaPar % 2);

//     c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// R: Sim, o resto da divisão de numeros pares é 0 sempre.
//     d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// R: Se o usuário inserir um número impar, o resto não será 0.

// 3. Faça um programa, seguindo os passos:
// a. Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

// let listaDeTarefas = [];

// // b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// const askTask1 = prompt('Qual sua primeira tarefa?'); 
// const askTask2 = prompt('Qual sua segunda tarefa?');
// const askTask3 = prompt('Qual sua terceira tarefa?');

// listaDeTarefas.push(askTask1, askTask2, askTask3);

// // c. Imprima o array na tela

// console.log(listaDeTarefas);

// // d. Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

// const taskIndex = Number(prompt('Coloque o índice de uma tarefa que você já realizou (0, 1 ou 2): '));

// // e. Remova da lista o item de índice que o usuário escolheu.

// listaDeTarefas.splice(taskIndex, 1);

// // f. Imprima o array na tela

// console.log(listaDeTarefas);

// 4. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

//     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

// const askUser = prompt('Qual seu usuário?');
// const askEmail = prompt('Qual seu e-mail?');

// console.log(`O e-mail ${askEmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${askUser}`);

// ======= DESAFIO ===============

// 1. a


// let F = 77;
// const fToKelvin = (F - 32) * 5/9 + 273.15;

// console.log(fToKelvin,'K');

// 1. b

// let celsiusB = 80;
// const celsiusToFah = (celsiusB) * 9/5 + 32;

// console.log(celsiusToFah, 'F');

// 1. c

// let celsiusC = 30;
// const celsiusToFah = (celsiusC) * 9/5 + 32;
// const celsiusToK = celsiusC + 273.15


// console.log(celsiusToFah, celsiusToK);

// 1. d

// const userCelsius = Number(prompt('Insira o valor em Celsius que queira converter: '));

// const celsiusToFah = (userCelsius) * 9/5 + 32;
// const celsiusToK = userCelsius + 273.15;

// console.log(`O valor em Fahrenheit é ${celsiusToFah}F e o valor em Kelvin é ${celsiusToK}K`);

// Desafio 2 ===========

// a.

// const quilowattHora = 0.05;

// const calculoWatt = 280 * quilowattHora;

// console.log(`A residência gasta aproximadamente R$${calculoWatt} por hora.`);

// b.

// const valorDoDesconto = calculoWatt * 0.15;
// console.log(valorDoDesconto);

// const desconto = calculoWatt - valorDoDesconto;
// console.log(desconto);

// console.log(`Com desconto, a residência irá pagar R$${desconto} por hora.`)

// ==== DESAFIO 3 ====
// a.


valorEmLb = 20;
const lbToKg = valorEmLb *  0.453592;

console.log(`O valor da lb em Kg é ${lbToKg}Kg.`)

// b.

valorEmOz = 10.5;

const ozToKg = valorEmOz * 0.0283495;

console.log(`O valor de oz em Kg é ${ozToKg}Kg.`);

// c.

valorEmMi = 100;

const miToM = valorEmMi * 1609.34;

console.log(`O valor de milha em metros é ${miToM} metros.`);


// d.

valorEmFt = 50;

let ftToM = valorEmFt * 0.3048;

console.log(`O valor de pés em metros é ${ftToM} metros.`);

// e.

valorEmGal = 103.56;

const galToL = valorEmGal * 3.78541;

console.log(`O valor do galão em litros é ${galToL} litros.`);

// f.

// 1 litro = 4 xícaras
valorEmXic = 450;

const xicToL = valorEmXic / 4; 

console.log(`${valorEmXic} equivalem a ${xicToL} litros.`);

// g.

//  modificando o item d.

const valorEmFtChanged = Number(prompt('Insira o valor em Ft(pés): '));

ftToM = valorEmFtChanged * 0.3048;

console.log(`O valor de pés em metros é ${ftToM} metros.`);




