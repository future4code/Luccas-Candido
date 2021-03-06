// Array que armazena os objetos de despesas.
const arrayDespesas = []
// Utilizando DOM pra pegar o container.
const sectionDespesa = document.getElementById("sectionDespesas")
const sectionFiltros = document.getElementById("sectionFiltros")


// Função que salva os dados dos objetos no Array.
function cadastrarNoArray() {

    // Utilizando o DOM pra captar o valor dos inputs da primeira sessão;.
    const despesa = document.getElementById("valor")
    const descricao = document.getElementById("descricao")
    const tipo = document.getElementById("despesas")

    // Armazenando os valores dos inputs em uma variável.
    const valorDespesa = despesa.value
    const valorDescricao = descricao.value
    let valorTipoDespesa = tipo.value

    // Condição true se os campos estiverem preenchidos.
    if(valorDespesa  && valorDescricao) {
        
        // Switch pra lista retornar com a string correta durante a escolha do tipo de despesa.
        switch(valorTipoDespesa) {
            
            case "despesaCasa": {
                valorTipoDespesa = "Despesa de Casa"
                break
            }
    
            case "despesaAlimentacao": {
                valorTipoDespesa = "Despesa de Alimentação"
                break
            }
    
            case "despesaTransporte": {
                valorTipoDespesa = "Despesa de Transporte"
                break
            }
        }

        
        // Objeto armazenando os valores do input.
        const objetoDespesas = {
            valor: valorDespesa,
            descricao: valorDescricao,
            tipoDespesa: valorTipoDespesa
            
        }
        
        // Colocando o objeto no array.
        arrayDespesas.push(objetoDespesas)
        

        // Limpando os inputs
        despesa.value = ""
        descricao.value = ""
        event.preventDefault()

    } else {
        alert('Insira um valor válido!')
    }

}


// Função pra cadastrar a despesa.
function cadastrarDespesa() {

    // Chamando os valores das despesas já cadastrados.
    cadastrarNoArray()

    // Limpando o html para não repetir os valores do array quando executado o forEach.
    sectionDespesa.innerHTML = ""

    // Laço para percorrer o array com os dados do objeto e jogar na tela os valores.
    arrayDespesas.forEach((elemento) => {

        sectionDespesa.innerHTML += `<li>Valor: ${elemento.valor}</li>
        <li>Descrição: ${elemento.descricao}</li>
        <li>Tipo de Despesa: ${elemento.tipoDespesa}</li>`

    })
    


    // Declarando variável para realizar a soma dos valores.
    let soma = 0


    // Laço que percorre o array de objetos e me retorna apenas o valor da despesa, executando uma soma.
    arrayDespesas.forEach((elemento) => {

        // Pegando o parágrafo
        const paragrafoExtrato = document.getElementById("paragrafoExtrato")

        // Fazendo a soma dos valores.
        soma += Number(elemento.valor)

        paragrafoExtrato.innerHTML = `R$${soma}`
    })    

}

// Função de filtrar despesas.
function filtrarDespesa() {

    // Pegando os valores dos elementos com DOM no input valorMax e valorMin
    const valorMin = document.getElementById("valorMin").value
    const valorMax = document.getElementById("valorMax").value

    // Filtrando as minhas despesas no arrayDespesas e criando um novo array com a condição que eu dou no input.
    // Retornando a condição, se o valor for maior ou igual ao valor minimo e menor ou igual ao valor máximo.
    const filtroDeValores = arrayDespesas.filter((elemento) => {
        return Number(elemento.valor) >= valorMin && Number(elemento.valor )<= valorMax
    })
    
    // Limpando o html para aparecer só os filtrados.
    sectionDespesa.innerHTML = ""

    // Jogando na tela os valores filtrados.
    filtroDeValores.forEach((elemento) => {
        sectionFiltros.innerHTML += `<li>Valor: ${elemento.valor}</li>
        <li>Descrição: ${elemento.descricao}</li>
        <li>Tipo de Despesa: ${elemento.tipoDespesa}</li>`
    })
    

    event.preventDefault()
}


function limparFiltros() {
    sectionFiltros.innerHTML = ""
    event.preventDefault()

}







