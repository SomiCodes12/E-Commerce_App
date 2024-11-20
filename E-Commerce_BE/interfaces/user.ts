export interface user {
    name : string,
    email : string
    password : string
    avatar : string
    verificationToken : string
    isVerified : boolean
    getjwtToken(): string; 
}