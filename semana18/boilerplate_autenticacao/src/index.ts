import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { createUser } from "./endpoint/createUser";
import { login } from "./endpoint/login";
import { getProfile } from "./endpoint/getProfile";
import { deleteUser } from "./endpoint/deleteUser";


dotenv.config();

export const connection = knex({
  client: 'mysql',
  connection: {
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME,
     port: 3306
  }
})


const app = express();
app.use(express.json());


app.post("/user", createUser)

app.post("/login", login)

app.get("/user/profile", getProfile )

app.delete("/user/:id", deleteUser)





const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});