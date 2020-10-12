import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export const ContainerCreatePost = styled.div`
  border: 1px solid black;
  width: 46vw;
  margin-top: 8rem;
  border-radius: 5px;
  padding: 1rem 1rem;
`;

export const TitleCreate = styled.p`
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  text-decoration: underline;
  text-align: center;
  margin-left: 1rem;
`;

export const TextArea = styled(TextareaAutosize)`
  margin: 1rem 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  -webkit-box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -10px rgba(0, 0, 0, 0.75);
  box-shadow: -8px -13px 6px 13px rgba(0, 0, 0, 0.75);
  height: 12vh;
  padding-right: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const ButtonTry = styled(Button)`
  margin-right: 2rem;
`;

export const LogoImg = styled.img`
  max-width: 10vw;
  margin-left: 2rem;
  @media (max-width: 530px) {
    max-width: 50%;
  }
`;
export const Icon = styled(ChatBubbleIcon)`
  cursor: pointer;
  color: #878a8c;
  margin-right: 1rem;
  width: 2vw;
  &:hover {
    background-color: #efefef;
  }
`;

export const ArrowUp = styled(ArrowUpwardIcon)`
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
  &:checked {
    color: orange;
  }
`;

export const ArrowUpClick = styled(ArrowUpwardIcon)`
  cursor: pointer;
  color: orange;
  &:hover {
    background-color: #efefef;
  }
`;

export const ArrowDownClick = styled(ArrowDownwardIcon)`
  cursor: pointer;
  color: orange;
  &:hover {
    background-color: #efefef;
  }
`;

export const ArrowDown = styled(ArrowDownwardIcon)`
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
`;

export const ContainerAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommentTitle = styled.p`
  font-size: 0.675rem;
  color: #a9a9a9;
  font-weight: bold;
`;

export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const PostContainer = styled.div`
  display: flex;
  height: auto;
  width: 50%;
  border: 1px solid black;
  margin-top: 2rem;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
  height: inherit;
`;

export const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-left: 2rem;
  align-items: center;
`;

export const DivUpDown = styled.div`
  max-width: 15vw;
  height: auto;
  background-color: #f8f9fa;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding-top: 1rem;
`;

export const TimeTitle = styled.p`
  font-size: 0.675rem;
  color: #a9a9a9;
`;

export const TitleCard = styled.h1`
  font-size: 2vw;
  font-weight: bold;
  font-family: Verdana;
  color: black;
  letter-spacing: 0.1em;
  text-align: center;
`;

export const TextPara = styled.p`
  font-size: 1vw;
  font-family: Verdana;
  color: black;
  letter-spacing: 0.1em;
  @media (max-width: 530px) {
    font-size: 3vw;
  }
`;

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
