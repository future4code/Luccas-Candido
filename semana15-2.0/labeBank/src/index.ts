import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

enum BALANCE {
  BALANCE = 0,
}

const myDate: Date = new Date();

type trasactions = {
  value: number;
  date: Date;
  description: string;
};

type user = {
  id: number;
  cpf: number;
  name: string;
  age: number;
  balance: BALANCE.BALANCE;
  account: accountType;
};

type accountType = {
  extract: trasactions[];
};

const users: user[] = [];

// Pegar usuário
app.get("/users", (req: Request, res: Response) => {
  try {
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ message: "Erro Inserting Data" });
  }
});

// Usuário
app.get("/users/:cpf", (req: Request, res: Response) => {
  try {
    const userByCpf = users.filter((u) => {
      return u.cpf === Number(req.params.cpf);
    });

    const balanceUser = userByCpf.map((user) => {
      return user.balance;
    });

    if (userByCpf.length === 0) {
      res.status(404).send({ message: "User not found!" });
    } else {
      res.status(200).send(balanceUser);
    }
  } catch (error) {
    res.status(400).send({ message: "Error inserting data!" });
  }
});

// Criar usuário!
app.post("/users", (req: Request, res: Response) => {
  try {
    const { id, cpf, name, age } = req.body;

    const user: user = {
      id: id,
      cpf: cpf,
      name: name,
      age: age,
      balance: BALANCE.BALANCE,
      account: {
        extract: [],
      },
    };

    const userExist = users.find((u) => {
      return u.id === user.id || u.cpf === user.cpf;
    });

    if (userExist) {
      res.status(400).send({ message: "User already exist" });
    } else if (user.age > 18) {
      users.push(user);
      res.status(200).send({ message: "User created sucesfully" });
    } else {
      res.status(400).send({ message: "User under age!" });
    }
  } catch (error) {
    res.status(400).send({ message: "Erro Inserting Data" });
  }
});

// Pagamento de Contas
app.post("/payment", (req: Request, res: Response) => {
  try {
    let { date, description, value, cpf } = req.body;

    const userIndex = users.findIndex((u) => {
      return u.cpf === cpf;
    });

    if (userIndex === -1) {
      throw new Error();
    }

    if (date === "") {
      date = myDate;
    } else {
      const arrayDate = date.split("/");
      date = new Date(arrayDate[2], arrayDate[1] - 1, arrayDate[0]);
    }

    const extractPayment: trasactions = {
      value: value,
      date: date,
      description: description,
    };

    // Pagamento só realizado se a data for atual! (Endpoint 7)
    if (date.getDate() < myDate.getDate()) {
      res.status(404).send({ message: "Invalid Date!" });

    } else {

      users[userIndex].cpf = cpf;
      users[userIndex].account.extract.push(extractPayment);

      res.status(200).send({ message: "Payment Accept!" });
    }
  } catch (error) {
    res.status(400).send({ message: "Error Inserting Data!" });
  }
});

// Adicionar saldo ao usuário
app.put("/users", (req: Request, res: Response) => {
  try {
    const { name, cpf, value } = req.body;

    const userCpf = users.findIndex((u) => {
      return u.cpf === cpf && u.name === name;
    });

    if (userCpf === -1) {
      throw new Error();
    }

    users[userCpf].balance += value;

    const extractAccount: trasactions = {
      value: value,
      date: myDate,
      description: "Depósito em Dinheiro",
    };

    users[userCpf].account.extract.push(extractAccount);

    res.status(200).send({ message: `Added ${value} to user balance!` });
  } catch (error) {
    res.status(404).send({ message: "Error inserting data!" });
  }
});

// Atualiza saldo

app.put("/users/update", (req: Request, res: Response) => {
  try {
    
    // Atualização do saldo apenas para datas anteriores (endpoint 6)
    const extractUser = users.filter((u) => {
      u.account.extract.filter((extract) => {
        if (extract.description !== "Depósito em Dinheiro") {
          if (extract.date.getDate() < myDate.getDate()) {
            return (u.balance -= extract.value);
          }
        }
      });
    });

    res.status(200).send(extractUser);
  } catch (error) {
    res.status(400).send({ message: "Error Inserting Data!" });
  }
});

// Rodar servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
