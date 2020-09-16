import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { goBack } from "../../router/goToPages";
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { DivButton, theme, ImgIntro } from "./styles";
import { List } from "../../imgs/details.svg";

function TripDetailsPage() {
  const history = useHistory();
  return (
    <ThemeProvider theme={theme}>
      <DivButton>
        <Button
          variant="contained"
          color="primary"
          onClick={() => goBack(history)}
        >
          Voltar
        </Button>
      </DivButton>
      <img src={List} />
    </ThemeProvider>
  );
}

export default TripDetailsPage;
