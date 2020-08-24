import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'
import logo from './'

const HeaderStyle = styled.header`
background: #964F8D;
width: 100%;
height: 8vh;
display: flex;
justify-content: center;
align-items: center;
`

const HeaderTitle = styled.p`
color: white;
font-size: 12px;
`

const FooterStyle = styled.footer`
background: #784071;
width: 100%;
height: 5vh;
display: flex;
justify-content: center;
align-items: center;
`

const InputStyle = styled.input`
  background-color: #F1F1F3;
  -webkit-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
  box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
  border: none;
  width: 300px;
  height: 35px;
  margin-top: 30px;
  outline: none;`

const TitleHeader = styled.h1`
font-size: 2rem;
color: white;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-align: center;
`

  

const ButtonStyle = styled.button`
    background-color: #964F8D;
    margin: 20px 0;
    text-decoration: none;
    border: none;
    border-radius: 10px;
    padding: 10px 30px;
    color: white;
    font-size: 12px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: bold;
    -webkit-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
    box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);`

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
        <HeaderStyle><TitleHeader>InstaReact</TitleHeader></HeaderStyle>
        <InputStyle
        value={this.state.valorInputUser}
        onChange={this.onChangeInputUser}
        placeholder={"Insira o nome de usuário"}
        />
        <InputStyle
        value={this.state.valorInputUserPhoto}
        onChange={this.onChangeInputUserPhoto}
        placeholder={"Insira o link da sua foto de usuário"}
        />
        <InputStyle
        value={this.state.valorInputPostPhoto}
        onChange={this.onChangeInputPostPhoto}
        placeholder={"Insira o link da foto do seu post"}
        />
        <ButtonStyle onClick={this.adicionaPost}>Adicionar Post</ButtonStyle>
        <div>{listaPost}</div>
        <FooterStyle><HeaderTitle>Esse projeto foi criado com React utilizando Styled Components, no bootcamp da Labenu!</HeaderTitle></FooterStyle>
      </div>
    );
  }
}

export default App;
