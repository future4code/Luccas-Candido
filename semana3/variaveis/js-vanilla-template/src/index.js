// Exercício 1

/* Primeiro console: 10. Segundo console: 10, 5 */

// Exercício 2

// c = 10, b=10, a=10

// 1. Construa um programa, seguindo os seguintes passos:

// a) Declare uma variável para armazenar um nome, sem atribuir valor.

let oNome;

// b) Declare uma variável para armazenar uma idade, sem atribuir valor.

let aIdade;

// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.

console.log(typeof(oNome, aIdade));

// d) Esse tipo foi impresso porque não foi atribuído nenhum valor a variável, logo: undefined.

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.


const leiaIdade = prompt('Qual sua idade?')
const leiaNome = prompt('Qual seu nome?')


// f) Para finalizar, imprima na tela a mensagem: "Olá nome, você tem idade anos". Onde nome e idade são os valores que o usuário inseriu.


console.log(`Olá ${leiaNome}, você tem ${leiaIdade} anos.`);

// 2. Faça um programa que faça 5 perguntas para o usuário. Imprima-as com as respostas no console.

const leiaEndereco = prompt('Qual seu endereço?');

console.log(leiaEndereco);

const leiaCor = prompt('Qual sua cor favorita?');
console.log(leiaCor);

const leiaComida = prompt('Qual sua comida favorita?');
console.log(leiaComida);


const leiaJogo = prompt('Qual seu jogo preferido?');
console.log(leiaJogo);

const leiaCurso = prompt('Você está gostando do curso da labenu?')
console.log(leiaCurso);

// 3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenando em uma variável.

let listaComidas = ['Sushi', 'Pizza', 'Hamburguer', 'Macarrão', 'Lasanha'];


// // a)
console.log(listaComidas);


// // b)
console.log('Essas são minhas comidas prefereidas: ', listaComidas);

// // c)

let comidaPreferida = prompt('Qual sua comida preferida?');

listaComidas[1] = comidaPreferida;
console.log(listaComidas);

// 4. Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável. 

let arrayPerguntas = ['Sua camiseta é branca?', 'Você gosta de pizza?', 'Você gosta de jogos eletrônicos?'];

let arrayRespostas = [false, true, true];

console.log(arrayPerguntas[0], arrayRespostas[0] ,'\n', arrayPerguntas[1], arrayRespostas[1], '\n' ,arrayPerguntas[2], arrayRespostas[2]);