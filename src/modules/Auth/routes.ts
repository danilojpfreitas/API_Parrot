import { Router } from "express";
import AuthController from "./AuthController";

const routes = Router();

const controller = new AuthController();

routes.post("/login", );

routes.post("change-password", )

export default routes;
