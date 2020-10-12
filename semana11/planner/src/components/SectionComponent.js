import React from "react";
import { Section, DivPlanner, baseUrl } from "../styles";
import { useState, useEffect } from "react";
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent";

function SectionComponent() {
  const [task, setTask] = useState([]);

  // Requisição de pegar tasks
  const getTask = () => {
    const request = axios.get(`${baseUrl}`);

    request
      .then((response) => {
        console.log(response.data);
        setTask(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTask();
  }, []);

  // Requisição de delete
  const deleteTask = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);

    request
      .then((response) => {
        console.log(response);
        getTask();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Função pra renderizar condicionalmente os dias.

  const taskDays = (day) => {
    const renderDays = task.map((task) => {
      if (task.day === day) {
        return (
          <div>
            <p>
              {task.text}{" "}
              <button onClick={() => deleteTask(task.id)}>Deletar</button>
            </p>
          </div>
        );
      }
    });

    return renderDays;
  };

  return (
    <div>
      <HeaderComponent getTask={getTask} />
      <Section>
        <DivPlanner>
          <h1>Domingo</h1>
          {taskDays("domingo")}
        </DivPlanner>
        <DivPlanner>
          <h1>Segunda</h1>
          {taskDays("segunda")}
        </DivPlanner>
        <DivPlanner>
          <h1>Terça</h1>
          {taskDays("terça")}
        </DivPlanner>
        <DivPlanner>
          <h1>Quarta</h1>
          {taskDays("quarta")}
        </DivPlanner>
        <DivPlanner>
          <h1>Quinta</h1>
          {taskDays("quinta")}
        </DivPlanner>
        <DivPlanner>
          <h1>Sexta</h1>
          {taskDays("sexta")}
        </DivPlanner>
        <DivPlanner>
          <h1>Sábado</h1>
          {taskDays("sábado")}
        </DivPlanner>
      </Section>
    </div>
  );
}

export default SectionComponent;
