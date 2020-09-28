import React, { useEffect, useState } from "react";

// Material
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Paper from "@material-ui/core/Paper";
import Detail from "../../imgs/details.svg";
import axios from "axios";

// Hooks
import { useHistory, useParams } from "react-router-dom";
import { useProtect } from "../../webServices/useProtect";

// Routes
import { goBack } from "../../router/goToPages";

// Styled Components
import {
  DivButton,
  theme,
  ImgIntro,
  Title,
  FlexDiv,
  DivInfos,
  DivCand,
  Parag,
} from "./styles";

function TripDetailsPage() {
  const history = useHistory();
  const pathParams = useParams();

  const [trip, setTrip] = useState({});
  const [candidates, setCandidates] = useState([]);

  const getDetail = () => {
    const request = axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/luccas-jackson/trip/${pathParams.id}`,
      {
        headers: {
          auth: localStorage.getItem("token"),
        },
      }
    );

    request
      .then((response) => {
        setTrip(response.data.trip);
        setCandidates(response.data.trip.candidates);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const decide = (choice, idCandidate) => {
    const body = {
      approve: choice,
    };

    const request = axios.put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/luccas-jackson/trips/${pathParams.id}/candidates/${idCandidate}/decide`,
      body,
      {
        headers: {
          auth: localStorage.getItem("token"),
        },
      }
    );

    request
      .then((response) => {
        console.log(response);

        // Resposta ao adm quando a aprovação/rejeição for feita.
        if (body.approve === true) {
          alert("Candidato aprovado!");
        } else {
          alert("Candidato reprovado!");
        }

        getDetail();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);

  useProtect();
  return (
    <ThemeProvider theme={theme}>
      {/* Botão */}
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

      {/* Content */}
      <FlexDiv>
        <Title>Confira os detalhes de suas trips</Title>

        {/* Infos Content */}
        <DivInfos>
          <Paper elevation={3}>
            <ImgIntro src={Detail} />
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
          </Paper>

          {candidates.length === 0 && <h2>Sem candidatos!</h2>}
          {candidates.length > 0 && <h2>Candidatos</h2>}
          {candidates.length > 0 &&
            candidates.map((c) => {
              return (
                <DivCand>
                  <p>
                    <strong>Nome: </strong> {c.name}
                  </p>
                  <p>
                    <strong>Idade: </strong> {c.age}
                  </p>
                  <p>
                    <strong>Profissão: </strong> {c.profession}
                  </p>
                  <p>
                    <strong>País: </strong> {c.country}
                  </p>
                  <Parag>
                    <strong>Texto de aplicação: </strong> {c.applicationText}
                    <Button color="primary" onClick={() => decide(true, c.id)}>
                      Aprovar
                    </Button>
                    <Button color="primary" onClick={() => decide(false, c.id)}>
                      Reprovar
                    </Button>
                  </Parag>
                </DivCand>
              );
            })}
        </DivInfos>
      </FlexDiv>
    </ThemeProvider>
  );
}

export default TripDetailsPage;
