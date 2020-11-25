import {Response, Request} from "express"
import { selectAllRecipes } from "../data/selectAllRecipes"
import { getData } from "../services/authenticator"
import { AuthenticatorData } from "../types/authenticatorData"



export const getAllRecipes = async(req:Request, res:Response):Promise<void> => {

    try {

        const token:string = req.headers.authorization as string
        const authentication:AuthenticatorData = getData(token)
        
        if(!authentication) {
            res.statusCode = 401
            throw new Error("Usuário não autorizado.")
        }

        


        const recipes = await selectAllRecipes(authentication.id)

        if(!recipes) {
            res.statusCode = 404
            throw new Error("Nenhuma receita encontrada")
        }

        res.status(200).send({
            recipes: recipes
        })


        
    } catch (error) {
        let {message} = error

        res.send(message)
    }


}