import {connection} from ".."


export const removeUser = async(id:string):Promise<any> => {

    const result = await connection.raw(`
    DELETE FROM cookenu_user
    WHERE id = "${id}"
    `)

    return result [0][0]

}