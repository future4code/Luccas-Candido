import {connection} from "../index"

export const getActorByName = async(name:string):Promise<any> => {
    const result = await connection.raw(`
    
    SELECT * FROM Actor WHERE name LIKE "%${name}%"`)

    return console.log(result[0])
}
