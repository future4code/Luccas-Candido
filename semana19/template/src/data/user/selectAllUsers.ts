import { connection } from "../connection";


export const selectAllUser = async() => {

    const result = await connection.raw(`
    SELECT * FROM Aula_Arquitetura  
    `)

    return result[0]

}