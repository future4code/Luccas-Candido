import express from "express"
import PostController from "../controller/PostController"
import UserController from "../controller/UserController"


export const userRouter = express.Router()


userRouter.put("/signup", UserController.signup) 

userRouter.post("/login", UserController.login)

userRouter.post("/friendship", UserController.userFriendship)

userRouter.delete("/deleteFriendship", UserController.removeFriendship)




