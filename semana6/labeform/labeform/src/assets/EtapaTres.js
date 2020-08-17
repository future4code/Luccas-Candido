import React from "react";

class EtapaTres extends React.Component {
  render() {
    return (
      <div className="container-etapa">
        <div>
          <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
          <h3>7. Por que você não terminou um curso de graduação?</h3>
          <input />
          <h3>8. Você fez algum curso complementar?</h3>
          <select>
            <option value="nenhum">Nenhum</option>
            <option value="curso-tecnico">Curso Técnico</option>
            <option value="ingles">Ingles</option>
          </select>
          <button onClick={this.props.funcaoClicar}>Próxima Etapa</button>
        </div>
      </div>
    );
  }
}

export default EtapaTres;
