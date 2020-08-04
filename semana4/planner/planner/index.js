function createTask(){
    const taskInput = document.getElementById("tarefa")
    let inputValue = taskInput.value
    const diasDaSemana = document.getElementById("dias-semana").value
    // const mySelect = document.getElementsByTagName("option")[diasDaSemana].value


    switch(diasDaSemana) {
        case "domingo":
            const domingo = document.getElementById("domingo")
            domingo.innerHTML += `<li>${inputValue}</li>`
            taskInput.value = ""
            break
        
        case "segunda":
            const segunda = document.getElementById("segunda")
            segunda.innerHTML += `<li>${inputValue}</li>`
            taskInput.value = ""
            break
        
        case "terca":
            const terca = document.getElementById("terca")
            terca.innerHTML += `<li>${inputValue}</li>`
            taskInput.value = ""
            break
        
        case "quarta":
            const quarta = document.getElementById("quarta")
            quarta.innerHTML += `<li>${inputValue}</li>`
            taskInput.value = ""
            break
        
        case "quinta":
            const quinta = document.getElementById("quinta")
            quinta.innerHTML += `<li>${inputValue}</li>`
            taskInput.value = ""
            break

        case "sexta":
            const sexta = document.getElementById("sexta")
            sexta.innerHTML += `<li>${inputValue}</li>`
            taskInput.value = ""
            break
        
        case "sabado":
            const sabado = document.getElementById("sabado")
            sabado.innerHTML += `<li>${inputValue}</li>`
            taskInput.value = ""
            break
        
    }
}   