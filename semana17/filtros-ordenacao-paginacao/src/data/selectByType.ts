import { connection } from "../index"

export const selectByType = async(type:string):Promise<any> =>{

    const result = await connection.raw(`
    SELECT * from aula48_exercicio
    WHERE type = "${type}";
    `)

    return result[0]

}