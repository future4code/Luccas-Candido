import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());


type trasactions = {
  value: number,
  date: Date,
  description: string
}


type user = {
  id: number,
  name: string,
  age: number
}

type conta = {
  extract: trasactions[]
}

const users:user[] = [] 

const contas:conta[] = []

const deal = []



// Pegar usuário
app.get("/users", (req:Request, res:Response) => {

  try {
    res.status(200).send(users)

  } catch(error) {
    res.status(400).send({message: "Erro Inserting Data"})
  }

})


// Criar usuário!
app.post("/users", (req:Request, res:Response) => {

  try {

    const {id, name, age} = req.body

    const user:user = {
      id: id,
      name: name,
      age: age
    }

    const userExist = users.find((u) => {
      return u.id === user.id
    })

    if(userExist) {
      res.status(400).send({message: "User already exist"})
    } else if(user.age > 18) {
      users.push(user)
      res.status(200).send({message: "User created sucesfully"})
    } else {
      res.status(400).send({message: "User under age!"})
    }


  } catch(error) {
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