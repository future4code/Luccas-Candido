import {connection} from "../index"



export const createMovieFunc = async(
    id:string,
    title: string,
    synopsis:string,
    release_date: Date,
    rating:number,
    playing_limit_date: Date
):Promise<any> => {

    await connection.
    insert({
        id:id,
        title:title,
        synopsis:synopsis,
        release_date: release_date,
        rating: rating,
        playing_limit_date: playing_limit_date
    })
    .into("Movies")

}