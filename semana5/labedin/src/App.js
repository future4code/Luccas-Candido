import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://purepng.com/public/uploads/large/purepng.com-stormtrooper-helmetstormtrooperfictional-soldierstar-warsground-forcegalactic-empire-1701527827802bs8vo.png" 
          nome="Luccas de Barros" 
          descricao="Olá, sou o Luccas, estudante da Labenu e aspirante a desenvolvedor full-stack. Descobri que programar é algo que gosto muito e batalho pra tornar isso uma realidade profissional."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/proxy/W3BuPJO3DJpmAWuusckDf7xsNToFKqVXt4_L-p2X42hcklYhX8C1CCzzGXlZXZsUNG-iQsaVuCLze7yhHcId6QqIQLC5XTyPRijTdNPm9GkAHLoeM6qNCrTuO6aF" 
          nome="Departamento de Química - UFLA" 
          descricao="Desenvolvendo software na area de química computacional em FORTRAN para descobrir comportamento de moléculas e a força de suas ligações" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Descobrindo partículas misteriosas que regem nosso universo." 
        />
      </div>

      <div className="page-section-container-small">
        <h2>Informações</h2>
        <CardPequeno
        descricaoEmail="E-Mail: "
        descricaoEndereco="Endereco: "
        email="ldbcandido@gmail.com"
        endereco="R: XXX, Cidade: Lavras - MG"/>
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
