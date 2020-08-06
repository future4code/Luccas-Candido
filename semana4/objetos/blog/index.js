const postArray = [] 


function botaoRealizarPost() {
    // Pegando os elementos
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const conteudo = document.getElementById("conteudo-post")
    const imgPost = document.getElementById("imagem-post")
    
    // Captando valor dos elementos
    const tituloValor = titulo.value
    const autorValor = autor.value
    const conteudoValor = conteudo.value
    const imgValor = imgPost.value

    // Objeto com infos do post
    const infosPost = {
        titulo: tituloValor,
        autor: autorValor,
        conteudo: conteudoValor,
        img: imgValor
    }

    // Armazenando o objeto de infos em um array de posts
    postArray.push(infosPost)
    // Armazenando os dados do meu array
    sessionStorage.postArray = JSON.stringify(postArray)

    // Limpando os campos
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    
}

// Função de dar enter para enviar o post.
function apertouEnter(event) {
    if(event.key === "Enter") {
        botaoRealizarPost()
    }
}
