import {Request, Response} from "express"
import {selectRecipeById} from "../data/selectRecipeById"
import { getData } from "../services/authenticator"
import { AuthenticatorData } from "../types/authenticatorData"


export const getRecipesById = async(req:Request, res:Response):Promise<any> => {

    try {

        const token:string = req.headers.authorization as string

        const authentication:AuthenticatorData = await getData(token)

        if(!authentication) {
            res.statusCode = 401
            throw new Error("Usuário não autorizado.")
        }

        const recipes = await selectRecipeById(req.params.id)

        if(!recipes) {
            res.statusCode = 404
            throw new Error('Receita não encontrada')
        }


        res.status(200).send({
            id: recipes.id,
            title: recipes.title,
            description: recipes.description,
            createdAt: recipes.createdAt

        })

        
    } catch (error) {
        let {message} = error

        if(message === "jwt must be provided") {
            res.statusCode = 401
            message = "Não autorizado."
        }

        res.send(message)
    }
}