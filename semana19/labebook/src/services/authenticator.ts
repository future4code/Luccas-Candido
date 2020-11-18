import * as jwt from "jsonwebtoken"

export type AuthenticationData = {
    id:string
}

export const generateToken = (payload:AuthenticationData) => {
    return jwt.sign(
        payload,
        process.env.JWT_KET as string,
        {
            expiresIn: "24min"
        }
    )

}

export const getData = (token:string):AuthenticationData => {

    return jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData

}