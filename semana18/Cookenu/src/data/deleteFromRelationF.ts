import {connection} from ".."


export const deleteFromRelationF = async(id:string) => {

    const result = await connection.raw(`
        DELETE FROM RelationFollowers
        WHERE user_id = "${id}" or follower_id = "${id}";       
`)

    return result[0]

}