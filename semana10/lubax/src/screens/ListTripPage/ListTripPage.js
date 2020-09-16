import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { goBack, goToFormPage } from "../../router/goToPages";
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { DivButton, theme, Title, FlexDiv, DivInfos, ImgIntro } from "./styles";
import Paper from "@material-ui/core/Paper";
import ImgInfo from "../../imgs/listtrip.svg";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

function ListTripPage() {
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => goToFormPage(history)}
        >
          Viaje conosco
        </Button>
      </DivButton>
      <FlexDiv>
        <Title>Confira nossas viagens disponíveis</Title>
        <DivInfos>
          <Paper elevation={3}>
            <ImgIntro src={ImgInfo} />

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

export default ListTripPage;
