import {connection} from "../index"
import { inputData } from "../types/inputData"


export const selectSearch = async(data:inputData):Promise<any> => {

    const resultPerPage = 5
    const offset:number = resultPerPage * (data.page - 1);


    const result = await connection.raw(`
    SELECT * from aula48_exercicio
    WHERE name LIKE "%${data.name}%"
    ORDER BY ${data.orderBy} ${data.orderType}
    LIMIT ${resultPerPage}
    OFFSET ${offset}
    `)

    return result[0]
}