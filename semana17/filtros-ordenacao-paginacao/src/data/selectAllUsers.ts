import { connection } from "../index"

export const selectAllUsers = async():Promise<any> => {

    const result = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio
    `)


    return result[0]
}