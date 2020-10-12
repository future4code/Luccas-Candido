import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`;

export const BaseFlex = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const BaseFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const AllContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-direction: column;
`;

export const TitleRegister = styled.p`
  font-size: 0.875rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #303f9f;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  -webkit-box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  box-shadow: -8px -13px 6px 13px rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 12vh;
`;

export const Img = styled.img`
  width: 25%;
  margin: 2rem 0;
`;

export const LogoImg = styled.img`
  max-width: 10vw;
  margin-left: 2rem;
  @media (max-width: 530px) {
    max-width: 50%;
  }
`;
export const ButtonTry = styled(Button)`
  margin-right: 2rem;
`;

export const SideImg = styled.img`
  width: 20%;
  height: 100vh;
  @media (max-width: 530px) {
    display: none;
  }
`;

export const Footer = styled.footer``;
