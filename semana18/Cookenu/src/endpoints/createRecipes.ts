import {Response, Request} from "express"
import {insertRecipes} from "../data/insertRecipes"
import { selectById } from "../data/selectById"
import { getData } from "../services/authenticator"
import { generateId } from "../services/generateId"
import { AuthenticatorData } from "../types/authenticatorData"


export const createRecipe = async(req:Request, res:Response):Promise<void> => {


    try {

        const token:string = req.headers.authorization as string
        
        const {title, description} = req.body

        const authentication:AuthenticatorData = await getData(token)

        let message = "Receita criada com sucesso."

        if(!title || !description)  {
            res.statusCode = 400;
            message = "Preencha os campos 'title' e 'description'."
            throw new Error(message)
        }
        
        if(!authentication) {
            res.statusCode = 401;
            message = "Não autorizado"
            throw new Error(message)
        }

        const id = generateId()

        const user = await selectById(authentication.id)

        await insertRecipes({id, title, description, user_id: user.id})

        res.status(200).send(message)
        
    } catch (error) {
        let {message} = error

        if(message === "jwt must be provided") {
            res.statusCode = 401
            message = "Não autorizado."
        }

        res.send(message)

    }

}