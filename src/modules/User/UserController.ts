import { Response, Request } from "express";
import { User } from "../../entities/User";
import bcrypt from "bcryptjs";
import { validate } from "class-validator";
import { userRepository } from "../../repositories/userRepository";

export class UserController {
   static async createUser(req: Request, res: Response) {
    console.log("entrou no metodo");
    
    const { name, email, password, apartment } = req.body;
    const user: User = new User();
    user.name = name;
    user.password = bcrypt.hashSync(password, 10);
    user.apartment = apartment;
    user.email = email;

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

  /* async deleteUser(req: Request, res: Response) {

  } */
}
