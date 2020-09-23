import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputControl, setInputControl] = useState(false);
  const [counter, setCounter] = useState(0);

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    // Adiciona um post à lista
    const newPost = {
      id: Date.now(),
      text: inputValue,
      liked: false,
    };

    const newPostsList = [newPost, ...postsList];
    if (newPost.text === "") {
      setInputControl(true);
    } else if (newPost.text !== "") {
      setInputControl(false);
      setPostsList(newPostsList);
      setCounter(counter + 1);
    }

    setInputValue("");
  };

  const deletePost = (postId) => {
    // Apaga um post da lista
    const newPostsList = postsList.filter((post) => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
    setCounter(counter - 1);
  };

  const toggleLike = (postId) => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map((post) => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked,
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />
      {inputControl === true && (
        <div>
          <p>Erro</p>
        </div>
      )}

      {(postsList.length === 0 && <h1>Nenhum Post T-T</h1>) || (
        <p>Quantidade de Post: {counter}</p>
      )}

      {inputControl === false &&
        postsList.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              toggleLike={toggleLike}
              deletePost={deletePost}
              data-testid={"teste"}
            />
          );
        })}
    </div>
  );
};

export default App;
