import {Request,Response} from "express"
import {editUserF} from "../data/editUserF"
import {getUserF} from "../data/getUserF"

export const editUser = async(req:Request, res:Response):Promise<any> => {

    try {

        const userExist = await getUserF(Number(req.params.id))

        
        const result = await editUserF(
            Number(req.params.id), 
            req.body.name, 
            req.body.nickname)
            
        
        if(userExist.length === 0) {
            res.status(404).send({message: "User does not exist!"})
        }


        if(req.body.name === "" || req.body.nickname === "") {
            res.status(404).send({message: "Insert the right params!"})
        } else {
            res.status(200).send(result)
        }
   
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

