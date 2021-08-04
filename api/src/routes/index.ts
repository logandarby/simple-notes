import { Router } from "express";

import notes from "./notes";
import session from "./session";
import users from "./users";

const routes = Router();

routes.use("/notes", notes);
routes.use("/session", session);
routes.use("/users", users);

export default routes;
