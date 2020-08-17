import React from "react";

class PerguntaAberta extends React.Component {
  render() {
    return (
      <div className="container-etapa">
        <h3>{this.props.pergunta}</h3>
        <input />
      </div>
    );
  }
}

export default PerguntaAberta;
