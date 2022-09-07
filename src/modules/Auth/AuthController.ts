import { Response, Request } from "express";
import { User } from "../../entities/User";
import bcrypt from "bcryptjs";
import { validate } from "class-validator";
import { AppDataSource } from "../../data-source";
import * as jwt from "jsonwebtoken"

export default class AuthController {
   async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if(!(email && password)) {
      return res.status(404).send("Digite um email ou password")
  }

  const userRepository = App



  static async teste(req: Request, res: Response) {
    console.log("teste ok");
  }
}
