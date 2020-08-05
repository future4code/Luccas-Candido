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

    // Inserindo o post no html.
    const container = document.getElementById("container-de-posts")
    
    container.innerHTML += `<h1>${infosPost.titulo}</h1><br><p>${infosPost.conteudo}</p><br><p class="autorPost">Autor do post: ${infosPost.autor}</p>
    <p><img src=${infosPost.img}></p>`

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
