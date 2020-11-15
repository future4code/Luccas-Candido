import {connection} from ".."


export const selectRecipesAdm = async():Promise<any> => {

    const result = await connection.raw(`
    SELECT * FROM cookenu_recipes
    `)

    return result[0]

}