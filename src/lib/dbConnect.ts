import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?:number,
}


const connection:ConnectionObject = {}

const dbConnect = async ():Promise<void> =>{
    if (connection.isConnected) {
        console.log("Already connected to database.");
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URL || "",{});

        
        console.log("db",db);
        console.log("db.connections:",db.connections)
         connection.isConnected = db.connections[0].readyState;
         console.log("db connection successfully")

    } catch (error) {
        console.log("Database contion failed.",error);
        process.exit(1);
    }

}

export default dbConnect;