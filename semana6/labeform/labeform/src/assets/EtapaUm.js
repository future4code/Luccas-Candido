import React from "react";

class EtapaUm extends React.Component {
  render() {
    return (
      <div className="container-etapa">
        <div>
          <h1>ETAPA 1 - DADOS GERAIS</h1>
          <h3>1. Qual o seu nome?</h3>
          <input />
          <h3>2. Qual a sua idade?</h3>
          <input />
          <h3>3. Qual o seu e-mail?</h3>
          <input />
          <h3>4. Qual a sua escolaridade??</h3>
          <select>
            <option value="ensino-medio-completo">
              Ensino Médio Incompleto
            </option>
            <option value="ensino-medio-completo">Ensino Médio Completo</option>
            <option value="ensino-medio-completo">
              Ensino Superior Incompleto
            </option>
            <option value="ensino-medio-completo">
              Ensino Superior Completo
            </option>
          </select>
          <button onClick={this.props.funcaoClicar}>Próxima Etapa</button>
        </div>
      </div>
    );
  }
}

export default EtapaUm;
