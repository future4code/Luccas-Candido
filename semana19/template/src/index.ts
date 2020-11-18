import express from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { createUser } from './controller/user/createUser';
import { connection } from './data/connection';
import login from './controller/user/login';
import { getUsers } from './controller/user/getUsers';

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})

app.get("/all", getUsers)

app.put("/user/signup", createUser)

app.post("/user/login", login)


const server = app.listen(process.env.PORT || 3000, () => {
   if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost:${address.port}`);
   } else {
     console.error(`Failure upon starting server.`);
   }
 });