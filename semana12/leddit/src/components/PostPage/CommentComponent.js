import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useForm } from "../../services/useForm";
import Button from "@material-ui/core/Button";

import { Container, TextArea, ContainerCreatePost } from "./styles";

function CommentComponent(props) {
  const { form, onChange, resetState } = useForm({
    text: "",
  });

  const pathParams = useParams();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const createComment = () => {
    const body = {
      text: form.text,
    };

    const request = axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}/comment`,
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
        resetState();
        props.getDetails();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerCreatePost>
      <form onSubmit={handleSubmit}>
        <Container>
          <TextArea
            aria-label="maximum height"
            rowsMin={5}
            placeholder="Write your comment"
            value={form.text}
            name={"text"}
            onChange={handleInputChange}
            type={"text"}
            required
          />
          <Button
            color="primary"
            variant="contained"
            onClick={createComment}
            type="submit"
          >
            Comment
          </Button>
        </Container>
      </form>
    </ContainerCreatePost>
  );
}

export default CommentComponent;
