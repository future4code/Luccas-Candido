import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLoginPage } from "../../router/goToPages";
import { ThemeProvider } from "@material-ui/core/styles";

// Component
import SignUpForm from "./SignUpForm";

// IMG
import SignUp from "../../imgs/signup.svg";
import Abstract from "../../imgs/sideimg.jpg";
import Logo from "../../imgs/logo.png";

// Styled
import {
  AllContainer,
  Header,
  Img,
  BaseFlex,
  BaseFlexColumn,
  SideImg,
  LogoImg,
  ButtonTry,
  theme,
} from "./styles";

function SignUpPage() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/feed");
    }
  }, [history]);

  return (
    <AllContainer>
      <ThemeProvider theme={theme}>
        <Header>
          <LogoImg src={Logo} />
          <ButtonTry
            color="primary"
            variant="contained"
            onClick={() => goToLoginPage(history)}
          >
            Login
          </ButtonTry>
        </Header>

        <BaseFlex>
          <SideImg src={Abstract} />
          <BaseFlexColumn>
            <Img src={SignUp} />
            <SignUpForm />
          </BaseFlexColumn>
        </BaseFlex>
      </ThemeProvider>
    </AllContainer>
  );
}

export default SignUpPage;
