import { Router } from "express";
import {UserController} from "./UserController";

const routes = Router();

routes.post("/user", UserController.createUser);

export default routes;
