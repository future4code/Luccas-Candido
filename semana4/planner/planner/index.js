function taskRemover() {
    const tasks = document.getElementsByTagName("li")
    for(let i = tasks.length -1; i >= 0; i-- ) {
        tasks[i].remove()
    }
}


function createTask(){
    const taskInput = document.getElementById("tarefa")
    let inputValue = taskInput.value
    let diasDaSemana = document.getElementById("dias-semana").value

    if(inputValue) {

        switch(diasDaSemana) {
            case "domingo":
                const domingo = document.getElementById("domingo")
                domingo.innerHTML += `<li class="tarefa-adicionada" onclick="risca(event)">${inputValue}</li>`
                taskInput.value = ""
                break
            
            case "segunda":
                const segunda = document.getElementById("segunda")
                segunda.innerHTML += `<li class="tarefa-adicionada" onclick="risca(event)">${inputValue}</li>`
                taskInput.value = ""
                break
            
            case "terca":
                const terca = document.getElementById("terca")
                terca.innerHTML += `<li class="tarefa-adicionada" onclick="risca(event)">${inputValue}</li>`
                taskInput.value = ""
                break
            
            case "quarta":
                const quarta = document.getElementById("quarta")
                quarta.innerHTML += `<li class="tarefa-adicionada" onclick="risca(event)">${inputValue}</li>`
                taskInput.value = ""
                break
            
            case "quinta":
                const quinta = document.getElementById("quinta")
                quinta.innerHTML += `<li class="tarefa-adicionada" onclick="risca(event)">${inputValue}</li>`
                taskInput.value = ""
                break
    
            case "sexta":
                const sexta = document.getElementById("sexta")
                sexta.innerHTML += `<li class="tarefa-adicionada" onclick="risca(event)">${inputValue}</li>`
                taskInput.value = ""
                break
            
            case "sabado":
                const sabado = document.getElementById("sabado")
                sabado.innerHTML += `<li class="tarefa-adicionada" onclick="risca(event)">${inputValue}</li>`
                taskInput.value = ""
                break
            
        }
    
    } else {
        alert('Insira um valor válido.')
    }

}   

function risca(event) {
    const tarefaClicada = event.target
    tarefaClicada.classList.toggle("tarefa-riscada")
}

