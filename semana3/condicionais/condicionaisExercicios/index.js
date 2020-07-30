// EXERCÍCIO 1

// Leia o código abaixo:


/* const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
 */

/* Explique o que o código faz. Qual o teste que ele realiza?.
 Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos de números a mensagem é "Não passou no teste"? 

 R: Ele verifica se o número é par ou ímpar. Se for par, passa no teste. Se for ímpar, não passa. A const numero converte a resposta do usuário em um tipo Número para fazer a operação, já que o prompt recebe uma string.
 
 */

// EXERCÍCIO 2

/* O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo: */

/* let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}

console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) */

/* 
a. Para que serve o código acima? 
R: O código acima serve para nos retornar o preço da fruta escolhida.

*/

/* b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? 

R: Se o valor for Maçã, irá imprimir o nome da fruta e o seu valor.

*/

/* c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? 

R: Se não houvesse o BREAK, o código iria executar, além do bloco de Pera, o default, dando o valor do default de 5.

*/

// EXERCÍCIO 3

// Leia o código abaixo:

/* const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
 */

/* a. O que a primeira linha está fazendo? 

R: A primeira linha está recebendo um dado do usuário e convertendo em número.

*/

/* b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
 
R: Se o usuário digitar o número 10, retornará a mensagem no console "Esse número passou no teste". A mensagem de fora do console não engloba o escopo da variável dentro do if. Isso porque o let declara variáveis locais e não será interpretada fora do seu escopo.

Se for digitado -10, o programa irá bugar, devido a variável mensagem não estar declarada.

*/


/* c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

R: Sim, o console dirá que a variável não foi declarada, já que a variável mensagem está dentro do escopo do if. 

 */

// **Exercícios de escrita de código**

// EXERCÍCIO 4

/* Vamos criar programas que lidem com entradas do usuário! Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade). */

/* 1. Faça um `prompt` para receber a idade do usuário e guarde em uma variável. */ 
/* 2. Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso. */

// const userAge = Number(prompt('Insira sua idade: '))


/* 3. Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
 */

/* if(userAge >= 18) {
    console.log('Está pronto para dirigir!')
} else {
    console.log('Você ainda não pode dirigir.')
} */

// EXERCÍCIO 5

/* Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else` */


/* const turnoAluno = prompt('Qual seu turno de estudo? Digite "M" para Matutino, "V" para Vespertino ou "N" para Noturno: ').toUpperCase()
 */
/* switch(turnoAluno){
    case 'M':
        console.log('Bom dia!')
        break
    
    case 'V':
        console.log('Boa tarde!')
        break

    case 'N':
        console.log('Boa noite!')
        break
    default:
        console.log('Insira um valor válido.')
        break
}
  */

// EXERCÍCIO 6

/* Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora. */

/* if(turnoAluno === 'M') {
    console.log('Bom dia!')
} else if(turnoAluno === 'V') {
    console.log('Boa tarde!')
} else if(turnoAluno === 'N') {
    console.log('Boa noite!')
} else {
    console.log('Insira um valor válido!')
}

 */

// EXERCÍCIO 7

/* Considere a situação: você vai no cinema com um amigo ou amiga, porém ele/ela só assiste filme do gênero fantasia ****e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :(" */

/* const perguntaGenero = prompt('Qual gênero de filme você assiste?').toLowerCase()

const perguntaPreco = Number(prompt('Qual preço você consegue pagar?')) */

/* if(perguntaGenero === 'fantasia' && perguntaPreco < 15){
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme!')
} */

// =========== DESAFIO ============


// 1

/* if(perguntaGenero === 'fantasia' && perguntaPreco < 15){
    let qualSnack = prompt('Qual snack gostaria de comer durante o filme?')
    console.log(`Bom filme! Aproveite seu ${qualSnack}!`)
} else {
    console.log('Escolha outro filme!')
}
 */

//  2

const nomeCompleto = prompt('Insira seu nome completo: ')
let tipoDeJogo = prompt('Insira o tipo de jogo (IN = Internacional / DO = Doméstico: ').toUpperCase()
let etapaDoJogo = prompt('Qual a etapa do jogo? (SF = Semi-final / DT = Decisão de terceiro lugar / FI = final): ').toUpperCase()
const categoria = Number(prompt('Insira a categoria: (1, 2, 3 ou 4) '))

const quantidadeIngresso = Number(prompt('Quantos ingressos serão? '))

// Jogo Semi-Final
let categoria1SF = 1320;
let categoria2SF = 880;
let categoria3SF = 550;
let categoria4SF = 220;

// Jogo Terceiro Lugar
let categoria1DT = 660;
let categoria2DT = 440;
let categoria3DT = 330;
let categoria4DT = 170;

// Jogo Final
let categoria1FI = 1980;
let categoria2FI = 1320;
let categoria3FI = 880;
let categoria4FI = 330;

