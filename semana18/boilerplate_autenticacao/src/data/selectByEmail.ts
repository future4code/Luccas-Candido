import {connection} from ".."

export type User = {
    id: string,
    name:string,
    email:string,
    password:string
}

export const selectByEmail = async(email:string):Promise<User> => {

    try {

    const result = await connection.raw(`
    SELECT * FROM user_class_50 as user
    WHERE user.email = "${email}";
    `)


    return result[0][0]

    }

    catch(error) {
        throw new Error(error.sqlMessage || error.message)
    }

}