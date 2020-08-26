import React from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "@material-ui/core/Button";

const DivContainerLista = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default class DetalhesUsuario extends React.Component {

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
        alert('Deu certo!')
        console.log(response);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

  render() {


    return (
      <DivContainerLista>
        <Button onClick={this.props.funcaoLista}>Voltar para lista</Button>
        Oi
      </DivContainerLista>
    );
  }
}
