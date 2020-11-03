import {connection} from "../index"


export const selectTypeOrName = async(name:string, type:string):Promise<any> => {

    const result = await connection.raw(`
    SELECT * from aula48_exercicio
    WHERE name LIKE "%${name}%" OR type = "${type}";
    `)

    return result[0]
}