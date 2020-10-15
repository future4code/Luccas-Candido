import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'

// Material
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ImgInfo from "../../imgs/listtrip.svg";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

// Pages
import {
  goBack,
  goToFormPage,
  goToTripDetailPage,
} from "../../router/goToPages";

// Hooks
import { useHistory } from "react-router-dom";

// Styled
import {
  DivButton,
  theme,
  Title,
  FlexDiv,
  DivInfos,
  ImgIntro,
  DivButtonDetail,
} from "./styles";

const PaperTest = styled(Paper)`
padding-bottom: 1rem;
`

function ListTripPage() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const [trip, setTrip] = useState([]);

  const getTrip = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luccas-jackson/trips"
    );

    request
      .then((response) => {
        setTrip(response.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTrip();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* Se tiver autorização, renderiza uma página com acesso aos detalhes */}
      {token && (
        <div>
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
            <Title>Confira nossas viagens disponíveis</Title>
            {trip.map((trip) => {
              return (
                <DivInfos>
                  <Paper elevation={3}>
                    <ImgIntro src={ImgInfo} />
                    <h1>{trip.name}</h1>
                    <p>
                      <strong>Descrição:</strong> {trip.description}
                    </p>
                    <p>
                      <strong>Planeta:</strong> {trip.planet}
                    </p>
                    <p>
                      <strong>Duração:</strong> {trip.durationInDays} dias
                    </p>
                    <p>
                      <strong>Data:</strong> {trip.date}
                    </p>
                    <DivButtonDetail>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => goToTripDetailPage(history, trip.id)}
                      >
                        Detalhes da trip
                      </Button>
                    </DivButtonDetail>
                  </Paper>
                </DivInfos>
              );
            })}
          </FlexDiv>
        </div>
      )}

      {/* Se não tiver autorização, vê os detalhes das viagens e aplica pro form. */}
      {token === null && (
        <div>
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
            <Title>Confira nossas viagens disponíveis</Title>
            {trip.map((trip) => {
              return (
                <DivInfos>
                  <PaperTest elevation={3}>
                    <ImgIntro src={ImgInfo} />
                    <h1>{trip.name}</h1>
                    <p>
                      <strong>Descrição:</strong> {trip.description}
                    </p>
                    <p>
                      <strong>Planeta:</strong> {trip.planet}
                    </p>
                    <p>
                      <strong>Duração:</strong> {trip.durationInDays} dias
                    </p>
                    <p>
                      <strong>Data:</strong> {trip.date}
                    </p>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => goToFormPage(history, trip.id)}
                    >
                      Viaje conosco
                    </Button>
                  </PaperTest>
                </DivInfos>
              );
            })}
          </FlexDiv>
        </div>
      )}
    </ThemeProvider>
  );
}

export default ListTripPage;
