import React from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";
import ListaUsuarios from "./assets/ListaUsuarios/ListaUsuarios";
import PainelLogin from "./assets/PainelLogin/PainelLogin";
import Button from "@material-ui/core/Button";
import DetalhesUsuario from "./assets/DetalhesUsuario/DetalhesUsuario";

export default class App extends React.Component {
  state = {
    currentPage: "login",
    currentUserId: ""
  };

  // OnClicks utilizados nos componentes para alterar no estado da página.
  onClickDetalhesUsuario = (idUsuario) => {
    this.setState({ currentPage: "renderiza", currentUserId: idUsuario});
  };

  onClickLogin = () => {
    this.setState({ currentPage: "login" });
  };

  onClickLista = () => {
    this.setState({ currentPage: "lista" });
  };

  // ===== RENDER =====
  render() {
    const paginaRenderizada = () => {

      if (this.state.currentPage === "login") {
        
        return <PainelLogin funcaoLogin={this.onClickLista} />;

      } else if (this.state.currentPage === "renderiza") {

        return <DetalhesUsuario 
        idTeste={this.state.currentUserId}
        funcaoLista={this.onClickLista} />;

      } else {

        return (
          <ListaUsuarios
            funcaoLogin={this.onClickLogin}
            funcaoUsuario={this.onClickDetalhesUsuario}
          />
        );
      }
    };

    return <div>{paginaRenderizada()}</div>;
  }
}
