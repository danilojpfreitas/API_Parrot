import { Router } from "express";
import { UserController } from "./UserController";

const router = Router();

router.post("/user", UserController.createUser);
router.delete("/user/:id([0-9]+)", UserController.deleteUser);
router.put("/user/:id([0-9]+)", UserController.editUser);
router.get("/user/:id([0-9]+)", UserController.getOneById);

export default router;
