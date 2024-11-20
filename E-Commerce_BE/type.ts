declare namespace NodeJS{
    export interface ProcessEnv{
        PORT : string
        ACTIVATION_TOKEN : string
        NODE_ENV : string
        SMTP_HOST : string
        SMTP_PORT : string
        SMTP_SERVICE : string
        SMTP_MAIL : string
        SMTP_PASSWORD : string
        JWT_SECRET_KEY : string
        JWT_EXPIRES : string
    }
}