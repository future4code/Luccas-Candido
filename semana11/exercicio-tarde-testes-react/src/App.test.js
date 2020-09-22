import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import App from "./App";

// 1. Teste
test("Botão adicionar post", () => {
  const { getByText, getByPlaceholderText } = render(<App />);

  const postButton = getByText(/Adicionar/i);

  fireEvent.click(postButton);

  const text = getByPlaceholderText(/Novo Post/i);

  expect(text).toHaveTextContent("Erro");
});
