import React from "react";
import { useHistory } from "react-router-dom";
import { goToSignUpPage } from "../../router/goToPages";

import { ThemeProvider } from "@material-ui/core/styles";

// Component
import LoginForm from "./LoginForm";

// IMG
import LoginImg from "../../imgs/login.svg";
import Abstract from "../../imgs/sideimg.jpg";
import Logo from "../../imgs/logo.png";

// Styled
import {
  AllContainer,
  TitleRegister,
  Header,
  Img,
  BaseFlex,
  BaseFlexColumn,
  SideImg,
  LogoImg,
  ButtonTry,
  theme,
} from "./styles";

function LoginPage() {
  const history = useHistory();
  return (
    <AllContainer>
      <ThemeProvider theme={theme}>
        <Header>
          <LogoImg src={Logo} />
        </Header>

        <BaseFlex>
          <SideImg src={Abstract} />
          <BaseFlexColumn>
            <Img src={LoginImg} />
            <LoginForm />
            <TitleRegister>
              Caso não tenha um cadastro, registre-se{" "}
              <ButtonTry
                color="primary"
                onClick={() => goToSignUpPage(history)}
              >
                AQUI!
              </ButtonTry>
            </TitleRegister>
          </BaseFlexColumn>
        </BaseFlex>
      </ThemeProvider>
    </AllContainer>
  );
}

export default LoginPage;
