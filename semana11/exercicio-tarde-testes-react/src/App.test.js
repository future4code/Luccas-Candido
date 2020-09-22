import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import App from "./App";

// 1. Teste
test("Botão adicionar post", () => {
  const { getByPlaceholderText } = render(<App />);

  const postButton = getByPlaceholderText(/Novo Post/i);

  fireEvent.click(postButton);

  let text = getByText(/Erro/i);

  expect(text).toHaveTextContent("Erro");
});
