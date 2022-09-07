import { Response, Request } from "express";
import { User } from "../../entities/User";
import bcrypt from "bcryptjs";
import { validate } from "class-validator";
import { AppDataSource } from "../../data-source";

export default class UserController {
   async createUser(req: Request, res: Response) {
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

    const userRepository = AppDataSource.getRepository(User);
    try {
      await userRepository.save(user);
    } catch (error) {
      return res.status(400).send(error);
    }

    return res.status(201).json(user);
  }

  static async teste(req: Request, res: Response) {
    console.log("teste ok");
  }
}
