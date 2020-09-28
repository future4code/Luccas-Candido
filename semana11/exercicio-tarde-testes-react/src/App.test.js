import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import App from "./App";

// 1. Teste
test("Botão adicionar post", () => {
  const { getByText, getByPlaceholderText } = render(<App />);

  const text = getByPlaceholderText(/Novo Post/i);
  const button = getByText(/Adicionar/i);

  expect(text).toHaveTextContent("Erro");
});
