import express, { Express } from "express";
import cors from "cors";
import knex from 'knex'
import dotenv from "dotenv"
import { AddressInfo } from "net";
import {createUser} from  "./endpoint/createUser"
import {getUser} from "./endpoint/getUser"
import {editUser} from "./endpoint/editUser"
import {createTask} from "./endpoint/createTask"
import { getTaskById } from "./endpoint/getTaskById";
import { getAllUsers } from "./endpoint/getAllUsers"
import { getTaskByUserId } from "./endpoint/getTaskByUserId";
dotenv.config()

// ENV
export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME

    }
})

const app: Express = express();

app.use(express.json())
app.use(cors())


app.get("/user/all", getAllUsers)

app.get("/task", getTaskByUserId)

app.get("/user/:id", getUser)

app.get("/task/:id", getTaskById)

app.put("/user", createUser)

app.put("/task", createTask)

app.post("/user/edit/:id", editUser)








// Rodar server
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
 });