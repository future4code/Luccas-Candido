### Exercício 1
a) R: O ID é inserido um VARCHAR porque pode ser uma variável qualquer, mas poderia ser INT, para dar uma identificação única para o Actor.
O name segue o padrão de VARCHAR como string,
o birth_date recebe um tipo Date, no qual obrigatoriamente receberá uma data e o gender recebe 
um tipo string com no máximo 6 caracteres, obedecendo o máximo de caracteres entre os gêneros "male" e "female".


b) O comando SHOW TABLE nos mostra as tabelas dentro daquele schema, e o SHOW DATABASES, nos mostra
o conteúdo dentro do nosso banco de dados. 

c) O comando DESCIBRE nos mostra todos os campos que nossa query possui, e seus respectivos types.

### Exercício 2


b) O erro indica que o id cadastrado já existe, isso faz com que não tenhamos a possibilidade
de criar usuários duplicados.

c) Esse erro aconteceu porque os valores não combinam com os parâmetros da tabela Actor.

d)Erro 1364: Diz que o campo "name" não possui um valor padrão, ou seja, como não estamos inserindo um nome
e por obrigatoriedade que decidimos com o "NOT NULL", não podemos não passar um NOME.

e) Data incorreta. O modo como a data tá sendo inserida não combina com o modo que a data tem que ser preenchida. YYYY-MM-DD


### Exercício 3

a) ``` SELECT * from Actor WHERE gender = "female" ```
b) ``` SELECT salary from Actor WHERE name = "Tony Ramos" ```
c) O resultado foi nulo devido ao valor informado não corresponder a um tipo de gender.
d) ``` SELECT id, name, salary from Actor WHERE salary > 500000 ```
e) Nome não existe. O nome do valor é "name".
Correção: ``` SELECT id, name, salary from Actor WHERE salary > 500000 ```

### Exercício 4
```SELECT name from Actor WHERE name LIKE "A%" OR name LIKE "J%"```
``` SELECT name from Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000  ```

a) A query acima nos retorna pessoa com nome que possuam "A" ou "J" com o salário maior que R$300.000
b) ``` SELECT name from Actor WHERE name NOT LIKE "A%" AND salary > 350000 ```
c) ``` SELECT name from Actor WHERE name LIKE "%G%" OR name LIKE "%g%" ```
d) ``` SELECT name from Actor WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000 ```

### Exercício 5

a) A diferença do Tipo TEXT é que consegue armazenar uma quantidade de dados maior 

``` CREATE TABLE Movies (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
sinopse TEXT NOT NULL,
release_date DATE NOT NULL,
rating INT (10) NOT NULL
);```

### Exercício 6

a) ``` SELECT id, title, rating FROM Movies WHERE id = "001" ```
b) ``` SELECT * FROM Movies WHERE title LIKE "%compadecida%" ```
c)``` SELECT id, title, synopsis FROM Movies WHERE rating > 7 ```

### Exercício 7

a) ``` SELECT * FROM Movies WHERE title LIKE "%vida%" ```
b) ``` SELECT * FROM Movies WHERE title LIKE "%compadecida%" OR synopsis LIKE "%compadecida%" ```
c) ``` SELECT * FROM Movies WHERE release_date < "2020-10-25" ```
d) ```
SELECT * FROM Movies WHERE release_date < "2020-10-25" AND (title LIKE "%compadecida%" OR synopsis LIKE "%compadecida%") AND rating > 7 ```

XD




