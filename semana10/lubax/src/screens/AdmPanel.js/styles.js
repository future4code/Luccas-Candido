import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

export const ImgIntro = styled.img`
  width: 50%;
  opacity: 0.8;
  margin: 2rem 0;
`;

export const ExtDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #3f3d56;
  width: 50vw;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vh;
  justify-content: space-evenly;
`;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f3d56",
    },
  },
});
