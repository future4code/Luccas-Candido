import React from "react";
import axios from "axios";
import { useForm } from "../../services/useForm";
import { useHistory } from "react-router-dom";

import { LoginFormContainer, InputsContainer } from "./styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function SignUpForm() {
  const history = useHistory();
  const { form, onChange, resetState } = useForm({
    name: "",
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

  const signUp = () => {
    const body = {
      email: form.email,
      password: form.password,
      username: form.name,
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup",
      body
    );

    request
      .then((response) => {
        console.log(response.data);
        history.push("/feed");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

          <TextField
            value={form.name}
            name={"name"}
            onChange={handleInputChange}
            label={"Nome"}
            variant={"outlined"}
            type={"text"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <Button
            onClick={signUp}
            color={"primary"}
            variant={"contained"}
            type={"submit"}
            fullWidth
            margin={"normal"}
          >
            Cadastrar
          </Button>
        </InputsContainer>
      </LoginFormContainer>
    </form>
  );
}

export default SignUpForm;
