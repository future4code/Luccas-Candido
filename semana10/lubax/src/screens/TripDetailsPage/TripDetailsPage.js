import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { goBack } from "../../router/goToPages";
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { DivButton, theme, ImgIntro, Title, FlexDiv, DivInfos } from "./styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Paper from "@material-ui/core/Paper";
import Detail from "../../imgs/details.svg";

function TripDetailsPage() {
  const history = useHistory();
  return (
    <ThemeProvider theme={theme}>
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
      <FlexDiv>
        <Title>Confira os detalhes de suas trips</Title>
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
