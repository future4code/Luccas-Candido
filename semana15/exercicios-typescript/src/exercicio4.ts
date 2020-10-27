type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// a) executaria o comando tsc + nome do arquivo para transpilar o arquivo em .js

// b) Se o arquivo estiver na pasta é só executar o comando + o path do arquivo.

// c) Utilizar apenas o comando tsc executa todos os arquivos na pasta.

// d) Existem muito mais opções habilitadas para o projeto quanto o nosso realizado durante a aula.
// O que chamou atenção foi o "sourceRoot" que permite especificar a localização de onde o debugger deveria
// localizar arquivos typescript em vez de utilização o caminho padrão/de origem.
