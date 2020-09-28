import React from "react";
import axios from "axios";

// Material
import { ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";

// IMG
import ImgContent from "../../imgs/createpage.svg";

// Styled Components
import { theme, FlexDiv, ImgIntro, DivButton, Title, DivForm } from "./styles";

// Routes
import { goBack } from "../../router/goToPages";

// Hooks
import { useHistory } from "react-router-dom";
import { useProtect } from "../../webServices/useProtect";
import { useForm } from "../../webServices/useForm";

function CreateTripPage() {
  const history = useHistory();

  // Form
  const { form, onChange, resetState } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    duration: "",
  });

  // Submit
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Onchange
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  // Protection
  useProtect();

  // request
  const createTrip = () => {
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.duration,
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luccas-jackson/trips",
      body,
      {
        headers: {
          auth: localStorage.getItem("token"),
        },
      }
    );

    request
      .then((response) => {
        alert("Trip criada com sucesso!");
        resetState();
      })
      .catch((err) => {
        console.log(err);
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
      </DivButton>
      <FlexDiv>
        <Title>Crie sua trip!</Title>

        <ImgIntro src={ImgContent} />

        <form onSubmit={handleSubmit} noValidade={false}>
          <DivForm>
            <TextField
              value={form.name}
              onChange={handleInputChange}
              label="Nome da trip"
              variant="outlined"
              type="text"
              name="name"
              inputProps={{
                pattern: "[A-Za-z]{5,}",
                title: "No mínimo 5 letras",
              }}
              required
            />

            <FormControl variant="outlined">
              <Box width="225px">
                <InputLabel color="primary">Planeta</InputLabel>
              </Box>

              <Select
                value={form.planet}
                onChange={handleInputChange}
                label="Planetas"
                name="planet"
                required
              >
                <MenuItem value={"Mercúrio"}>Mercúrio</MenuItem>
                <MenuItem value={"Vênus"}>Vênus</MenuItem>
                <MenuItem value={"Marte"}>Marte</MenuItem>
                <MenuItem value={"Júpiter"}>Júpiter</MenuItem>
                <MenuItem value={"Saturno"}>Saturno</MenuItem>
                <MenuItem value={"Urano"}>Urano</MenuItem>
                <MenuItem value={"Netuno"}>Netuno</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Data"
              variant="outlined"
              value={form.date}
              onChange={handleInputChange}
              name="date"
              type="text"
              required
            />

            <TextField
              label="Descrição"
              variant="outlined"
              value={form.description}
              onChange={handleInputChange}
              name="description"
              type="text"
              required
            />

            <TextField
              label="Duração em dias"
              variant="outlined"
              type="number"
              value={form.duration}
              onChange={handleInputChange}
              name="duration"
              type="number"
              required
            />
          </DivForm>
          <Button
            variant="contained"
            color="primary"
            onClick={createTrip}
            type="submit"
          >
            Criar trip
          </Button>
        </form>
      </FlexDiv>
    </ThemeProvider>
  );
}

export default CreateTripPage;
