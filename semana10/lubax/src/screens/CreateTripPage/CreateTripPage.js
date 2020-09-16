import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ImgContent from "../../imgs/createpage.svg";
import { theme, FlexDiv, ImgIntro, DivButton, Title } from "./styles";
import { goBack } from "../../router/goToPages";
import { useHistory } from "react-router-dom";

function CreateTripPage() {
  const [nameValue, setNameValue] = useState("");
  const [namePlanet, setNamePlanet] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [durationValue, setDurationValue] = useState("");
  const history = useHistory();

  // Inputs
  const handleName = (event) => {
    setNameValue(event.target.value);
  };

  const handlePlanet = (event) => {
    setNamePlanet(event.target.value);
  };

  const handleDate = (event) => {
    setDateValue(event.target.value);
  };

  const handleDescription = (event) => {
    setDescriptionValue(event.target.value);
  };

  const handleDuration = (event) => {
    setDurationValue(event.target.value);
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
      <FlexDiv>
        <Title>Crie sua trip!</Title>

        <ImgIntro src={ImgContent} />

        <TextField
          value={nameValue}
          onChange={handleName}
          id="outlined-basic"
          label="Nome da trip"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Planeta"
          variant="outlined"
          value={namePlanet}
          onChange={handlePlanet}
        />
        <TextField
          id="outlined-basic"
          label="Data"
          variant="outlined"
          value={dateValue}
          onChange={handleDate}
        />

        <TextField
          id="outlined-basic"
          label="Descrição"
          variant="outlined"
          value={descriptionValue}
          onChange={handleDescription}
        />

        <TextField
          id="outlined-basic"
          label="Duração em dias"
          variant="outlined"
          type="number"
          value={durationValue}
          onChange={handleDuration}
        />

        <Button variant="contained" color="primary">
          Criar trip
        </Button>
      </FlexDiv>
    </ThemeProvider>
  );
}

export default CreateTripPage;
