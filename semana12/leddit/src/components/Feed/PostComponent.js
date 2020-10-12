import React from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { useForm } from "../../services/useForm";
import Button from "@material-ui/core/Button";

import {
  Container,
  ContainerCreatePost,
  TextArea,
  TitleCreate,
} from "./styles";

function PostComponent(props) {
  const { form, onChange, resetState } = useForm({
    text: "",
    title: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const createPost = () => {
    const body = {
      text: form.text,
      title: form.title,
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
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
        props.getPost();
        resetState();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerCreatePost>
      <form onSubmit={handleSubmit}>
        <Container>
          <TitleCreate>Create post</TitleCreate>
          <TextField
            value={form.title}
            name={"title"}
            onChange={handleInputChange}
            label={"Title"}
            variant={"outlined"}
            type={"text"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
            inputProps={{
              title: "Insert post title",
            }}
          />
          <TextArea
            aria-label="maximum height"
            rowsMin={5}
            placeholder="Write your post"
            value={form.text}
            name={"text"}
            onChange={handleInputChange}
            type={"text"}
            inputProps={{
              title: "Insert text post",
            }}
            required
          />
          <Button
            color="primary"
            variant="contained"
            onClick={createPost}
            type="submit"
          >
            Create Post
          </Button>
        </Container>
      </form>
    </ContainerCreatePost>
  );
}

export default PostComponent;
