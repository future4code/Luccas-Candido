import {Response, Request} from "express"
import { getMovieFunc } from "../data/getMovieFunc"

export const getMovie = async(req:Request, res:Response):Promise<void> => {

    try {
        const movie = await getMovieFunc()
        res.status(200).send(movie)
        
    } catch (error) {
        res.status(400).send(error.message)
    }

}