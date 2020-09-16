import { createMuiTheme } from "@material-ui/core/styles";
import styled from "styled-components";

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80vh;
`;

export const ImgLogo = styled.img`
  margin-top: 4rem;
  width: 50%;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0 0 1rem;
`;

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
