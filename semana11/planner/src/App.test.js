import React from "react";
import { render, fireEvent, screen, wait } from "@testing-library/react";
import App from "./App";
import axios from "axios";
import userEvent from "@testing-library/user-event";

axios.get = jest.fn().mockResolvedValue({
  data: [],
});

axios.post = jest.fn().mockResolvedValue({});
axios.put = jest.fn().mockResolvedValue();
axios.delete = jest.fn().mockResolvedValue();

describe("planner", () => {
  const createTask = async (taskText, option) => {
    const input = screen.getByPlaceholderText("Task");
    const select = screen.getByTestId("select");

    await userEvent.type(input, taskText);
    userEvent.selectOptions(select, screen.getByText(option));

    expect(input).toHaveValue(taskText);

    const button = screen.getByText("Criar tarefa");

    userEvent.click(button);
  };

  const createTaskRender = async () => {
    const utils = render(<App />);

    await createTask("teste", "Segundona");

    return utils;
  };

  test("criar task", async () => {
    axios.post = jest.fn().mockResolvedValue();
    axios.get = jest.fn().mockResolvedValue({ data: [] });

    await createTaskRender();

    expect(axios.post).toHaveBeenCalledWith(
      "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-luccas",
      {
        text: "teste",
        day: "",
      }
    );

    await wait(() => {
      expect(axios.get).toHaveBeenCalledTimes(2);
    });
  });
});
