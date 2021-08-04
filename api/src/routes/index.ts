import { Router } from "express";

import notes from "./notes";
import token from "./token";
import users from "./users";

const routes = Router();

routes.use("/notes", notes);
routes.use("/token", token);
routes.use("/users", users);

export default routes;
