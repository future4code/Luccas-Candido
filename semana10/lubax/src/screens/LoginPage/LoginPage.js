import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Logo from "../../imgs/logo2.svg";
import Button from "@material-ui/core/Button";
import { goBack, goToPanelPage } from "../../router/goToPages";
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { DivForm, ImgLogo, DivButton, theme } from "./styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

function LoginPage() {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  // Onchange
  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

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

      {/* Inputs */}
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
