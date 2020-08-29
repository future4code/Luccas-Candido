import React from "react";
import axios from "axios";
import styled from "styled-components";
import DeleteIcon from "./../../img/delete.svg";

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(120deg, #1db954, #191414);
`;

const ImgPlaylist = styled.img`
  width: 50%;
`;

const DivList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlaylistP = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 12px;
  margin-top: 36px;
`;

const PlaylistName = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 16px;
`;

const DivCreateTrack = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px;
  border-radius: 20px;
  background-color: white;
`;

const ButtonCreate = styled.button`
  font-size: 14px;
  background-color: #2ebd59;
  border: none;
  border-radius: 10px;
  color: white;
  width: 160px;
  height: 40px;
  margin-top: 30px;
  -webkit-box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  outline: none;
`;

const ButtonList = styled.button`
  font-size: 16px;
  background-color: none;
  color: #2ebd59;
  width: 160px;
  height: 40px;
  border: none;
  background-color: white;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;

export default class CreatePlaylist extends React.Component {
  state = {
    playlistList: [],
  };

  deletePlaylist = (id) => {
    const request = axios.delete(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId",
      {
        headers: {
          Authorization: "luccas-barros-jackson",
        },
      }
    );
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
        <DivList>
          <PlaylistP>Playlist</PlaylistP>
          <PlaylistName>
            {p.name}
            <img src={DeleteIcon} />
          </PlaylistName>
          <ImgPlaylist src={this.props.urlImage} />
          <ButtonCreate onClick={() => this.props.detailClick(p.name, p.id)}>
            Detalhes da Playlist
          </ButtonCreate>
          <ButtonCreate onClick={() => this.props.onClickCreateTrack(p.id)}>
            Adicionar música a playlist
          </ButtonCreate>
        </DivList>
      );
    });
    return (
      <DivContainer>
        <DivCreateTrack>
          <ButtonList onClick={this.props.loginClick}>Voltar</ButtonList>
          {renderPlaylist}
        </DivCreateTrack>
      </DivContainer>
    );
  }
}
