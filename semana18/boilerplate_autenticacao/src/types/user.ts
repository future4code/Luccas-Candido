import { ROLE_USER } from "./roleUser";

export type User = {
    id: string,
    name:string,
    email:string,
    password:string,
    role: ROLE_USER
}