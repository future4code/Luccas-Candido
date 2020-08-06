const arrayDespesas = []
const sectionDespesa = document.getElementById("sectionDespesas")

function cadastrarNoArray() {

    
    const despesa = document.getElementById("valor")
    const descricao = document.getElementById("descricao")
    const tipo = document.getElementById("despesas")

    const valorDespesa = despesa.value
    const valorDescricao = descricao.value
    let valorTipoDespesa = tipo.value

    if(valorDespesa  && valorDescricao) {
        
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
    
        const objetoDespesas = {
            valor: valorDespesa,
            descricao: valorDescricao,
            tipoDespesa: valorTipoDespesa
            
        }
        
        arrayDespesas.push(objetoDespesas)
        
        
        despesa.value = ""
        descricao.value = ""
        event.preventDefault()

    } else {
        alert('Insira um valor válido!')
    }

}



function cadastrarDespesa() {

    cadastrarNoArray()
    sectionDespesa.innerHTML = ""

    arrayDespesas.forEach((elemento) => {

        sectionDespesa.innerHTML += `<li>Valor: ${elemento.valor}</li>
        <li>Descrição: ${elemento.descricao}</li>
        <li>Tipo de Despesa: ${elemento.tipoDespesa}</li>`

    })
    
    arrayDespesas.forEach((elemento) => {
        const extrato = document.getElementById("extrato")
        let contador = 0
        extrato.innerHTML += `<p>${parseInt(contador + elemento.valor)}</p>`;
    })
}

function filtrarDespesa() {
    const valorMin = document.getElementById("valorMin").value
    const valorMax = document.getElementById("valorMax").value
    console.log(valorMax, valorMin)

    const filtroDeValores = arrayDespesas.filter((elemento) => {
        return Number(elemento.valor) >= valorMin && Number(elemento.valor )<= valorMax
    })
    
    sectionDespesa.innerHTML = ""
    filtroDeValores.forEach((elemento) => {
        sectionDespesa.innerHTML += `<li>Valor: ${elemento.valor}</li>
        <li>Descrição: ${elemento.descricao}</li>
        <li>Tipo de Despesa: ${elemento.tipoDespesa}</li>`
    })
    

    console.log(filtroDeValores)

    event.preventDefault()
}







