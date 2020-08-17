import React from "react";
import PerguntaAberta from "./PerguntaAberta";

class EtapaDois extends React.Component {
  render() {
    return (
      <div className="container-etapa">
        <div>
          <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
          <PerguntaAberta pergunta={"5. Qual curso?"} />
          <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
          <button onClick={this.props.funcaoClicar}>Próxima Etapa</button>
        </div>
      </div>
    );
  }
}

export default EtapaDois;
