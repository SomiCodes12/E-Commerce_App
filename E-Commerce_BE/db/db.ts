import mongoose from "mongoose"

const url = "mongodb://0.0.0.0:27017/be"

const dbConfig = () => {
   try {
    mongoose.connect(url).then(() => {
        console.log(`Server Connected`);
    })
   } catch (error) {
    console.log(error.message);
   }
}

export default dbConfig;