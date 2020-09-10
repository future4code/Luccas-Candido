import React from "react";
import styled from "styled-components";
import Logo from "./../img/logo.svg";
// Axios
import axios from "axios";

// Hooks
import { useState, useEffect } from "react";

// Icons
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

// ======= Material UI Imports =======

// Cards
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Tema pras cores
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F50057",
    },
    secondary: {
      main: "#41C700",
    },
  },
});

const IntDiv = styled.div`
  height: 99.4vh;
  width: 100%;
  border: 2px solid rgba(190, 190, 190, 0.6);
`;

const NavDiv = styled.div`
  display: flex;
  border-bottom: 2px solid rgba(255, 0, 0, 0.3);
  height: 10vh;
  align-items: center;
  justify-content: space-around;
`;

const IconDiv = styled.div`
  padding: 2px;
  margin-right: 3em;
`;

function MatchScreen(props) {
  return (
    <div>
      <IntDiv>
      <ThemeProvider theme={theme}>
      <NavDiv>
      <IconDiv>
              <Button startIcon={<KeyboardBackspaceIcon />}variant="contained" size="small" color="primary" onClick={props.onClickBack}>
                Voltar
              </Button>
            </IconDiv>
            <img src={Logo} />
            
          </NavDiv>
      </ThemeProvider>
      </IntDiv>
    </div>
  );
}

export default MatchScreen;
