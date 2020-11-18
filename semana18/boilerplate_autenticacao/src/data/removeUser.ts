import {connection} from ".."


export const removeUser = async(id:string):Promise<any> => {

    await connection
    .delete()
    .from("user_class_50")
    .where({id})

}