import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EtapaUm from "./assets/EtapaUm";
import EtapaDois from "./assets/EtapaDois";
import EtapaTres from "./assets/EtapaTres";
import EtapaFinal from "./assets/EtapaFinal";
import styled from "styled-components";

class App extends React.Component {
  state = {
    etapa: 1,
  };

  onClickProximo = () => {
    this.setState({
      etapa: this.state.etapa + 1,
    });
  };

  render() {
    const renderizarPaginas = () => {
      switch (this.state.etapa) {
        case 1:
          return <EtapaUm funcaoClicar={this.onClickProximo} />;
        case 2:
          return <EtapaDois funcaoClicar={this.onClickProximo} />;
        case 3:
          return <EtapaTres funcaoClicar={this.onClickProximo} />;
        case 4:
          return <EtapaFinal funcaoClicar={this.onClickProximo} />;
      }
    };

    return <div className="App">{renderizarPaginas()}</div>;
  }
}

export default App;
