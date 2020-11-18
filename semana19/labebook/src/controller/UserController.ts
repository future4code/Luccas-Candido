import {Request, Response} from "express"
import UserBusiness from "../business/UserBusiness"
import { CreateUserInput, LoginInput } from "../model/User"


class UserController {

    public signup = async(req:Request, res:Response) => {

        try {

            const input:CreateUserInput = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
    
            const token = await UserBusiness.signup(input)
    
            res.status(201).send({message: "Usuário criado", token})
    
            
        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }

    }

    public login = async(req:Request, res:Response) => {

        try {

            const input:LoginInput = {
                email: req.body.email,
                password: req.body.password
            }
    
            let message = "Logged with success"
    
            const token = await UserBusiness.getUserByEmail(input)
    
            
            res.status(200).send({message, token})
    
    
            
        } catch (error) {
    
            let { message } = error
    
          if(message === "Cannot read property 'id' of undefined"){
             message = "Usuário não encontrado ou senha incorreta"
             res.statusCode = 404
          }
          
          if(message === "Field 'name' doesn't have a default value"){
             message = "Insira um nome para seu usuário"
             res.statusCode = 406
          }
    
          res.send({message})
        }

    }


}

export default new UserController()