import {connection} from ".."



export const deleteFollower = async(followerId:string, userId:string):Promise<any> => {

    const result = await connection.raw(`
    DELETE FROM RelationFollowers
    WHERE follower_id = "${followerId}" AND user_id = "${userId}"
    `)

    return result[0][0]
    
}