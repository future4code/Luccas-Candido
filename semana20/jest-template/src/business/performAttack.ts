import { Character } from "../model/Char";
import { validateCharacter } from "./validateCharacter";



export const performAttack = async(attacker:Character, defender:Character):Promise<any> => {

    if(!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid character")
    }

    if(attacker.strength > defender.strength) {
        defender.life -= attacker.strength - defender.defense
    } else if (defender.strength > attacker.strength) {
        return
    }

}