import styled from "styled-components";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 15vh;
  background: white;
  -webkit-box-shadow: 0px 6px 59px -25px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 6px 59px -25px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 6px 59px -25px rgba(0, 0, 0, 0.19);
`;

export const ImgHome = styled.img`
  width: 18%;
  opacity: 0.8;
`;

export const ItemMenu = styled.p`
  margin-right: 10px;
`;

export const ImgContent = styled.img`
  width: 60%;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #3f3d56;
`;

export const ParagTitle = styled.p`
  letter-spacing: 0.1rem;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5rem;
  width: 60%;
  opacity: 0.7;
`;

export const FlexDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
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

export const FooterItem = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  margin-right: 1rem;
  color: black;
`;

export const DivCard = styled.div`
  margin-bottom: 2rem;
`;

export const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f3d56",
    },
    secondary: {
      main: "#3F3D56",
    },
  },
});
