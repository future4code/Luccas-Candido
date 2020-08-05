const postArray = []

function botaoRealizarPost() {
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const conteudo = document.getElementById("conteudo-post")
    
    const tituloValor = titulo.value
    const autorValor = autor.value
    const conteudoValor = conteudo.value

    const infosPost = {
        titulo: tituloValor,
        autor: autorValor,
        conteudo: conteudoValor
    }
    
    postArray.push(infosPost)

    const container = document.getElementById("container-de-posts")
    container.innerHTML += `<h1>${infosPost.titulo}</h1><br><p>${infosPost.conteudo}</p><br><p class="autorPost">Autor do post: ${infosPost.autor}</p>`
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    
}


function apertouEnter(event) {
    if(event.key === "Enter") {
        botaoRealizarPost()
    }
}


