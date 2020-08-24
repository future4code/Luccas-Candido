// Pegando os dados armazenados do meu array temporariamente.
const posts = JSON.parse(sessionStorage.postArray)
// Pegando meu container
const postContainer = document.getElementById("container-de-posts")

// Iterando sobre meu novo array posts que está salvo com as infos.
for(post of posts) {

    // Pra cada post, postando na section de posts!
    postContainer.innerHTML += `<h1>${post.titulo}</h1>`
    postContainer.innerHTML += `<p>${post.conteudo}</h1>`
    postContainer.innerHTML += `<p class="autorPost">${post.autor}</p>`
    postContainer.innerHTML += `<img src=${post.img}>`
}