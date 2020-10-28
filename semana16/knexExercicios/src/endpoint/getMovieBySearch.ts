import {Request, Response} from "express"
import { searchMovie } from "../data/searchMovie"

export const getMovieBySearch = async(req:Request, res:Response) => {

    try {
    
        const result = await searchMovie(req.query.query as string)
        res.status(200).send({movies: result})
        
    } catch (error) {
        res.status(400).send(error.message)
    }

}