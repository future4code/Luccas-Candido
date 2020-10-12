import React, { useEffect } from "react";
import axios from "axios";

// Hooks
import { useHistory } from "react-router-dom";
import { useForm } from "../../services/useForm";

// Styled
import { LoginFormContainer, InputsContainer } from "./styles";

// Material
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function LoginForm() {
  const history = useHistory();

  const { form, onChange, resetState } = useForm({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    resetState();
  };

  const userLogin = () => {
    const body = {
      email: form.email,
      password: form.password,
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login",
      body
    );
    request
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        history.push("/feed");
      })
      .catch((err) => {
        alert("Insira os dados corretos!");
        console.log(err);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/feed");
    }
  }, [history]);

  return (
    <form onSubmit={handleSubmit}>
      <LoginFormContainer>
        <InputsContainer>
          <TextField
            value={form.email}
            name={"email"}
            onChange={handleInputChange}
            label={"E-mail"}
            variant={"outlined"}
            type={"email"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />

          <TextField
            value={form.password}
            name={"password"}
            onChange={handleInputChange}
            label={"Senha"}
            variant={"outlined"}
            type={"password"}
            fullWidth
            required
            margin={"normal"}
          />

          <Button
            onClick={userLogin}
            color={"primary"}
            variant={"contained"}
            type={"submit"}
            fullWidth
            margin={"normal"}
          >
            Fazer Login
          </Button>
        </InputsContainer>
      </LoginFormContainer>
    </form>
  );
}

export default LoginForm;
