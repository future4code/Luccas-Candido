import express from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import { AddressInfo } from "net";
import { signUp } from './endpoints/signUp';
import { login } from './endpoints/login';
import { getOwnProfile } from './endpoints/getOwnProfile';
import { getProfileById } from './endpoints/getProfileById';
import { createRecipe } from './endpoints/createRecipes';
import { getRecipesById } from './endpoints/getRecipesById';
import { followUser } from './endpoints/followUser';
import { unfollow } from './endpoints/unfollow';
import { getAllRecipes } from './endpoints/getAllRecipes';
import { editRecipe } from './endpoints/editRecipe';
import { deleteRecipe } from './endpoints/deleteRecipe';


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

app.post("/recipe", createRecipe)

app.post("/user/follow", followUser)

app.post("/user/unfollow", unfollow)

app.post("/edit/recipe", editRecipe)

app.get("/user/profile", getOwnProfile)

app.get("/user/:id", getProfileById)

app.get("/recipe/:id", getRecipesById)

app.get("/feed", getAllRecipes)

app.delete("/delete/recipe/:id", deleteRecipe)








const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });