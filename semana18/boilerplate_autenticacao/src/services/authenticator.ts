import * as jwt from "jsonwebtoken"

type AuthenticatorData = {
    id:string
}


export const generateToken = (input:AuthenticatorData):string => {

    const token = jwt.sign({
        id:input.id
    },
        process.env.JWT_KEY as string,
    {
        expiresIn: "10min"
    }
    )

    return token
}

