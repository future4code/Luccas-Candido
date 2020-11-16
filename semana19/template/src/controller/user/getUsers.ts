import {Response, Request} from "express"
import { getAllUsers } from "../../business/user/getAllUsers"


export const getUsers = async(req:Request, res:Response):Promise<void> => {

    try {


        const token:string = req.headers.authorization as string

        const users = await getAllUsers(token)

        res.status(200).send({users: users})

        
    } catch (error) {
        throw new Error(error.message)
    }


}