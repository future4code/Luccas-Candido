import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  CommentContainer,
  CommentsUpDown,
  ArrowUp,
  ArrowDown,
  ArrowUpClick,
  ArrowDownClick,
  DetailContainer,
  TimeTitle,
  TextPara,
} from "./styles";

function Comment(props) {
  const pathParams = useParams();

  const voteComment = (choice) => {
    const body = {
      direction: choice,
    };

    const request = axios.put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}/comment/${props.commentId}/vote`,
      body,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    request
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <CommentContainer>
      <CommentsUpDown>
        {props.userVoteDirection === 1 ? (
          <ArrowUpClick />
        ) : (
          <ArrowUp onClick={() => voteComment(+1)} />
        )}
        <p>{props.votesCount}</p>
        {props.userVoteDirection === -1 ? (
          <ArrowDownClick />
        ) : (
          <ArrowDown onClick={() => voteComment(-1)} />
        )}
      </CommentsUpDown>
      <DetailContainer>
        <TimeTitle>Posted by u/{props.userName}</TimeTitle>
        <TextPara>{props.text}</TextPara>
      </DetailContainer>
    </CommentContainer>
  );
}

export default Comment;
