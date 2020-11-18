import {connection} from ".."


export const deleteUserFromRecipe = async(id:string):Promise<any> => {

    const result = await connection.raw(`
    DELETE FROM cookenu_recipes as recipe
    WHERE recipe.user_id = "${id}";
    `)

    return result[0]

}