import React from "react";

class PerguntaOpcoes extends React.Component {
  render() {
    const selectMap = this.props.opcoes.map((select) => {
      return <option value={select}>{select}</option>;
    });
    return (
      <div className="container-etapa">
        <h3>{this.props.pergunta}</h3>
        <select>{selectMap}</select>
      </div>
    );
  }
}

export default PerguntaOpcoes;
