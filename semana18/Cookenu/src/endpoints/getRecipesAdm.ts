import {Request, Response} from "express"
import {selectRecipesAdm} from "../data/selectRecipesAdm"
import { getData } from "../services/authenticator"
import { AuthenticatorData } from "../types/authenticatorData"


export const getRecipesAdm = async(req:Request, res:Response):Promise<void> => {


    try {

        const token:string = req.headers.authorization as string
        const authentication:AuthenticatorData = getData(token)

        if(!authentication) {
            res.statusCode = 401
            throw new Error("Não autorizado.")
        }

        if(authentication.role === "ADMIN") {

            const allRecipes = await selectRecipesAdm()

            res.status(200).send({recipe: allRecipes})

        } else {

            res.statusCode = 401
            throw new Error("Não autorizado.")
        }
        
    } catch (error) {

        let {message} = error

        res.send(message)
    }

}


