// Inititializes database/stores, and configures them.

import mongoose from "mongoose";
import MongoStore from "connect-mongo";

const DB_URI = process.env.DB_URI ?? "mongodb://localhost:27016/simple-notes";

const connectDatabase = async () => {
  try {
    // Connecting database instances
    const mongooseInstance = await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const sessionStore = MongoStore.create({
      client: mongooseInstance.connection.getClient(),
      collectionName: "sessions",
    });
    console.log("Database Connected 💾");

    return { mongooseInstance, sessionStore };
  } catch (err) {
    throw err;
  }
};

export default connectDatabase;
