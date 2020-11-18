import {connection} from ".."


export const updateFollower = async(userId:string, targetId:string):Promise<any> => {

    const result = await connection
    .insert({
        user_id: targetId,
        follower_id: userId
    })
    .into("RelationFollowers")

    return result

}