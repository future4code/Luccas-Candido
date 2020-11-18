import {Request, Response} from "express"
import { deleteFromRelationF } from "../data/deleteFromRelationF"
import { deleteUserFromRecipe } from "../data/deleteUserFromRecipe"
import { removeRecipe } from "../data/removeRecipe"
import {removeUser} from "../data/removeUser"
import { selectAllRecipes } from "../data/selectAllRecipes"
import { selectById } from "../data/selectById"
import { selectRecipesAdm } from "../data/selectRecipesAdm"
import { getData } from "../services/authenticator"
import { AuthenticatorData } from "../types/authenticatorData"


export const deleteUser = async(req:Request, res:Response):Promise<void> => {

    try {

        const {id} = req.body

        const token:string = req.headers.authorization as string
        const authentication:AuthenticatorData = getData(token)

        if(authentication.role === "ADMIN") {

            const user = await selectById(id)


            if(!authentication) {
                res.statusCode = 401
                throw new Error("Não autorizado.")

            }
            
            if(!id) {
                res.statusCode = 400
                throw new Error("Preencha o campo ID")
            }

            if(!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe.")
            }


            await deleteFromRelationF(id)
            
            await deleteUserFromRecipe(id)

            await removeUser(id)

            res.status(200).send({message: "Usuário deletado com sucesso."})


        } else {

            res.statusCode = 401
            throw new Error("Usuário não autorizado.")
        }


        
    } catch (error) {

        let {message} = error
        
        res.send(message)
    }

}