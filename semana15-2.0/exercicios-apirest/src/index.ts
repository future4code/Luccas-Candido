import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

type User = {
  id: number;
  name: string;
  email: string;
  type: UserType;
  age: number;
};

let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60,
  },
];

// Pegar todos os usuários
app.get("/users", (req: Request, res: Response): void => {
  try {
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({
      message: "Error searching for users.",
    });
  }
});

// Pegar usuários pelo tipo.
// app.get("/users/:type", (req: Request, res: Response): void => {
//   try {
//     const usersByType = users.filter((user) => {
//       return user.type === req.params.type;
//     });

//     if (usersByType.length === 0) {
//       res.status(404).send({
//         message: "Not Found",
//       });
//     } else {
//       res.status(200).send(usersByType);
//     }
//   } catch (erro) {
//     res.status(400).send({
//       message: "Error searching for user",
//     });
//   }
// });

// Pegar por nome
app.get("/users/:name", (req: Request, res: Response): void => {

  try {

    const usersByName = users.filter((user) => {
      return user.name === req.params.name;
    });

    if(usersByName.length === 0) {
        res.status(404).send({
            message: "Not Found"
        })
    } else {
    res.status(200).send(usersByName);

    }

  } catch {
    res.status(400).send({
      message: "Erro searching for users",
    });
  }
});


// Criar usuário.
app.post("/users", (req: Request, res:Response) => {

    try {
        
        const {id, name, email, age, type} = req.body

        const user: User = {
            id: id,
            name: name,
            email: email,
            type: type,
            age: age
        }

        const userExist = users.find((u) => {
            return u.id === user.id
        })


        if(userExist) {
            res.status(400).send({message: "Id already exist"})

        } else {
            users.push(user)
            res.status(200).send({message: "User created sucessfully"})

        }



    } catch(erro) {
        res.status(400).send({message: "Erro Inserting Data"})
    }

})

// Edita usuário.
app.put("/users", (req:Request, res:Response) => {
    try {

        const {name, id} = req.body

        const userIndex = users.findIndex((u) => {
            return u.id === id
        })

        if(userIndex === -1) {
            throw new Error()
        }

        users[userIndex].name = name;

        res.status(200).send({message: "User modified sucessfully!"})




    } catch(error) {
        res.status(400).send({message: "Error inserting data"})
    }
})

// realteração dados
app.patch("/users", (req:Request, res:Response) => {

    const {id, name} = req.body


    try {

        const userIndex = users.findIndex((u) => {
            return u.id === id
        })

        if(userIndex === -1) {
            throw new Error()
        }

        users[userIndex].name = name

        res.status(200).send({message: "Changed again!"})



    } catch(erro) {
        res.status(400).send({message: "Erro inserting data!"})
    }
})

app.delete("/users/:id", (req:Request, res:Response) => {
    
    try {

        const userToDelete = users.findIndex((u) => {
            return u.id === Number(req.params.id)
        })

        if(userToDelete === -1) {
            throw new Error()
        }

        users.splice(userToDelete, 1)
        res.status(200).end()


    } catch {
        res.status(400).send({message: "Erro Inserting Data"})
    }
})

// Rodar servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
