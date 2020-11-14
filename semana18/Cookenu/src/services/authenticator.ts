import * as jwt from "jsonwebtoken"
import { AuthenticatorData } from "../types/authenticatorData"



export const generateToken = (input:AuthenticatorData):string => {

    const token = jwt.sign({
        id: input.id,
        role:input.role
    },
        process.env.JWT_KEY as string,
        {
            expiresIn: "30min"
        }
    )

    return token

}

export const getData = (token:string):AuthenticatorData => {

    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
    const result = {
        id:payload.id,
        role:payload.role
    }

    return result

}

