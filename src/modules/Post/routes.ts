import { Router } from "express";
import { PostController } from "./PostController";
import { auth } from "../../middlewares/auth";

const router = Router();

//router.post("/post", [auth], PostController.createPost)
router.post("/post/user/:idUser([0-9]+)", [auth], PostController.createPostbyIdUser)
router.get("/post", [auth], PostController.getPostAll)
router.get("/post/user/:idUser([0-9]+)", [auth], PostController.getPostbyUserId)

export default router;
