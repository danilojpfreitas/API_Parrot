import { Router, Request, Response } from "express";
import user from "../../modules/User/routes";
import auth from "../../modules/Auth/routes"

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.json("Api rodando corretamente");
});

routes.use(user);
routes.use(auth);

export default routes;
