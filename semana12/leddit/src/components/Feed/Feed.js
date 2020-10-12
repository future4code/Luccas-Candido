import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProtect } from "../../services/useProtect";
import Logo from "../../imgs/logo.png";
import { ThemeProvider } from "@material-ui/core/styles";
import { goToLoginPage } from "../../router/goToPages";
import { useHistory } from "react-router-dom";

// Styled

import {
  ContainerAll,
  ContainerPost,
  Header,
  LogoImg,
  Container,
  ButtonTry,
  theme,
} from "./styles";

// Component
import CardPost from "./CardPost";
import PostComponent from "./PostComponent";

function Feed() {
  const history = useHistory();
  const [posts, setPosts] = useState([]);

  // Pegar Post - API
  const getPost = () => {
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    request
      .then((response) => {
        console.log(response.data.posts);
        setPosts(response.data.posts);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getPost();
  });

  const logout = () => {
    localStorage.removeItem("token");
    goToLoginPage(history);
  };

  useProtect();
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Header>
          <LogoImg src={Logo} />
          <ButtonTry color="primary" variant="contained" onClick={logout}>
            Logout
          </ButtonTry>
        </Header>
        <ContainerAll>
          <ContainerPost>
            <PostComponent getPost={getPost} />
            {posts.map((post) => {
              return (
                <CardPost
                  title={post.title}
                  text={post.text}
                  username={post.username}
                  postId={post.id}
                  votesCount={post.votesCount}
                  commentsCount={post.commentsCount}
                  userVoteDirection={post.userVoteDirection}
                />
              );
            })}
          </ContainerPost>
        </ContainerAll>
      </ThemeProvider>
    </Container>
  );
}

export default Feed;
