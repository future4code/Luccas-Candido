type products = {
  nomePrato: string,
  custo: number,
  venda: number,
  ingredientes: string[]
}

// Produtos Adicionados
const allProducts:products[] = []

// Array de Vendas
const productsSold:products[] = []

const macarrao:products = {
  nomePrato: "Macarrão a Bolonhesa",
  custo: 15,
  venda: 25,
  ingredientes: ["Macarrão", "Molho de Tomate", "Carne Moída", "Cebola", "Alho", "Queijo Parmesão"]
}

const pizza:products = {
  nomePrato: "Pizza",
  custo: 12,
  venda: 23,
  ingredientes: ["Massa", "Queijo", "Tomate"]
}


// Adicionando produto no array.
const addProduct = (produto:products) => {
  allProducts.push(produto)
}

// Adicionando um suposto produto
addProduct(macarrao)
addProduct(pizza)

// Procurando o produto adicionado pelo preço.
const searchProductByPrice = (name?:string) => {

  allProducts.filter(item => {
    if(item.nomePrato === name) {
      return console.log(`O valor do ${item.nomePrato} é R$${item.venda}`)
    }
    console.log('Item não existe.')
  })
}

// console.log(searchProductByPrice("Macarrão a Bolonhesa"))

// Vender Prato.
const sellProduct = (prato:products) => {

  productsSold.push(prato)

  if(productsSold.length > 0) {
    console.log("==== PRODUTO VENDIDO COM SUCESSO ====")
  }


// For pra procurar o item igual ao parâmetro
  allProducts.forEach(item => {
    if(item.nomePrato === prato.nomePrato) {
      const indexItem = allProducts.indexOf(item)
      allProducts.splice(indexItem, 1)
      console.log("==== PRODUTO RETIRADO DA LISTA DE PRODUTOS ====")
    }
  })


}

sellProduct(macarrao)
console.log(allProducts)