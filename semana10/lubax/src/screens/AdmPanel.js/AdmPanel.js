import React from "react";
import Astronaut from "../../imgs/astronaut-panel.svg";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { goToHome, goToCreateTripPage } from "../../router/goToPages";
import { useHistory } from "react-router-dom";

const ImgIntro = styled.img`
  width: 50%;
  opacity: 0.8;
  margin: 2rem 0;
`;

const ExtDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #3f3d56;
  width: 50vw;
`;

const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vh;
  justify-content: space-around;
`;

function AdmPanel() {
  const history = useHistory();
  return (
    <ExtDiv>
      <ImgIntro src={Astronaut} />

      <Title>Bem vindo(a) ao seu painel de controle!</Title>
      <DivButton>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            goToCreateTripPage(history);
          }}
        >
          Criar viagem
        </Button>
        <Button variant="outlined">Ver Detalhes das viagens</Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => goToHome(history)}
        >
          Voltar a página inicial
        </Button>
      </DivButton>
    </ExtDiv>
  );
}

export default AdmPanel;
