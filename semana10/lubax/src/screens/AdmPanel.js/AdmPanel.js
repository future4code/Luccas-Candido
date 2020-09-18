import React from "react";

// IMG
import Astronaut from "../../imgs/astronaut-panel.svg";

// Material
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";

// Hooks
import { useProtect } from "../../webServices/useProtect";
import { useHistory } from "react-router-dom";

// Routes
import {
  goToHome,
  goToCreateTripPage,
  goToTripPage,
} from "../../router/goToPages";

// Styled Component
import { ImgIntro, ExtDiv, Title, DivButton, theme } from "./styles";

function AdmPanel() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  useProtect();

  return (
    <ThemeProvider theme={theme}>
      {/* A página tava renderizando e aparecia algumas infos, fiz isso \/ */}
      {token !== null && (
        <ExtDiv>
          <ImgIntro src={Astronaut} />

          <Title>Bem vindo(a) ao seu painel de controle!</Title>
          <DivButton>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                goToCreateTripPage(history);
              }}
            >
              Criar viagem
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => goToTripPage(history)}
            >
              Viagens
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
      )}
    </ThemeProvider>
  );
}

export default AdmPanel;
