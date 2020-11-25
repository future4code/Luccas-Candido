import {Request, Response} from "express"
import { selectAllRecipes } from "../data/selectAllRecipes"
import { selectById } from "../data/selectById"
import { selectRecipeById } from "../data/selectRecipeById"
import {updateRecipe} from "../data/updateRecipe"
import { getData } from "../services/authenticator"
import { AuthenticatorData } from "../types/authenticatorData"


export const editRecipe = async(req:Request, res:Response):Promise<void> => {

    try {

        const {id, title, description} = req.body

        const token:string = req.headers.authorization as string
        const authentication:AuthenticatorData = getData(token)

        if(!authentication) {
            res.statusCode = 401
            throw new Error("Não autorizado.")
        }

        if(!id || !title || !description) {
            res.statusCode = 400
            throw new Error("Preencha os campos 'id', 'title' e 'description'.")
        }

        const user = await selectById(authentication.id)
        const recipe = await selectRecipeById(id)


        if(user.id !== recipe.userId) {
            res.statusCode = 401
            throw new Error("Você não pode fazer isso. Esta receita não é sua")
        }

        await updateRecipe(id, user.id, title, description)

        res.status(200).send({message: "Receita editada com sucesso."})

        
    } catch (error) {

        let {message} = error

        if(message === "jwt must be provided") {
            res.statusCode = 401
            message = "Não autorizado."
        }

        res.send(message)
    }

}