import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { CreateUserInput, LoginInput } from "../model/User";
import { CustomError } from "../services/CustomError";

class UserController {


  public signup = async (req: Request, res: Response) => {
    try {
      const input: CreateUserInput = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const token = await UserBusiness.signup(input);

      res.status(201).send({ message: "Usuário criado", token });

    } catch (error) {

      let {message} = error

      if(message.includes("Duplicate")) {
        res.statusCode = 400
        message = "You already follow this user"
      }
      
      res.status(400).send({
        message: error.message || error.sqlMessage,
      });
    }
  };



  public login = async (req: Request, res: Response) => {
    try {
      const input: LoginInput = {
        email: req.body.email,
        password: req.body.password,
      };

      let message = "Logged with success";

      const token = await UserBusiness.getUserByEmail(input);

      res.status(200).send({ message, token });
    } catch (error) {
      res.status(400).send({
        message: error.message || error.sqlMessage,
      });
    }
  };



  public userFriendship = async(req:Request, res:Response):Promise<void> => {

    try {

      const token:string = req.headers.authorization as string

      const input = {
          id: req.body.id
      }

      await UserBusiness.userFriendship(input, token)

      res.status(200).send({message: `You're following the ${input.id} user.`})

    } catch(error) {
      
      res.status(400).send(error.message || error.sqlMessage)
    }

  }
  
  
  public removeFriendship = async(req:Request, res:Response):Promise<void> => {

    try {

      const token:string = req.headers.authorization as string
      
      const input = {
        userToUnfollow: req.body.userToUnfollow
      }

      await UserBusiness.deleteFriendship(input, token)

      res.status(200).send({message: `You unfollowed the ${input.userToUnfollow} user`})

    } catch(error) {

        let {message} = error

        if(message === "jwt expired") {
          res.statusCode = 401
          message = "Unauthorized"
        }

        res.send(message)

    }

  }


}

export default new UserController();
