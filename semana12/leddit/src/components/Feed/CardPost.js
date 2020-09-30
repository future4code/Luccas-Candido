import React from "react";
import { useHistory } from "react-router-dom";

import { goToSignUpPage } from "../../router/goToPages";

import {
  PostContainer,
  DivUpDown,
  DetailContainer,
  CommentsContainer,
  Icon,
  ArrowUp,
  ArrowDown,
  TitleCard,
  TextPara,
} from "./styles";

function CardPost(props) {
  const history = useHistory();

  return (
    <PostContainer>
      <DivUpDown>
        <ArrowUp />
        <p>123k</p>
        <ArrowDown />
      </DivUpDown>

      <DetailContainer>
        <TitleCard>{props.title}</TitleCard>
        <TextPara>{props.text}</TextPara>
        <CommentsContainer>
          <p>
            <Icon onClick={() => goToSignUpPage(history)} /> 0 comentários
          </p>
        </CommentsContainer>
      </DetailContainer>
    </PostContainer>
  );
}

export default CardPost;
