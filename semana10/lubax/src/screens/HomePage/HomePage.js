import React from "react";
import Logo from "../../imgs/logo2.svg";
import Content1 from "../../imgs/content.svg";
import CardInfo from "./CardInfo";
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import {
  HeaderDiv,
  ImgHome,
  ItemMenu,
  FlexDiv,
  Title,
  ParagTitle,
  ImgContent,
  Footer,
  FooterItem,
  theme,
} from "./styles";

import { goToLoginPage, goToTripPage } from "../../router/goToPages";

// Material

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";

function HomePage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  // Menu dinâmico
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Header */}
      <HeaderDiv>
        <ImgHome src={Logo} />

        {/* Menu */}
        <Button
          variant="contained"
          color="primary"
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
          <MenuItem onClick={() => goToLoginPage(history)}>
            <ItemMenu>Login</ItemMenu>
            <LockOpenOutlinedIcon fontSize="small" />
          </MenuItem>
          <MenuItem onClick={() => goToTripPage(history)}>
            <ItemMenu>Viagens</ItemMenu>
            <LoyaltyOutlinedIcon fontSize="small" />
          </MenuItem>
        </Menu>
      </HeaderDiv>

      {/* Inicio Content */}
      <FlexDiv>
        <Title>Lubax - Space Trips</Title>
        <ParagTitle>
          Bem vindo a Lubax! Aqui sua viagem pode chegar a outra dimensão!
        </ParagTitle>
        <ImgContent src={Content1} />

        {/* Cards */}
        <CardInfo />

        {/* Footer */}
        <Footer>
          <FooterItem>lubax © 2020</FooterItem>
          <FooterItem>twitter</FooterItem>
          <FooterItem>instagram</FooterItem>
          <FooterItem>youtube</FooterItem>
          <FooterItem>flickr</FooterItem>
        </Footer>
      </FlexDiv>
    </ThemeProvider>
  );
}

export default HomePage;
