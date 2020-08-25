import React from 'react';
import './App.css';
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
display: flex;
align-content: center;
justify-content: center;
`

const ContainerLogin = styled.div`
display: flex;
flex-direction: column;
width: 30vw;
border: 1px solid black;
align-items: center;
padding: 16px;
margin-top: 30vh;
`

const LabelDiv = styled.div`
display: flex;
justify-content: center;
margin: 8px;
`

const SaveButton = styled.button`
background-color: #3451c2;
border: none;
padding: 16px;
color: white;
width: 80px;
height: 30px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
`

export default class App extends React.Component {

  state = {
    inputNome: "",
    inputEmail: ""
  }
  // Valores Input Nome
  onChangeNome = (event) => {
    this.setState({inputNome: event.target.value})
    console.log(this.state.inputNome)

  }
  // Valores Input Email
  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
    console.log(this.state.inputEmail)

  }


  // getUser = () => {
  //   const request = axio.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
  //     headers: {
  //       Authorization: "luccas-barros-jackson"
  //     }
  //   })

  //   request.then((response) => {

  //   })
  // }

  
  createUser = () => {

    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }

    const request = axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    body, {
      headers: {
        Authorization: "luccas-barros-jackson"
      }
    })

    request.then((response) => {
      alert(`O Usuário ${this.state.inputNome} foi criado com sucesso`)
    }).catch((erro) => {
      console.log(erro)
    })


  }
  


  render() {
    return(
      <Container>
       <ContainerLogin>

        <LabelDiv>
          <label>Nome:</label>
          <input onChange={this.onChangeNome} />
        </LabelDiv>
      
        <LabelDiv>
          <label>Email:</label>
          <input onChange={this.onChangeEmail}/>
        </LabelDiv>

        <SaveButton>Salvar</SaveButton>
      
        </ContainerLogin>
      </Container>
    )
  }

}

