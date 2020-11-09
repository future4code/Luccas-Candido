### Exercício 1

a) Strings são boas para fazer variações de caracteres e tornar o ID único.

b)

```
export const generateId = () => {
    return v4()
}
```

### Exercício 2

a) O código acima está inserindo um usuário com id, email e password na tabela de usuários.

b)

```
CREATE TABLE user_class_50 (
id INT NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);
```

c)

```
const result = await connection
    .insert({
        id,
        name,
        email,
        password
    })
    .into("user_class_50")

    return result

}
```

### Exercício 3

a) Porque a key que recebemos para o usuário precisa ser em string.
b)

```
type AuthenticatorData = {
    id:string
}


export const generateToken = (input:AuthenticatorData):string => {

    const token = jwt.sign({
        id:input.id
    },
        process.env.JWT_KEY as string,
    {
        expiresIn: "10min"
    }
    )

    return token
}
```
