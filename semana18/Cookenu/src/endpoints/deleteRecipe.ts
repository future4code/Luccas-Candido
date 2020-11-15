import {Request, Response} from "express"
import {removeRecipe} from "../data/removeRecipe"
import { selectById } from "../data/selectById"
import { selectRecipeById } from "../data/selectRecipeById"
import { getData } from "../services/authenticator"
import { AuthenticatorData } from "../types/authenticatorData"


export const deleteRecipe = async(req:Request, res:Response):Promise<void> => {

    try {

        const id = req.params.id

        const token:string = req.headers.authorization as string
        const authentication:AuthenticatorData = getData(token)

        const user = await selectById(authentication.id)


        if(!authentication) {
            res.statusCode = 401
            throw new Error("Não autorizado.")
        }


        if(user.role === "NORMAL") {

            const recipe = await selectRecipeById(id)

            if(user.id !== recipe.userId) {
                res.statusCode = 401
                throw new Error("Esta receita não é sua.")
            }

            await removeRecipe(id)

            res.status(200).send({message: "Receita deletada com sucesso."})

        } else if(user.role === "ADMIN") {

            await removeRecipe(id)
            res.status(200).send({message: "Receita deletada com sucesso."})
        }

        
    } catch (error) {

        let {message} = error

        if(message === "jwt must be provided") {
            res.statusCode = 401
            message = "Não autorizado."
        }

        res.send(message)
    }

}