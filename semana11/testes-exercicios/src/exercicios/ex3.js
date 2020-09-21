// função refatorada com poucas linhas, utilizando o método set.
// utilizando a propriedade size, contando os números do array;
// O Set conta valores únicos, sendo assim, ele retorna os valores sem os repetidos.
// Comparando isso ao tamanho do array, conseguimos remover os itens duplicados.
export function checaItensDuplicados(array) {
  return new Set(array).size !== array.length;
}
