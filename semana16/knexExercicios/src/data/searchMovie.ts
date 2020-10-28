import {connection} from "../index"

export const searchMovie = async(title: string):Promise<any> => {
    const result = await connection
    .select("*")
    .from("Movies")
    .where("title", "LIKE", `%${title}%`);

    return result

}