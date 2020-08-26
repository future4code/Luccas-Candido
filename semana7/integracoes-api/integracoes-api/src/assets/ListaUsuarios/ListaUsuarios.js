import React from "react";
import styled from "styled-components";
import axios from "axios";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const DivContainerLista = styled.div`
  display: flex;
  justify-content: center;
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
        })
        .catch((erro) => {
          alert("Não foi possível deletar.");
        });
    }
  };

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

  componentDidMount() {
    this.getUser();
  }

  render() {
    const userListRender = this.state.userList.map((user) => {
      return (
        <p key={user.id}>
          {" "}
          {user.name}{" "}
          <Button 
          variant="contained"
          color="primary"
          size="small"
          startIcon={<DeleteIcon />}
          onClick={() => this.deleterUser(user.id)}>Deletar</Button>
        </p>
      );
    });

    return (
      <DivContainerLista>
        <h1>Usuários cadastrados:</h1>
        {userListRender}
      </DivContainerLista>
    );
  }
}
