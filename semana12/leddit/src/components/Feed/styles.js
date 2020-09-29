import styled from "styled-components";

import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export const Icon = styled(ChatBubbleIcon)`
  cursor: pointer;
  color: #878a8c;
  margin-right: 1rem;
  &:hover {
    background-color: #efefef;
  }
`;

export const ArrowUp = styled(ArrowUpwardIcon)`
  cursor: pointer;
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
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
`;

export const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-left: 2rem;
  align-items: center;
`;

export const DivUpDown = styled.div`
  width: 15vw;
  height: auto;
  background-color: #f8f9fa;
  flex-direction: column;
  align-items: center;
  display: flex;
`;
