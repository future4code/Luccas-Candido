import {connection} from "../index"

export const getMovieFunc = async ():Promise<any> => {
    const result = await connection
    .select("*")
    .from("Movies")

    return result

}