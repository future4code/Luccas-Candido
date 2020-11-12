import express from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import { AddressInfo } from "net";
import { signUp } from './endpoints/signUp';
import { login } from './endpoints/login';
import { getOwnProfile } from './endpoints/getOwnProfile';


dotenv.config()

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
app.use(express.json())


app.post("/signup", signUp)

app.post("/login", login)

app.get("/user/profile", getOwnProfile)







const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });