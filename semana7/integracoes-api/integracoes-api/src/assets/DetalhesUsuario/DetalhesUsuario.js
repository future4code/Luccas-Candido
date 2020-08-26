import React from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "@material-ui/core/Button";

const DivContainerLista = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const DivInfos = styled.div`

`

export default class DetalhesUsuario extends React.Component {

  state = {
    userInfo: ""
  }

  componentDidMount(){
    // Pegar o user pelo ID.
    
    const request = axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.idTeste}`,
      {
        headers: {
          Authorization: "luccas-barros-jackson",
        },
      }
    );

    request
      .then((response) => {
        console.log('Deu certo!')
        this.setState({userInfo: response.data})
      })
      .catch((error) => {
        console.log(error);
      });

  }
  

  render() {

    return (
      <DivContainerLista>
        <DivInfos>
        <Button onClick={this.props.funcaoLista}>Voltar para lista</Button>
        </DivInfos>
        <DivInfos>
        <p>Email do usuário: {this.state.userInfo.email}</p>
        <p>Nome do usuário: {this.state.userInfo.name}</p>

        </DivInfos>
      </DivContainerLista>
    );
  }
}
