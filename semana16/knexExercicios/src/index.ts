import express, { Express, Request, Response } from "express";
import cors from "cors";
import knex from 'knex'
import dotenv from "dotenv"
import { AddressInfo } from "net";
import { getActorGender } from "./endpoint/getActorGender";
import { getActorId } from "./endpoint/getActorId";
import { putActor } from "./endpoint/putActor";


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


app.get("/actor/:id", getActorId)

app.get("/actor", getActorGender)

app.put("/acator", putActor)




// Rodar server
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
 });