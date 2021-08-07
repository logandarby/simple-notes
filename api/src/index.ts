import express from "express";
import session from "express-session";
import passport from "passport";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";

import "./config/passport";
import connectDatabase from "./config/database";
import routes from "./routes";
import { isLoggedIn } from "./middlewares/authMiddleware";

const app = express();
const PORT = process.env.PORT ?? 3000;
const SECRET = process.env.SECRET ?? "Ey2pTsjgZ26NKXv4GsJlXuCO4pSEM8g9";

const main = async () => {
  let sessionStore;
  ({ sessionStore } = await connectDatabase());

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
        Enter Email:<br><input type="text" name="email">\
        <br>Enter Password:<br><input type="password" name="password">\
        <br><br><input type="submit" value="Submit">
      </form>`;
      res.send(form);
    })
    .get("/register", (req, res, next) => {
      const form = `<h1>Register Page</h1>
      <form method="post" action="/users">\
        Enter Email:<br><input type="text" name="email">\
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
