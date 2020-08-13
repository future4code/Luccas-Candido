import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import logo from './'

class App extends React.Component {

  state = {
    posts: [{
          nomeUsuario: 'luccao',
          fotoUsuario:'https://picsum.photos/50/50',
          fotoPost: 'https://picsum.photos/50/50'
    },
    {
          nomeUsuario: 'ana',
          fotoUsuario:'https://picsum.photos/200/300',
          fotoPost: 'https://picsum.photos/id/1/200/150'
    },
    {
          nomeUsuario: 'julia',
          fotoUsuario:'https://picsum.photos/id/2/200/1500',
          fotoPost: 'https://picsum.photos/id/2/200/150'
    }
  ],
    valorInputUser: "",
    valorInputUserPhoto: "",
    valorInputPostPhoto: ""
  }

  onChangeInputUser = (event) => {
    this.setState({valorInputUser: event.target.value})
  }

  onChangeInputUserPhoto = (event) => {
    this.setState({valorInputUserPhoto: event.target.value})
  }

  onChangeInputPostPhoto = (event) => {
    this.setState({valorInputPostPhoto: event.target.value})
  }


  adicionaPost = () => {


    const novoPost = {
      nomeUsuario: this.state.valorInputUser,
      fotoUsuario: this.state.valorInputUserPhoto,
      fotoPost: this.state.valorInputPostPhoto
    }

    const novoArrayPost = [novoPost,...this.state.posts]

    this.setState({
      posts: novoArrayPost,
      valorInputUser: "",
      valorInputUserPhoto: "",
      valorInputPostPhoto: ""

    })
  }


  render() {

    const listaPost = this.state.posts.map((post) => {
      
      console.log(post)
      return(

      <div>
        <Post 
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        />
      </div>
      )

    })
    return (
      <div className={'app-container'}>
        <input
        value={this.state.valorInputUser}
        onChange={this.onChangeInputUser}
        placeholder={"Insira o nome de usuário"}
        />
        <input
        value={this.state.valorInputUserPhoto}
        onChange={this.onChangeInputUserPhoto}
        placeholder={"Insira o link da sua foto de usuário"}
        />
        <input
        value={this.state.valorInputPostPhoto}
        onChange={this.onChangeInputPostPhoto}
        placeholder={"Insira o link da foto do seu post"}
        />
        <button onClick={this.adicionaPost}>Adicionar Post</button>
        <div>{listaPost}</div>

      </div>
    );
  }
}

export default App;
