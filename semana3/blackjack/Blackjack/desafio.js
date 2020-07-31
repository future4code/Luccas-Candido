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

console.log('Bem vindo ao jogo de BlackJack!')

if(confirm('Gostaria de começar a jogar?')) {

   const buyCardsUser = [comprarCarta(), comprarCarta()],
   buyCardsPC = [comprarCarta(), comprarCarta()]

   let pontuacao1 = 0

   // Condição para Double A's
   if(buyCardsUser[0].texto === "A" && buyCardsUser[1].texto === "A") {
      console.log('Embaralhando as cartas do usuário...')
      buyCardsUser[0]
      buyCardsUser[1]
   } else if (buyCardsPC[0].texto === "A" && buyCardsPC[1].texto === "A") {
      console.log('Embaralhando as cartas do PC...')
      buyCardsPC[0]
      buyCardsPC[1]
   }

   let comprarMaisUma = confirm(`Suas cartas são ${buyCardsUser[0].texto} ${buyCardsUser[1].texto}. A carta revelada do computador é ${buyCardsPC[0].texto}. \nDeseja comprar mais uma carta?`)
   
   while(comprarMaisUma) {


      const comprarUma = comprarCarta()
      buyCardsUser.push(comprarUma)

      pontuacao1 = 0
      for(let valor of buyCardsUser) 
         pontuacao1 += valor.valor
      

      if (pontuacao1 < 21) {

         let cartasAtual = ""
         for(let carta of buyCardsUser) 
            cartasAtual += carta.texto;
         
         comprarMaisUma = confirm(`Suas cartas são ${cartasAtual}. A carta revelada do PC é ${buyCardsPC[0].texto}. Deseja comprar mais uma carta?`)

      } else {
         break
      }
   }

   pontuacao1 = 0
   for(let valor of buyCardsUser) {
      pontuacao1 += valor.valor;
   }

   let pontuacao2 = 0

   for(let valor of buyCardsPC) {
      pontuacao2 += valor.valor
   }

   let pontuacoes = pontuacao1 <= 21 && pontuacao2 <= 21

   while(pontuacoes) {

      const comprarCartaPC = comprarCarta()

      buyCardsPC.push(comprarCartaPC)

      pontuacao2 = 0

      for (let valor of buyCardsPC) {
         pontuacao2 += valor.valor
      }

      if(pontuacao2 === pontuacao1 || pontuacao2 > pontuacao1) {
         break;
      }

   }
   let resultado = ""

   if(pontuacao1 > 21) {
      resultado = 'O computador ganhou!'

   } else if(pontuacao2 > 21) {
      resultado = 'O usuário ganhou!'
   } else if(pontuacao1 > pontuacao2) {
      resultado = 'O usuário ganhou!'
   } else if(pontuacao2 > pontuacao1) {
      resultado = 'O computador ganhou'
   } else {
      resultado = 'Empate!'
   }

   let cartasAtualUser = ""
   let cartasAtualPC = ""

   for(let carta of buyCardsUser) {
      cartasAtualUser += carta.texto
   }

   for(let carta of buyCardsPC) {
      cartasAtualPC += carta.texto
   }

   alert(`Suas cartas são ${cartasAtualUser}. Sua pontuação é ${pontuacao1}. As cartas do computador são ${cartasAtualPC}. A pontuação do computador é ${pontuacao2}. \n O resultado: ${resultado} `)


   

} else {
   console.log('O jogo acabou.')
}