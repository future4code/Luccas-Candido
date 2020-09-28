import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

export const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem;
`;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3f3d56",
    },
  },
});

export const ImgIntro = styled.img`
  width: 70%;
  margin: 2rem 0;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #3f3d56;
  width: 60%;
`;

export const FlexDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const DivInfos = styled.div`
  border-bottom: 2px solid #3f3d56 0.5;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 2rem;
`;

export const DivButtonDetail = styled.div`
  margin: 2rem 0;
`;
