import React from "react";
import styled from "styled-components";
import Logo from "../../imgs/logo2.svg";
import Content1 from "../../imgs/content.svg";
import Astronauta from "../../imgs/astronauta.jpg";

// Material

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";

// Cards

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 12vh;
  background: white;
  -webkit-box-shadow: 0px 6px 59px -25px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 6px 59px -25px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 6px 59px -25px rgba(0, 0, 0, 0.19);
`;

const ImgHome = styled.img`
  width: 18%;
  opacity: 0.8;
`;

const ItemMenu = styled.p`
  margin-right: 10px;
`;

const ImgContent = styled.img`
  width: 60%;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #3f3d56;
`;

const ParagTitle = styled.p`
  letter-spacing: 0.1rem;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5rem;
  width: 60%;
  opacity: 0.7;
`;

const FlexDiv = styled.div`
  padding-top: 50px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DivCard = styled.div`
  margin-bottom: 2rem;
`;

const Footer = styled.footer`
  display: flex;
  height: 15vh;
  background: white;
  width: 100%;
  -webkit-box-shadow: 5px -16px 32px -24px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px -16px 32px -24px rgba(0, 0, 0, 0.75);
  box-shadow: 5px -16px 32px -24px rgba(0, 0, 0, 0.5);
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const FooterItem = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  margin-right: 1rem;
  color: black;
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

function HomePage() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App">
      <HeaderDiv>
        <ImgHome src={Logo} />
        <Button
          variant="outlined"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <ItemMenu>Login</ItemMenu>
            <LockOpenOutlinedIcon fontSize="small" />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ItemMenu>Viagens</ItemMenu>
            <LoyaltyOutlinedIcon fontSize="small" />
          </MenuItem>
        </Menu>
      </HeaderDiv>

      <FlexDiv>
        <Title>Lubax - Space Trips</Title>
        <ParagTitle>
          Bem vindo a Lubax! Aqui sua viagem pode chegar a outra dimensão!
        </ParagTitle>
        <ImgContent src={Content1} />

        <DivCard>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={Astronauta}
                title="Astronaut"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Experiência Única
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Aqui você vai ter uma experiência única de viajar para o
                  espaço. Viver como um astronauta não é fácil e se você algum
                  dia sonhou em viver como um, aqui é o lugar certo.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </DivCard>

        <DivCard>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                title="Lights on Earth"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Veja o planeta Terra como nunca viu antes!
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Sim, a terra NÃO É PLANA! Veja você mesmo de perto o quão
                  redonda ela é. Inclusive tire do seu tempo para tirar fotos
                  incríveis!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </DivCard>

        <DivCard>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1533698215883-e2edc689fef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
                title="NASA QG"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Conheça nossa estrutura
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Você pode conhecer toda nossa estrutura de trabalho e
                  acompanhar um dia de trabalho com um engenheiro aeroespacial.
                  Além de poder aproveitar nossos snacks espaciais.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </DivCard>

        <Footer>
          <FooterItem>lubax © 2020</FooterItem>
          <FooterItem>twitter</FooterItem>
          <FooterItem>instagram</FooterItem>
          <FooterItem>youtube</FooterItem>
          <FooterItem>flickr</FooterItem>
        </Footer>
      </FlexDiv>
    </div>
  );
}

export default HomePage;
