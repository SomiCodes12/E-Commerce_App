import app from "./app"
import dotenv from "dotenv"
import dbConfig from "./db/db";
import user from "./router/user"
dotenv.config()

app.use("/api/v1/" , user)

process.on("uncaughtException" , (err : any) => {
    console.log(`Error : ${err.message}`);
    console.log("Shutting down server to handle uncaughtException");

    
    server.close(() => {
        process.exit(1);
    })
})

if (process.env.NODE_ENV !== "production") {
    dotenv.config({
        path : "BE_2/config/.env"
    })
}

const server = app.listen(process.env.PORT , () => {
    console.log(`Server is running on http://localhost: ${process.env.PORT}`);
    dbConfig()
})


process.on("unhandledRejection" , (err : any) => {
    console.log(err.message);
    console.log(`Shutting down the server to handle : ${err.message}`);
    

    server.close(() => {
        process.exit(1);
    })
})

