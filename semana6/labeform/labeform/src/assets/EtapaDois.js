import React from "react";

class EtapaDois extends React.Component {
  render() {
    return (
      <div className="container-etapa">
        <div>
          <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
          <h3>5. Qual curso?</h3>
          <input />
          <h3>6. Qual a unidade de ensino?</h3>
          <input />
          <button onClick={this.props.funcaoClicar}>Próxima Etapa</button>
        </div>
      </div>
    );
  }
}

export default EtapaDois;
