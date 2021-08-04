import mongoose from "mongoose";
import express from "express";
import session, { Session } from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";

import "./config/passport";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT ?? 3000;
const DB_URI = process.env.DB_URI ?? "mongodb://localhost:27016/simple-notes";
const SECRET = process.env.SECRET ?? "Ey2pTsjgZ26NKXv4GsJlXuCO4pSEM8g9";

const main = async () => {
  // Connecting Database
  const mongooseInstance = await mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const sessionStore = MongoStore.create({
    client: mongooseInstance.connection.getClient(),
    collectionName: "sessions",
  });
  console.log("Database Connected 💾");

  // Initializing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    session({
      secret: SECRET,
      store: sessionStore,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30, // A month
        httpOnly: true,
        // secure: true, // for production environment using https
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(routes);

  app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT} 🚀`);
  });
};

main();
