/**************************** IMPORTS ******************************/

import express, { Express } from "express"
import cors from "cors"
import { userRouter } from "./routes/userRoutes"
import { postRouter } from "./routes/postRoutes"
import { AddressInfo } from "net";

const app: Express = express()
app.use(express.json())
app.use(cors())



app.use("/user", userRouter)

app.use('/post', postRouter)

// app.get('/posts/:id', async (req: Request, res: Response) => {
//    try {
//       let message = "Success!"

//       const { id } = req.params

//       const queryResult: any = await connection("labook_posts")
//          .select("*")
//          .where({ id })

//       if (!queryResult[0]) {
//          res.statusCode = 404
//          message = "Post not found"
//          throw new Error(message)
//       }

//       const post: Post = {
//          id: queryResult[0].id,
//          photo: queryResult[0].photo,
//          description: queryResult[0].description,
//          type: queryResult[0].type,
//          createdAt: queryResult[0].created_at,
//          authorId: queryResult[0].author_id,
//       }

//       res.status(200).send({ message, post })

//    } catch (error) {
//       let message = error.sqlMessage || error.message
//       res.statusCode = 400

//       res.send({ message })
//    }
// })

/**************************** SERVER INIT ******************************/

const server = app.listen(process.env.PORT || 3000, () => {
   if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost:${address.port}`);
   } else {
     console.error(`Failure upon starting server.`);
   }
 });