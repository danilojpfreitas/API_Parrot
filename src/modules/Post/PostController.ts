import { userRepository } from "./../../repositories/userRepository";
import { Response, Request } from "express";
import { validate } from "class-validator";
import { postRepository } from "../../repositories/postRepository";

export class PostController {
  /* static async createPost(req: Request, res: Response) {
    const { content } = req.body;

    const newPost = postRepository.create({ content });
    const errors = await validate(newPost);
    if (errors.length > 0) {
      return res.status(400).send(errors);
    }

    try {
      await postRepository.save(newPost);
      return res.status(201).json(newPost);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } */

  static async createPostbyIdUser(req: Request, res: Response) {
    const { content } = req.body;
    const { idUser } = req.params;

    

    try {
      const user_id = await userRepository.findOneBy({ id: Number(idUser) });
      if (!user_id) {
        return res.status(404).json({ message: "User does not exist" });
      }
      const newPost = postRepository.create({
        content,
        user_id,
      });
      await postRepository.save(newPost);
      return res.status(201).json(newPost);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async getPostAll(req: Request, res: Response) {
    try {
      const allPost = await postRepository.find({
        relations: {
          user_id: true,
        },
      });

      return res.send(allPost);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async getPostbyUserId(req: Request, res: Response) {
    const { idUser } = req.params;

    if (!idUser) {
      return res.status(404).json({ message: "User does not exist" });
    }

    try {
      const allPostByIdUser = await userRepository.findOne({
        where: {
          id: parseInt(idUser),
        },
        relations: {
          posts: true,
        },
      });

      return res.send(allPostByIdUser);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
