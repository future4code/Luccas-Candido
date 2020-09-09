import React from "react";
import styled from "styled-components";
import Logo from "./../img/logo.svg";

// Axios
import axios from "axios";

// Hooks
import { useState, useEffect } from "react";

// Icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";


// ======= Material UI Imports =======

// Cards
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";



// Tema pras cores
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F50057",
    },
    secondary: {
      main: "#41C700",
    },
  },
});

// Tamanho card
const useStyles = makeStyles({
  root: {
    width: 332,
  },
});

// ====== DIVS ======
const ExtDiv = styled.div`
  display: flex;
  height: 100%;
`;

const IntDiv = styled.div`
  height: 99.4vh;
  width: 100%;
  border: 2px solid rgba(190, 190, 190, 0.6);
`;

const NavDiv = styled.div`
  display: flex;
  border-bottom: 2px solid rgba(255, 0, 0, 0.3);
  height: 10vh;
  align-items: center;
  justify-content: space-around;
`;

const IconDiv = styled.div`
  padding: 2px;
  margin-left: 3em;
`;

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;



const ButtonDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
`;

// IMG
const ImgProfile = styled.img`
  width: 90%;
  height: 20rem;
`;

function UsersScreen() {
  const [profile, setProfile] = useState({});

  const classes = useStyles();

  useEffect(() => {
    profileChoose();
  }, []);

  const profileChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
      )
      .then((response) => {
        console.log(response.data);
        console.log("Deu o get!");
        setProfile(response.data.profile);
      })
      .catch((err) => {
        console.log(err);
        console.log("Deu o erro!");
      });
  };
  return (
    <ExtDiv>

      <IntDiv>

        <ThemeProvider theme={theme}>
          {/* Navegação */}
          <NavDiv>
            <img src={Logo} />
            <IconDiv>
              <Button variant="contained" size="small" color="primary">
                Matches
              </Button>
            </IconDiv>
          </NavDiv>

          {/* Div Progile */}
          <ProfileDiv>
            {/* IMG Profile */}
            <ImgProfile src={profile.photo} />

            {/* Card com Infos */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {profile.name}, {profile.age}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {profile.bio}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

          </ProfileDiv>
          {/* End Div Profile */}

          {/* Botões */}
          <ButtonDiv>
            <Fab color="primary" aria-label="add">
              <CloseIcon />
            </Fab>
            <Fab color="secondary" aria-label="add">
              <FavoriteIcon />
            </Fab>
          </ButtonDiv>

        </ThemeProvider>

      </IntDiv>

    </ExtDiv>
  );
}

export default UsersScreen;
