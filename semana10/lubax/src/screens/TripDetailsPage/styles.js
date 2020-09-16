import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

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

export const ImgIntro = styled.img`
  width: 50%;
  margin: 2rem 0;
`;
