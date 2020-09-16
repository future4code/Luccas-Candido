import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f3d56",
    },
  },
});

export const FlexDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 150vh;
`;

export const ImgIntro = styled.img`
  width: 50%;
  opacity: 0.8;
  margin: 2rem 0;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #3f3d56;
  width: 50%;
`;
