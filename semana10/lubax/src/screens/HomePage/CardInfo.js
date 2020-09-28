import React from "react";
import Astronauta from "../../imgs/astronauta.jpg";
import { DivCard, useStyles } from "./styles";

// Cards

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

function CardInfo() {
  const classes = useStyles();

  return (
    <div className="App">
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
                Aqui você vai ter uma experiência única de viajar para o espaço.
                Viver como um astronauta não é fácil e se você algum dia sonhou
                em viver como um, aqui é o lugar certo.
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
                Você pode conhecer toda nossa estrutura de trabalho e acompanhar
                um dia de trabalho com um engenheiro aeroespacial. Além de poder
                aproveitar nossos snacks espaciais.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </DivCard>
    </div>
  );
}

export default CardInfo;
