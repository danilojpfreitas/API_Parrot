import { Response, Request } from "express";
import { User } from "../../entities/User";
import bcrypt from "bcryptjs";
import { validate } from "class-validator";
import { userRepository } from "../../repositories/userRepository";

export class UserController {
  static async createUser(req: Request, res: Response) {
    const { name, email, password, apartment } = req.body;
    const encryptedPw = bcrypt.hashSync(password, 10);
    const user: User = userRepository.create({
      name,
      email,
      password: encryptedPw,
      apartment,
    });

    const errors = await validate(user);
    if (errors.length > 0) {
      return res.status(400).send(errors);
    }

    try {
      await userRepository.save(user);
    } catch (error) {
      return res.status(400).send(error);
    }
    return res.status(201).json(user);
  }

  static async deleteUser(req: Request, res: Response) {
    const id = req.params.id;
    let user: User;
    try {
      user = await userRepository.findOneOrFail({ where: { id: Number(id) } });
    } catch (error) {
      return res.status(404).send("User not found");
    }

    try {
      userRepository.delete(id);
    } catch (error) {
      return res.status(500).send("Server crashed");
    }

    return res.status(204).send();
  }
}
