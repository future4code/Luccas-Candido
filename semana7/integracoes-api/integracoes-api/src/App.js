import React from 'react';
import './App.css';
import styled from 'styled-components'
import axios from 'axios'
import ListaUsuarios from './assets/ListaUsuarios/ListaUsuarios'
import PainelLogin from './assets/PainelLogin/PainelLogin'

const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`


const ChangeButton = styled.button`
background-color: #3451c2;
border: none;
padding: 16px;
color: white;
width: 100px;
height: 30px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
outline: none;
cursor: pointer;
`

export default class App extends React.Component {

  state = {
    showList: false, // Começa a renderização com false
  }
  
  // Função que muda o boolean do showlist para true

  mudarVisibilidade = () => {
    this.setState({ showList: !this.state.showList })
  }

  // ===== RENDER =====
  render() {

    const paginaRenderizada = () => {

      if (!this.state.showList) {

        return <PainelLogin />

      } else {

        return <ListaUsuarios />
      }
    }

    const changeTitleButton = this.state.showList ? "Ocultar Lista" : "Mostrar Lista"

    return (
      <Container>
        <ChangeButton onClick={this.mudarVisibilidade}>
          {changeTitleButton}
        </ChangeButton>
        {paginaRenderizada()}
      </Container>
    )
  }

}

