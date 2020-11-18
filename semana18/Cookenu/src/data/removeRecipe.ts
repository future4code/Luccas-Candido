import {connection} from ".."


export const removeRecipe = async(recipeId:string):Promise<any> => {

    const result = await connection.raw(`
    DELETE FROM cookenu_recipes as recipe
    WHERE recipe.id = "${recipeId}"
    `)

    return result[0][0]
}