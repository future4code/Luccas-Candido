import {connection} from ".."

export const selectByEmail = async(email:string):Promise<any> => {

    const result = await connection.raw(`
    SELECT * FROM user_class_50 as user
    WHERE user.email = ${email};
    `)

    return result[0]

}