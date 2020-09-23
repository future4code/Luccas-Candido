import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

// 1.
test("Confirmar posts sendo inseridos", () => {
  const { getByText, getByPlaceholderText, queryAllByTestId } = render(<App />);

  const text = getByPlaceholderText(/Novo Post/i);
  const button = getByText(/Adicionar/i);

  fireEvent.change(text, { target: { value: "teste" } });

  const post = queryAllByTestId("teste");

  fireEvent.click(button);

  let contador = getByText(/Quantidade/i);

  expect(contador).toHaveTextContent("Quantidade de Post: 1");
  expect(post).not.toBeNull();

  fireEvent.change(text, { target: { value: "teste2" } });
  fireEvent.click(button);

  expect(contador).toHaveTextContent("Quantidade de Post: 2");
});
