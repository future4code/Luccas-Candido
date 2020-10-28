import {connection} from "../index"

export const countActorByGender = async (gender:string):Promise<any> => {

    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);

    return result[0][0].count

}

