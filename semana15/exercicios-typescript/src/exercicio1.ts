console.log('Hello World')


// a)
// let minhaString:string = 2 // Vai dar erro falando que a variável não é um número.

// b)
// let meuNumero:number | string = "Olá"

// c)
// let pessoa: {nome: string, idade: number, corFavorita: string} = {
//     nome: "Luccas",
//     idade: 25,
//     corFavorita: "preto"
// }

// d/e)

enum CORES_DO_ARCO_IRIS {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type pessoa = {nome: string, idade: number, corFavorita: CORES_DO_ARCO_IRIS}

const luccas: pessoa = {
    nome: 'Luccas',
    idade: 25,
    corFavorita: CORES_DO_ARCO_IRIS.VERMELHO
}

const bruno: pessoa = {
    nome: 'Bruno',
    idade: 32,
    corFavorita: CORES_DO_ARCO_IRIS.ANIL
}

const thalita: pessoa = {
    nome: 'Thalita',
    idade: 40,
    corFavorita: CORES_DO_ARCO_IRIS.AZUL
}

