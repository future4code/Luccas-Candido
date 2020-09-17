import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import {
  goBack,
  goToFormPage,
  goToTripDetailPage,
} from "../../router/goToPages";
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import {
  DivButton,
  theme,
  Title,
  FlexDiv,
  DivInfos,
  ImgIntro,
  DivButtonDetail,
} from "./styles";
import Paper from "@material-ui/core/Paper";
import ImgInfo from "../../imgs/listtrip.svg";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import axios from "axios";

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
        console.log(response.data.trips);
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
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => goToFormPage(history, trip.id)}
                    >
                      Viaje conosco
                    </Button>
                  </Paper>
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
