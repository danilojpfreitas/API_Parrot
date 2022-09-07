import { Router } from "express";
import UserController from "./UserController";

const routes = Router();

const controller = new UserController();

routes.post("/user", controller.createUser);

export default routes;
