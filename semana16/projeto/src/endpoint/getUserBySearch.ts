import {Request, Response} from "express"
import {searchUser} from "../data/searchUser"


export const getUserBySearch = async(req:Request, res:Response) => {


    try {

        const search = await searchUser(req.query.query as string)

        if(search.length === 0) {
            res.status(404).send({message: "Not found :/"})
            return
        }

        res.status(200).send({users: search})

        
    } catch (error) {
        res.status(400).send(error.message)
    }
    

}