let preco;

// Doméstico
if(tipoDeJogo === 'DO') {
    tipoDeJogo = 'Doméstico'
    // Laço pra Semi-Final
    if(etapaDoJogo === 'SF') {
        etapaDoJogo = 'Semi-Final'
        if(categoria === 1) {
            preco = categoria1SF
        } else if(categoria === 2){
            preco = categoria2SF
        } else if (categoria === 3) {
            preco = categoria3SF
        } else if (categoria === 4) {
            preco = categoria4SF
        } else {
            console.log('Inseriu o dado incorreto.')
        }
    }
    // Laço para Terceiro Lugar
    else if(etapaDoJogo == 'DT') {
        etapaDoJogo = 'Disputa de Terceiro Lugar'
        if(categoria === 1) {
            preco = categoria1DT
        } else if(categoria === 2){
            preco = categoria2DT
        } else if (categoria === 3) {
            preco = categoria3DT
        } else if (categoria === 4) {
            preco = categoria4DT
        } else {
            console.log('Inseriu o dado incorreto.')
        }
    } 
    // Laço para Final
    else if(etapaDoJogo == 'FI') {
        etapaDoJogo = 'Final'
        if(categoria === 1) {
            preco = categoria1FI
        } else if(categoria === 2){
            preco = categoria2FI
        } else if (categoria === 3) {
            preco = categoria3FI
        } else if (categoria === 4) {
            preco = categoria4FI
        } else {
            console.log('Inseriu o dado incorreto.')
        }
    } else {
        console.log('Inseriu o dado incorreto.')
    }
    // Saída do jogo nacional
    console.log(`
    ---- DADOS DA COMPRA ---- \n
    Nome do Cliente: ${nomeCompleto} \n
    Tipo de Jogo: ${tipoDeJogo} \n
    Etapa do Jogo: ${etapaDoJogo} \n
    Categoria: ${categoria} \n
    Quantidade de Ingressos: ${quantidadeIngresso} ingressos. \n
    ---- VALOR ---- \n
    Valor do Ingresso: R$${preco} \n
    Valor Total: R$${Math.round(preco * quantidadeIngresso)}`)
    
}

// Jogo Internacional
else if (tipoDeJogo === 'IN') {
    tipoDeJogo = 'Internacional'
    // Laço pra Semi-Final
    if(etapaDoJogo === 'SF') {
        etapaDoJogo = 'Semi-Finals'
        if(categoria === 1) {
            preco = Math.round(categoria1SF / 4.10)
        } else if(categoria === 2){
            preco = Math.round(categoria2SF / 4.10)
        } else if (categoria === 3) {
            preco = Math.round(categoria3SF / 4.10)
        } else if (categoria === 4) {
            preco = Math.round(categoria4SF / 4.10)
        } else {
            console.log('Inseriu o dado incorreto.')
        }
    }
    // Laço para Terceiro Lugar
    else if(etapaDoJogo == 'DT') {
        etapaDoJogo = 'Third Place Competing'
        if(categoria === 1) {
            preco = Math.round(categoria1DT / 4.10)
        } else if(categoria === 2){
            preco = Math.round(categoria2DT / 4.10)
        } else if (categoria === 3) {
            preco = Math.round(categoria3DT / 4.10)
        } else if (categoria === 4) {
            preco = Math.round(categoria4DT / 4.10)
        } else {
            console.log('Inseriu o dado incorreto.')
        }
    } 
    // Laço para Final
    else if(etapaDoJogo == 'FI') {
        etapaDoJogo = 'Finals'
        if(categoria === 1) {
            preco = Math.round(categoria1FI / 4.10)
        } else if(categoria === 2){
            preco = Math.round(categoria2FI / 4.10)
        } else if (categoria === 3) {
            preco = Math.round(categoria3FI / 4.10)
        } else if (categoria === 4) {
            preco = Math.round(categoria4FI / 4.10)
        } else {
            console.log('Inseriu o dado incorreto.')
        }
    }   

    else {
        console.log('Inseriu o dado incorreto.')
    }

    // Saída jogo internacional.
    console.log(`
    ---- PURCHASE INFO ---- \n
    Client Name: ${nomeCompleto} \n
    Game Type: ${tipoDeJogo} \n
    Game Stage: ${etapaDoJogo} \n
    Category: ${categoria} \n
    Ticket Amount: ${quantidadeIngresso} tickets. \n
    ---- PRICE ---- \n
    Ticket Price U$${preco} \n
    Total Price: U$${Math.round(preco * quantidadeIngresso)}`)
} 

else {
    console.log('Inseriu o dado incorreto.')
}

// Funcionou de primeira, nem acreditei! Sei que existem outras maneiras de fazer, mas como a ideia era utilizar o que aprendemos, utilizei só if/else e deu certo! xD
