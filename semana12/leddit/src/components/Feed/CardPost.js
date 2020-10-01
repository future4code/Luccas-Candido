import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { goToComments } from "../../router/goToPages";

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
  TimeTitle,
  CommentTitle,
  ArrowUpClick,
  ArrowDownClick,
} from "./styles";

function CardPost(props) {
  const history = useHistory();
  const [clickUp, setClickUp] = useState(null);
  const [userVoteDirection, setUserVoteDirection] = useState(0);

  const vote = (choice) => {
    const body = {
      direction: choice,
    };

    const request = axios.put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.postId}/vote`,
      body,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    request
      .then((response) => {
        setClickUp(!clickUp);
        setUserVoteDirection(choice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PostContainer>
      <DivUpDown>
        <ArrowUp onClick={() => vote(1)} />
        <p>{props.votesCount + userVoteDirection}</p>
        <ArrowDown onClick={() => vote(-1)} />
      </DivUpDown>

      <DetailContainer>
        <TimeTitle>Posted by u/{props.username}</TimeTitle>
        <TitleCard>{props.title}</TitleCard>
        <TextPara>{props.text}</TextPara>
        <CommentsContainer>
          <Icon
            fontSize={"small"}
            onClick={() => goToComments(history, props.postId)}
          />
          <CommentTitle>{props.commentsCount} comments</CommentTitle>
        </CommentsContainer>
      </DetailContainer>
    </PostContainer>
  );
}

export default CardPost;
