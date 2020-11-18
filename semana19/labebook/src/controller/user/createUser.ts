import {Request, Response} from "express"
import { createUserBusiness } from "../../business/user/createUserBusiness"
import { CreateUserInput } from "../../model/User"



export const createUser = async(req:Request, res:Response):Promise<void> => {

    try {

        const input:CreateUserInput = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const token = await createUserBusiness(input)

        res.status(201).send({message: "Usuário criado", token})

        
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }

}