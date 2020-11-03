### Exercício 1

a) Estou removendo a coluna 'salary' da tabela Actor.

b) Estou trocando o tipo gênero, para sex e limitando os caracteres

c) Estou alterando o tipo gender, com uma quantidade de caracteres maiores.

d) ```ALTER TABLE Actor change gender gender VARCHAR(100)```

### Exercício 2

a) 

```
UPDATE Actor
SET birth_date = "1929-10-16"
WHERE id = "003";
```
```
UPDATE Actor
SET name = "Fernanda Montenegro da Silva"
WHERE id = "003";
```
b)

```
UPDATE Actor
SET name = "Juliana Pães"
WHERE id = "005";
```

```
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";
```
c)
```
UPDATE Actor 
SET name = "Tainá Müller", salary = 15000, birth_date = "1982-06-01", 
gender = "female", type = DEFAULT
WHERE id = "005";
```

d) Se tentar setar uma coluna inválida, o sistema retorna um erro informando
que o dado inserido não existe. Caso eu insira um dado normal, como "salary"
e um id inválido, ele não retorna erro mas não realiza nenhuma modificação.

### Exercício 3

a) ``` DELETE FROM Actor WHERE name = "Fernanda Montenegro da Silva" ```
b) ``` DELETE FROM Actor WHERE gender = "male" AND salary > 1000000 ```

### Exercício 4

a) ``` SELECT MAX(salary) FROM Actor ```
b) ``` SELECT MIN(salary) FROM Actor WHERE gender = "female" ```
c) ``` SELECT COUNT(*) FROM Actor WHERE gender = "female" ```
d) ``` SELECT SUM(salary) FROM Actor ```

### Exercício 5

a) Essa query conta os dados presentes separados por gêneros. Ou seja, retorna
quantos "males" e "females" tem, separadamente.

b) 
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c)
```
SELECT * FROM Actor
ORDER BY salary;
```

d) 
```
SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3;
```
e)
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender
```

### Exercício 6

a) ```ALTER TABLE Movies ADD playing_limit_date VARCHAR(255)```
b) ``` ALTER TABLE Movies change rating rating FLOAT ```
c)
```
UPDATE Movies
SET playing_limit_date = "2020-11-02"
WHERE id = "001";
```
```
UPDATE Movies
SET playing_limit_date = "2017-01-13"
WHERE id = "002";

```
d) ```DELETE FROM Movies WHERE id = "001"```
```
UPDATE Movies 
SET synopsis = "Uma sinopse!"
WHERE id = "001";
```
Consigo realizar a operação mas não há nenhum dado pra ser alterado, já que o dado que contem o id 001 foi removido.

### Exercício 7
a) 
```
SELECT COUNT(rating) FROM Movies
WHERE rating > 7.5;
```
b)```SELECT AVG(rating) FROM Movies;```

c)
```
SELECT COUNT(*) FROM Movies
WHERE playing_limit_date > CURDATE();
```

d)
```
SELECT COUNT(*) FROM Movies
WHERE release_date > CURDATE();
```
e) ``` SELECT MAX(rating) FROM Movies ```

f) ```SELECT MIN(rating) FROM Movies;```

### Exercício 8

a) 
```
SELECT * FROM Movies
ORDER BY title ASC;
```
b)
```
SELECT * FROM Movies
ORDER BY title DESC LIMIT 5;
```
c)
```
SELECT title, release_date FROM Movies
ORDER BY release_date DESC LIMIT 3;
```
d)
```
SELECT title, rating FROM Movies
ORDER BY rating DESC LIMIT 3;
```

