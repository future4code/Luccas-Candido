type roupas = {nome: string, preço:number, categoria: string}[]

const produtos: roupas = [{
  nome: 'Cueca',
  preço: 20.5,
  categoria: 'Íntima'
},
{
  nome: 'Casaco de Lã',
  preço: 250,
  categoria: 'Inverno'
},
{
nome: 'Regata',
preço: 60,
categoria: 'Verão'
},
{
  nome: 'Roupão',
  preço: 80,
  categoria: 'Banho'
}
]

const descontao = (produtos:roupas) => {

  const newArray = [...produtos]
  const arrayDesconto = newArray.map(item => {
    switch(item.categoria) {
      case "Íntima":
        const descontoIntima = (item.preço * 7) / 100
        const valorTotal = item.preço - descontoIntima
        return {
          ...item,
          comDesconto: valorTotal
        }

        case "Verão":
        const descontoVerao = (item.preço * 5) / 100
        const valorTotalVerao = item.preço - descontoVerao
        return {
          ...item,
          comDesconto: valorTotalVerao
        }

        case "Inverno":
        const descontoInverno = (item.preço * 10) / 100
        const valorTotalInverno = item.preço - descontoInverno
        return {
          ...item,
          comDesconto: valorTotalInverno
        }

        case "Banho":
        const descontoBanho = (item.preço * 4) / 100
        const valorTotalBanho = item.preço - descontoBanho
        return {
          ...item,
          comDesconto: valorTotalBanho
        }
    }
  })

  return arrayDesconto
}

console.log(descontao(produtos))