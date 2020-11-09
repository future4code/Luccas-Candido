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

export const getData = (token:string):AuthenticatorData => {

    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
    const result = {
        id: payload.id
    }

    return result

}

