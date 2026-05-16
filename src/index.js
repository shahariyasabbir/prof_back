    // require("dotenv").config();
    import dotenv from "dotenv";
    import connectDB from "./db/index.js";
    dotenv.config(
        {
            path : './public/.env'
        }
    );


    
    // import mongoose from "mongoose";
    // import { DB_NAME } from "./constants";
    // import connectDB from "./db/index.js";
    

    connectDB()

 .then(() => {
    app.listen(process.env.PORT|| 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});














// import express from "express";

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error("Error connecting to MongoDB:", error);
//       throw error;
//     })
//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// })();

// its the first approach to connect to mongodb and start the server. we are using mongoose to connect to mongodb and express to create the server. we are also using dotenv to load the environment variables from the .env file. we are also using a constants file to store the database name.
