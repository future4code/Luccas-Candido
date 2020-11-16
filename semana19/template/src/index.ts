import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { createUser } from './controller/user/createUser'
import { AddressInfo } from "net";



dotenv.config()



const app = express()
app.use(express.json())
app.use(cors())



app.put("/signup", createUser)


const server = app.listen(process.env.PORT || 3000, () => {
   if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost:${address.port}`);
   } else {
     console.error(`Failure upon starting server.`);
   }
 });