import React from "react";
import axios from "axios";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class CreatePlaylist extends React.Component {
  state = {
    playlistList: [],
  };

  // Pegando todas playlists
  getAllPlaylists = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        headers: {
          Authorization: "luccas-barros-jackson",
        },
      }
    );

    request
      .then((response) => {
        console.log(response);
        // Setando o resultado para o array de playlists
        this.setState({ playlistList: response.data.result.list });
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  // Montando na renderização
  componentDidMount() {
    this.getAllPlaylists();
  }

  render() {
    // Criando o map pra renderizar as infos
    const renderPlaylist = this.state.playlistList.map((p) => {
      return (
        <p>
          {p.name}
          <Button onClick={() => this.props.detailClick(p.name, p.id)}>
            Detalhes da Playlist
          </Button>
          <Button onClick={() => this.props.onClickCreateTrack(p.id)}>
            Adicionar música a playlist
          </Button>
        </p>
      );
    });
    return (
      <div>
        <Button onClick={this.props.loginClick}>Voltar</Button>
        {renderPlaylist}
      </div>
    );
  }
}
