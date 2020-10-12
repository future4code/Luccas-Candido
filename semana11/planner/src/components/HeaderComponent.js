import React from "react";
import { Header, baseUrl } from "../styles";
import axios from "axios";
import { useForm } from "../hooks/useForm";

function HeaderComponent(props) {
  const { form, onChange, resetState } = useForm({
    text: "",
    day: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const createTask = () => {
    const body = {
      text: form.text,
      day: form.day,
    };

    const request = axios.post(`${baseUrl}`, body);

    request
      .then((response) => {
        console.log(response);
        resetState();
        props.getTask();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header>
        <form>
          <label>Nova Tarefa:</label>
          <input
            name="text"
            type="text"
            placeholder="Task"
            value={form.text}
            onChange={handleInputChange}
            required
          />
          <select
            name="day"
            onChange={handleInputChange}
            value={form.day}
            data-testid="select"
            required
          >
            <option value=""></option>
            <option value="domingo">Domingo</option>
            <option value="segunda">Segundona</option>
            <option value="terça">Terça</option>
            <option value="quarta">Quarta</option>
            <option value="quinta">Quinta</option>
            <option value="sexta">Sexta</option>
            <option value="sábado">Sábado</option>
          </select>
        </form>

        <button onClick={createTask}>Criar tarefa</button>
      </Header>
    </div>
  );
}

export default HeaderComponent;
