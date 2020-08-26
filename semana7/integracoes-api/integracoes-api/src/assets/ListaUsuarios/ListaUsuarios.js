import React from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import DetalhesUsuario from "../DetalhesUsuario/DetalhesUsuario";

const DivContainerLista = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const UsuarioStyle = styled.p`
  font-size: 1em;
  margin-right: 30px;
  letter-spacing: 0.1em;
`;

const DivButton = styled.div`
display: flex;
`
const DivP = styled.div`
height: 5vh;
padding: 20px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default class ListaUsuarios extends React.Component {
  state = {
    userList: [],
  };

  //   Deletar usuário

  deleterUser = (id) => {
    if (window.confirm("Deletar este usuário?")) {
      const request = axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "luccas-barros-jackson",
          },
        }
      );

      request
        .then((response) => {
          alert("Item deletado");
          this.getUser(); // Atualizar os dados com getuser
        })
        .catch((erro) => {
          alert("Não foi possível deletar.");
        });
    }
  };

  // Pegar o usuário

  getUser = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "luccas-barros-jackson",
        },
      }
    );

    request
      .then((response) => {
        this.setState({ userList: response.data });
      })
      .catch((erro) => {
        console.log("Ocorreu um erro.");
      });
  };

  // Chamar a lista quando entrar

  componentDidMount() {
    this.getUser();
  }

  render() {
    // Renderizar a página de Usuários
    const userListRender = this.state.userList.map((user) => {
      console.log(user.id)

      return (

        <DivContainerLista>
          <DivP><UsuarioStyle key={user.id}> {user.name} </UsuarioStyle> </DivP>

        <DivButton>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={() => this.deleterUser(user.id)}
          >
            Deletar
          </Button>

          <Button
            variant="contained"
            color="secondary"
            size="small"
            startIcon={<AssignmentIndIcon />}
            onClick={() => this.props.funcaoUsuario(user.id)}
          >
            Detalhes do Usuário
          </Button>
          </DivButton>

        </DivContainerLista>
      );
    });



    return (
      
        
      <DivContainerLista>
        <Container>
      <Button
          onClick={this.props.funcaoLogin}
        >
          Voltar
        </Button>
        </Container>
        <h1>Usuários cadastrados:</h1>

       {/* Map Rodando */}
        {userListRender}
      </DivContainerLista>
    );
  }
}
