import React, { useEffect } from "react";

// Material
import TextField from "@material-ui/core/TextField";
import { ThemeProvider } from "@material-ui/core/styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Button from "@material-ui/core/Button";

// Hooks
import { useHistory } from "react-router-dom";
import { useForm } from "../../webServices/useForm";
// IMG
import Logo from "../../imgs/logo2.svg";

// Routs
import { goBack } from "../../router/goToPages";

// Styled
import { DivForm, ImgLogo, DivButton, theme } from "./styles";
import axios from "axios";

function LoginPage() {
  const history = useHistory();

  const { form, onChange, resetState } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    resetState();
  };

  // Onchange
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  // requisição login
  const getLogin = () => {
    const body = {
      email: form.email,
      password: form.password,
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luccas-jackson/login",
      body
    );

    request
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/panel");
      })
      .catch((err) => {
        alert("Insira os dados corretos!");
        console.log(err);
        resetState();
      });
  };

  // Se já tiver logado, a página de login não aparece.
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/panel");
    }
  }, [history]);

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
      <form onSubmit={handleSubmit}>
        <DivForm>
          <ImgLogo src={Logo} />
          <TextField
            required
            type="email"
            value={form.email}
            onChange={handleInputChange}
            id="outlined-basic"
            label="User"
            variant="outlined"
            name="email"
          />
          <TextField
            required
            value={form.password}
            onChange={handleInputChange}
            color="primary"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
          />
          <Button variant="contained" color="primary" onClick={getLogin}>
            Login
          </Button>
        </DivForm>
      </form>
    </ThemeProvider>
  );
}

export default LoginPage;
