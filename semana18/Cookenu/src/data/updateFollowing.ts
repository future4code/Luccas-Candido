import {connection} from ".."


export const updateFollowing = async(id:string):Promise<any> => {

    const result = await connection.raw(`
    UPDATE cookenu_user
    SET following = following + 1
    WHERE id = "${id}"
    `)

    return result[0][0]

}