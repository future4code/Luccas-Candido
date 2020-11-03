import {Response, Request} from "express"
import { createMovieFunc } from "../data/createMovieFunc"

export const createMovie = async(req:Request, res:Response):Promise<void> => {

    try {
        await createMovieFunc(
            req.body.id,
            req.body.title,
            req.body.synopsis,
            new Date(req.body.release_date),
            req.body.rating,
            new Date(req.body.playing_limit_date)
        )

        res.status(200).send({message: "Movie created sucessfully!"})
        
        
    } catch (error) {
        res.status(400).send({message: error.message})
    }

}