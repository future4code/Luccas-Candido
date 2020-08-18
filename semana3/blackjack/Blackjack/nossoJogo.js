/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// Primeiro Jogo!

console.log('Bem vindo ao jogo de BlackJack!')

if(confirm('Gostaria de começar a jogar?')) {

   const carta1 = comprarCarta(), 
   carta2 = comprarCarta(), 
   carta3 = comprarCarta(),
   carta4 = comprarCarta(),
   pontuacao1 = carta1.valor + carta2.valor,
   pontuacao2 = carta3.valor + carta4.valor

   console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${pontuacao1}.`)
   console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - pontuação ${pontuacao2}`)
   
   if(pontuacao1 === pontuacao2) {
      console.log('Empate!') 
   } else if(pontuacao2 > pontuacao1) {
      console.log('Computador Ganhou!')
   } else {
      console.log('O usuário ganhou!')
   }
} else {
   console.log('O jogo acabou.')
}