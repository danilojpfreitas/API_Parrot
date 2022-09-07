import { Router } from "express";
import { UserController } from "./UserController";

const routes = Router();

routes.post("/user", UserController.createUser);
routes.delete("/user/:id([0-9]+)", UserController.deleteUser);

export default routes;
