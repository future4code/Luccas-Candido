export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 }

export class Post {
    private id: string
    private photo: string
    private description: string
    private type: POST_TYPES
    private createdAt: Date
    private authorId: string


    constructor(
        id:string,
        photo: string,
        description:string,
        type: POST_TYPES,
        createdAt: Date,
        authorId: string
    ){

    
    this.id = id
    this.photo = photo
    this.description = description
    this.type = type
    this.createdAt = createdAt
    this.authorId = authorId

    }

    public getId = ():string => this.id
    public getPhoto = ():string => this.photo
    public getDescription = ():string => this.description
    public getType = ():string => this.type
    public getCreatedAt = ():Date => this.createdAt
    public getAuthorId = ():string => this.authorId

 }


 export type PostInput = {
    photo:string,
    description:string,
    type:POST_TYPES

 }
 