import "reflect-metadata";
import express from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";
import { TypeormStore } from "connect-typeorm";

import "./config/passport";
import routes from "./routes";
import { Session } from "./entity/Session";
import { createConnection } from "typeorm";
import { CLIENT_ORIGIN, API_SECRET, API_PORT } from "./globals";

const app = express();

const main = async () => {
  const connection = await createConnection();
  console.log("Database Connected 💾");
  const sessionRepository = connection.getRepository(Session);
  const sessionStore = new TypeormStore({
    cleanupLimit: 2,
  }).connect(sessionRepository);

  // Initializing middleware
  app.use(
    cors({
      origin: CLIENT_ORIGIN,
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    session({
      secret: API_SECRET,
      store: sessionStore,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30, // A month
        httpOnly: true,
        sameSite: "lax",
        //secure: true, // for production environment using https
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(routes);

  const swaggerDocument = YAML.load("./src/openapi.yml");
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.listen(API_PORT, () => {
    console.log(`Server running at localhost:${API_PORT} 🚀`);
  });
};

try {
  main();
} catch (e) {
  console.error(e);
}
