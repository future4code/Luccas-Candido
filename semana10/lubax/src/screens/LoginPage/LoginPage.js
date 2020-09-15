import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Logo from "../../imgs/logo2.svg";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { goBack, goToPanelPage } from "../../router/goToPages";
import { useHistory } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80vh;
`;

const ImgLogo = styled.img`
  margin-top: 4rem;
  width: 50%;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0 0 1rem;
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f3d56",
    },
    secondary: {
      main: "#3F3D56",
    },
  },
});

function LoginPage() {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleUser = (e) => {
    setUser(e.target.value);
    console.log(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

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
      <DivForm>
        <ImgLogo src={Logo} />
        <TextField
          value={user}
          onChange={handleUser}
          id="outlined-basic"
          label="User"
          variant="outlined"
        />
        <TextField
          value={password}
          onChange={handlePassword}
          color="primary"
          label="Password"
          variant="outlined"
          type="password"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => goToPanelPage(history)}
        >
          Login
        </Button>
      </DivForm>
    </ThemeProvider>
  );
}

export default LoginPage;
