import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ImgContent from "../../imgs/formapp.svg";
import { theme, FlexDiv, ImgIntro, DivButton, Title } from "./styles";
import { goBack, goToHome } from "../../router/goToPages";
import { useHistory, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import { useForm } from "../../webServices/useForm";

function ApplicationFormPage() {
  const history = useHistory();
  const pathParams = useParams();

  // State
  const { form, onChange, resetState } = useForm({
    name: "",
    age: "",
    description: "",
    profession: "",
    country: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    resetState();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const apllyTrip = () => {
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.description,
      profession: form.profession,
      country: form.country,
    };

    const request = axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/luccas-jackson/trips/${pathParams.id}/apply`,
      body
    );

    request
      .then((response) => {
        console.log(response.data);
        resetState();
      })
      .catch((err) => {
        console.log(err);
        resetState();
      });
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

        <Button
          variant="contained"
          color="primary"
          onClick={() => goToHome(history)}
          startIcon={<HomeIcon />}
        >
          Home
        </Button>
      </DivButton>
      <form onSubmit={handleSubmit}>
        <FlexDiv>
          <Title>Cadastre-se para nossas viagens!</Title>

          <ImgIntro src={ImgContent} />

          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            onChange={handleInputChange}
            type="text"
            value={form.name}
            name="name"
            pattern="[A-Za-z]{3,}"
            required
          />
          <TextField
            id="outlined-basic"
            label="Idade"
            variant="outlined"
            type="number"
            onChange={handleInputChange}
            value={form.age}
            name="age"
            required
          />
          <TextField
            id="outlined-basic"
            label="Escreva pra gente"
            variant="outlined"
            onChange={handleInputChange}
            value={form.description}
            required
            type="text"
            name="description"
          />

          <TextField
            id="outlined-basic"
            label="Profissão"
            variant="outlined"
            onChange={handleInputChange}
            value={form.profession}
            required
            type="text"
            name="profession"
          />

          <TextField
            id="outlined-basic"
            label="País"
            variant="outlined"
            onChange={handleInputChange}
            value={form.country}
            required
            type="text"
            name="country"
          />

          <Button variant="contained" color="primary" onClick={apllyTrip}>
            Cadastrar para trip
          </Button>
        </FlexDiv>
      </form>
    </ThemeProvider>
  );
}

export default ApplicationFormPage;
