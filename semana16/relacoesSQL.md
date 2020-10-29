### Exercício 1

a) Usamos uma chave estrangeira para relacionar uma tabela com a outra.
Ela deve sempre referenciar uma primary key da outra tabela

b)
```
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES(
"001",
"Muito bom. Um clássico brasileiro!",
10,
"004"
);
```

c) Não podemos atualizar uma "child row". Não conseguimos atualizar um id inválido.

d) ```ALTER TABLE Movies DROP COLUMN rating;```

e) Não podemos deletar um "parent row". Isso significa que não podemos deletar um dado que está relacionado com outra tabela.

### Exercício 2

a) Esta tabela referencia um filme um ator ao id das tabelas respectivas de filmes e atores/atrizes.

b) 
Criação exemplo:
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUE(
"002",
"001"
);
```

c) Erro que não pode atualizar/inserir uma child row. Ou seja, não conseguimos relacionar um id inexistente a essa tabela.

d) Não podemos deletar um parent row. Estamos tentando deletar um dado que está relacionado com a tabela de elenco. 

### Exercício 3

a) O operador ON nos permite dar uma condição pra junção das nossas tabelas. 
Neste caso estou juntando as informações do filme que estão relacionadas com a tabela de rating, onde o ID do filme tem que ser relacionado com o ID da tabela de rating.

b)
```
SELECT m.id as movie_id, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;
```
