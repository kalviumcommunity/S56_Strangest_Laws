const mongoose=require("mongoose")
require("dotenv").config()

const getDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURI);
        console.log("Success in connecting to the database");
    } catch (error) {
        console.error("Failed to connect to the database");
        throw new Error("Database connection error");
    }
}

let mongooseConnect=()=>{
    return mongoose.connection.readyState===1? "Connected successfully":"Not Connected"
}
module.exports={getDB,mongooseConnect}