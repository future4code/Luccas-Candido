import React, { useState } from "react";

// Material
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Paper from "@material-ui/core/Paper";
import Detail from "../../imgs/details.svg";
import axios from "axios";

// Hooks
import { useHistory, useParams } from "react-router-dom";
import { useProtect } from "../../webServices/useProtect";

// Routes
import { goBack } from "../../router/goToPages";

// Styled Components
import { DivButton, theme, ImgIntro, Title, FlexDiv, DivInfos } from "./styles";

function TripDetailsPage() {
  const history = useHistory();

  const getDetail = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luccas-jackson/trip/:id"
    );
  };

  useProtect();
  return (
    <ThemeProvider theme={theme}>
      {/* Botão */}
      <DivButton>
        <Button
          variant="contained"
          color="primary"
          onClick={() => goBack(history)}
          startIcon={<KeyboardBackspaceIcon />}
        >
          Voltar
        </Button>
      </DivButton>

      {/* Content */}
      <FlexDiv>
        <Title>Confira os detalhes de suas trips</Title>

        {/* Infos Content */}
        <DivInfos>
          <Paper elevation={3}>
            <ImgIntro src={Detail} />
            <h1>Multi luau em Jupiter</h1>
            <p>
              <strong>Descrição:</strong> Noite mágica, com vista para as 69
              luas de Jupiter
            </p>
            <p>
              <strong>Planeta:</strong> Júpiter
            </p>
            <p>
              <strong>Duração:</strong> 5 dias
            </p>
            <p>
              <strong>Data:</strong> 25/05/2010
            </p>
          </Paper>
        </DivInfos>
      </FlexDiv>
    </ThemeProvider>
  );
}

export default TripDetailsPage;
