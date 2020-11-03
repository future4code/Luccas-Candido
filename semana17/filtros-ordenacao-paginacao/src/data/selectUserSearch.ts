import { connection } from "../index"

export const selectUserSearch = async(name:string):Promise<any> => {

    const result = await connection.raw(`
    SELECT * from aula48_exercicio
    WHERE name LIKE "%${name}%"
    `)


    return result[0]
}