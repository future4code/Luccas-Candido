import * as jwt from "jsonwebtoken"
import { ROLE_USER } from "../types/roleUser"

export type AuthenticatorData = {
    id:string,
    role:ROLE_USER
}


export const generateToken = (input:AuthenticatorData):string => {

    const token = jwt.sign({
        id:input.id,
        role: input.role
    },
        process.env.JWT_KEY as string,
    {
        expiresIn: "10min"
    }
    )

    return token
}

export const getData = (token:string):AuthenticatorData => {

    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
    const result = {
        id: payload.id,
        role: payload.role
    }

    return result

}

