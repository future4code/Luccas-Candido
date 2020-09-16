import React from "react";
import Astronaut from "../../imgs/astronaut-panel.svg";
import Button from "@material-ui/core/Button";
import { goToHome, goToCreateTripPage } from "../../router/goToPages";
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { ImgIntro, ExtDiv, Title, DivButton, theme } from "./styles";

function AdmPanel() {
  const history = useHistory();
  return (
    <ThemeProvider theme={theme}>
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
          <Button variant="outlined" color="primary">
            Ver Detalhes das viagens
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => goToHome(history)}
          >
            Voltar a página inicial
          </Button>
        </DivButton>
      </ExtDiv>
    </ThemeProvider>
  );
}

export default AdmPanel;
