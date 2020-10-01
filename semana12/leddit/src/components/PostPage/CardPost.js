import React, { useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

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
  const pathParams = useParams();

  const vote = (choice) => {
    const body = {
      direction: choice,
    };

    const request = axios.put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}/vote`,
      body,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    request
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PostContainer>
      <DivUpDown>
        {props.userVoteDirection === 1 ? (
          <ArrowUpClick />
        ) : (
          <ArrowUp onClick={() => vote(+1)} />
        )}
        <p>{props.votesCountPost + props.userVoteDirection}</p>
        {props.userVoteDirection === -1 ? (
          <ArrowDownClick />
        ) : (
          <ArrowDown onClick={() => vote(-1)} />
        )}
      </DivUpDown>

      <DetailContainer>
        <TimeTitle>Posted by u/{props.userName}</TimeTitle>
        <TitleCard>{props.title}</TitleCard>
        <TextPara>{props.textPost}</TextPara>
        <CommentsContainer>
          <Icon fontSize={"small"} />
          <CommentTitle>{props.commentCount} comments</CommentTitle>
        </CommentsContainer>
      </DetailContainer>
    </PostContainer>
  );
}

export default CardPost;
