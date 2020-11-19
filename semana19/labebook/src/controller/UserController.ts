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
    
            
        } catch(error) {
            res.status(400).send({
                message: error.message || error.sqlMessage
            })
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
    

        } catch(error) {
            res.status(400).send({
                message: error.message || error.sqlMessage
            })
        }

    }


}

export default new UserController()