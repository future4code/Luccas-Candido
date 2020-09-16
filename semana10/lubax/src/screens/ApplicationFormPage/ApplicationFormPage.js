import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ImgContent from "../../imgs/formapp.svg";
import { theme, FlexDiv, ImgIntro, DivButton, Title } from "./styles";
import { goBack, goToHome } from "../../router/goToPages";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";

function ApplicationFormPage() {
  const history = useHistory();

  // State
  const [nameValue, setNameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [profValue, setProfValue] = useState("");
  const [countryValue, setCountryValue] = useState("");

  // OnChange
  const handleName = (event) => {
    setNameValue(event.target.value);
    console.log(nameValue);
  };

  const handleAge = (event) => {
    setAgeValue(event.target.value);
    console.log(ageValue);
  };

  const handleDescription = (event) => {
    setDescriptionValue(event.target.value);
    console.log(descriptionValue);
  };

  const handleProf = (event) => {
    setProfValue(event.target.value);
    console.log(profValue);
  };

  const handleCountry = (event) => {
    setCountryValue(event.target.value);
    console.log(countryValue);
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
      <FlexDiv>
        <Title>Cadastre-se para nossas viagens!</Title>

        <ImgIntro src={ImgContent} />

        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          onChange={handleName}
          value={nameValue}
        />
        <TextField
          id="outlined-basic"
          label="Idade"
          variant="outlined"
          type="number"
          onChange={handleAge}
          value={ageValue}
        />
        <TextField
          id="outlined-basic"
          label="Escreva pra gente"
          variant="outlined"
          onChange={handleDescription}
          value={descriptionValue}
        />

        <TextField
          id="outlined-basic"
          label="Profissão"
          variant="outlined"
          onChange={handleProf}
          value={profValue}
        />

        <TextField
          id="outlined-basic"
          label="País"
          variant="outlined"
          onChange={handleCountry}
          value={countryValue}
        />

        <Button variant="contained" color="primary">
          Cadastrar para trip
        </Button>
      </FlexDiv>
    </ThemeProvider>
  );
}

export default ApplicationFormPage;
