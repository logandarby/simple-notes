import mongoose from "mongoose";
import express from "express";
import session, { Session } from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";

import "./config/passport";
import routes from "./routes";
import { isLoggedIn } from "./middlewares/authMiddleware";

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

  const swaggerDocument = YAML.load("./src/openapi.yml");
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // developer auth routes for testing
  app
    .get("/login", (req, res) => {
      const form = `<h1>Login Page</h1>
      <form method="POST" action="/session">\
        Enter Username:<br><input type="text" name="username">\
        <br>Enter Password:<br><input type="password" name="password">\
        <br><br><input type="submit" value="Submit">
      </form>`;
      res.send(form);
    })
    .get("/register", (req, res, next) => {
      const form = `<h1>Register Page</h1>
      <form method="post" action="/users">\
        Enter Username:<br><input type="text" name="username">\
        <br>Enter Password:<br><input type="password" name="password">
        <br><br><input type="submit" value="Submit">
      </form>`;
      res.send(form);
    })
    .get("/logout", (req, res) => {
      req.logout();
      const form = `<button onclick="sendDelete(event);">
        Logout?
      </button>
      <script>
        function sendDelete(event){
          event.preventDefault();
          var xhttp = new XMLHttpRequest();
          xhttp.open("DELETE", "/session", true);
          xhttp.send();
        }
      </script>`;
      res.send(form);
    })
    .get("/protected-route", isLoggedIn, (req, res) => {
      res.send("protected route!!");
    });

  app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT} 🚀`);
  });
};

main();
