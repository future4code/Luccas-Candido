import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

enum BALANCE {
  BALANCE = 0
}

type trasactions = {
  value: number,
  date: Date,
  description: string
}


type user = {
  id: number,
  cpf: number,
  name: string,
  age: number,
  balance: BALANCE.BALANCE,
  account: accountType
}

type accountType = {
  extract: trasactions[]
}

const users:user[] = []




// Pegar usuário
app.get("/users", (req:Request, res:Response) => {

  try {
    res.status(200).send(users)

  } catch(error) {
    res.status(400).send({message: "Erro Inserting Data"})
  }

})

// Usuário 
app.get("/users/:cpf", (req:Request, res:Response) => {

  try {

    const userByCpf = users.filter((u) => {
      return u.cpf === Number(req.params.cpf)
    })

    const balanceUser = userByCpf.map((user) => {
      return user.balance
    })

    if(userByCpf.length === 0) {
      res.status(404).send({message: "User not found!"})
    } else {
      res.status(200).send(balanceUser)
    }


  } catch(error) {
    res.status(400).send({message:"Error inserting data!"})
  }

})

// Criar usuário!
app.post("/users", (req:Request, res:Response) => {

  try {

    const {id,cpf, name, age} = req.body

    const user:user = {
      id: id,
      cpf: cpf,
      name: name,
      age: age,
      balance: BALANCE.BALANCE,
      account: {
        extract: []
      }
    }

    const userExist = users.find((u) => {
      return u.id === user.id || u.cpf === user.cpf
    })

    if(userExist) {
      res.status(400).send({message: "User already exist"})
    } 
    
      else if(user.age > 18) {
      users.push(user)
      res.status(200).send({message: "User created sucesfully"})
    } 

      else {
      res.status(400).send({message: "User under age!"})
    }


  } catch(error) {
    res.status(400).send({message: "Erro Inserting Data"})
  }

})

// Adicionar saldo ao usuário
app.put("/users", (req: Request, res:Response) => {

  try {

    const {name, cpf, value} = req.body

    const userCpf = users.findIndex((u) => {
      return u.cpf === cpf && u.name === name
    })

    if(userCpf === -1) {
      throw new Error()
    }

    users[userCpf].balance += value

    res.status(200).send({message: `Added ${value} to user balance!`})

  } catch(error) {
    res.status(404).send({message: "Error inserting data!"})
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