import mongoose from "mongoose";

let Connected = {};    // track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    // If already connected to DB
    if(Connected.isConnected){
        console.log("Yo the app is connected to MongoDB");
        return;
    }

    // If Not connnected to DB then establish the connection:
    try {

        const db = await mongoose.connect(process.env.MONGODB, {
            dbName: "roamio",
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        Connected.isConnected = db.connections[0].readyState;

        console.log("Ha Connection ho gya database se...");

    } catch (error) {
        console.log(error);
    }
}