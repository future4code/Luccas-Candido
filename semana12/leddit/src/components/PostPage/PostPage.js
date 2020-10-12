import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProtect } from "../../services/useProtect";
import Logo from "../../imgs/logo.png";
import { ThemeProvider } from "@material-ui/core/styles";
import CardPost from "./CardPost";
import CommentComponent from "./CommentComponent";
import Comment from "./Comment";
import { useParams, useHistory } from "react-router-dom";
import { goToLoginPage } from "../../router/goToPages";

// Styled

import {
  Header,
  LogoImg,
  Container,
  ButtonTry,
  theme,
  ContainerPost,
} from "./styles";

function PostPage() {
  const [title, setTitle] = useState("");
  const [userName, setUsername] = useState("");
  const [textPost, setTextPost] = useState("");
  const [commentCount, setCommentCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [votesCountPost, setVotesCountPost] = useState(0);
  const [userVoteDirection, setUserVoteDirection] = useState(0);
  const pathParams = useParams();

  const history = useHistory();

  const getDetails = () => {
    const request = axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    request
      .then((response) => {
        console.log(response);
        setTitle(response.data.post.title);
        setUsername(response.data.post.username);
        setTextPost(response.data.post.text);
        setCommentCount(response.data.post.commentsCount);
        setComments(response.data.post.comments);
        setVotesCountPost(response.data.post.votesCount);
        setUserVoteDirection(response.data.post.userVoteDirection);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetails();
  });
  useProtect();
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Header>
          <LogoImg src={Logo} onClick={() => goToLoginPage(history)} />
          <ButtonTry color="primary" variant="contained">
            Logout
          </ButtonTry>
        </Header>
        <ContainerPost>
          <CardPost
            title={title}
            userName={userName}
            textPost={textPost}
            commentCount={commentCount}
            votesCountPost={votesCountPost}
            userVoteDirection={userVoteDirection}
          />
          <CommentComponent />

          {comments.map((comment) => {
            return (
              <Comment
                userName={comment.username}
                text={comment.text}
                votesCount={comment.votesCount}
                userVoteDirection={comment.userVoteDirection}
                getDetails={getDetails}
                commentId={comment.id}
              />
            );
          })}
        </ContainerPost>
      </ThemeProvider>
    </Container>
  );
}

export default PostPage;
