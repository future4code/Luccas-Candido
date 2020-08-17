import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

class EtapaUm extends React.Component {
  render() {
    return (
      <div className="container-etapa">
        <div>
          <h1>ETAPA 1 - DADOS GERAIS</h1>
          <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
          <PerguntaAberta pergunta={"2. Qual a sua idade?"} />
          <PerguntaAberta pergunta={"3. Qual o seu e-mail"} />
          <PerguntaOpcoes
            pergunta={"4. Qual sua escolaridade?"}
            opcoes={[
              "Ensino Médio Incompleto",
              "Ensino Médio Completo",
              "Ensino Superior Incompleto",
              "Ensino Superior Completo",
            ]}
          />
          <button onClick={this.props.funcaoClicar}>Próxima Etapa</button>
        </div>
      </div>
    );
  }
}

export default EtapaUm;
