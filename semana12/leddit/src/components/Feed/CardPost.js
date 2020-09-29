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
} from "./styles";

function CardPost() {
  const history = useHistory();

  return (
    <PostContainer>
      <DivUpDown>
        <ArrowUp />
        <p>123k</p>
        <ArrowDown />
      </DivUpDown>

      <DetailContainer>
        <h1>Post exemplo xD</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          efficitur pretium nulla ac elementum. Duis fermentum non ipsum ut
          suscipit. Sed at ligula eu arcu mollis convallis sit amet a orci. Nam
          dapibus dolor et est fringilla, at maximus dolor dictum. Praesent
          fermentum ligula nec est vestibulum, vel pharetra nulla scelerisque.
          Donec tincidunt quis augue ac viverra. Cras congue bibendum nibh, a
          aliquam sem molestie in.
        </p>
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
