import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

class EtapaTres extends React.Component {
  render() {
    return (
      <div className="container-etapa">
        <div>
          <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
          <PerguntaAberta
            pergunta={"7. Por que você não terminou um curso de graduação?"}
          />
          <PerguntaOpcoes
            pergunta={"8. Você fez algum curso complementar?"}
            opcoes={["Nenhum", "Curso Técnico", "Inglês"]}
          />
          <button onClick={this.props.funcaoClicar}>Próxima Etapa</button>
        </div>
      </div>
    );
  }
}

export default EtapaTres;
