import {Response, Request} from "express"
import {createUserBusiness} from "../../business/user/createUserBusiness"

export const createUser = async (req:Request, res:Response):Promise<void> => {
        
    try {

        const input = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }

        const token = await createUserBusiness(input)

        res.status(201).send({message: "Usuário criado com sucesso",
    token})

    } catch(error) {

        res.status(400).send({
            message: error.message || error.sqlMessage
        })

    }

}