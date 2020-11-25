import {connection} from ".."



export const selectById = async(id:string):Promise<any> => {

    const result = await connection.raw(`
    SELECT * FROM cookenu_user as user
    WHERE user.id = "${id}"
    `)


    return result[0][0]

}
