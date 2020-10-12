import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

// 1.
test("Confirmar posts sendo inseridos", () => {
  const { getByText, getByPlaceholderText, getAllByText } = render(<App />);

  const text = getByPlaceholderText(/Novo Post/i);
  const button = getByText(/Adicionar/i);

  fireEvent.change(text, { target: { value: "teste" } });

  fireEvent.click(button);

  // Quantidade de posts
  let contador = getByText(/Quantidade/i);

  expect(contador).toHaveTextContent("Quantidade de Post: 1");

  fireEvent.change(text, { target: { value: "teste2" } });
  fireEvent.click(button);

  const post = getByText("teste2");

  expect(post).toBeInTheDocument();
  expect(contador).toHaveTextContent("Quantidade de Post: 2");

  // Botão Curtir
  const likeButton = getAllByText("Curtir");

  fireEvent.click(likeButton[1]);

  expect(likeButton[1]).toHaveTextContent("Descurtir");
});
