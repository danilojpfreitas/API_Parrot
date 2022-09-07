import { Response, Request } from "express";
import { User } from "../../entities/User";
import bcrypt from "bcryptjs";
import { userRepository } from "../../repositories/userRepository";
import * as jwt from "jsonwebtoken"
import config from "../../config/config"

export class AuthController {
  
   static async login(req: Request, res: Response) {

    const { email, password } = req.body;

    if(!(email && password)) {
      return res.status(404).send("Enter an email or password")
  }

  let user: User

    try {
      user = await userRepository.findOneOrFail({where: {email}})
  } catch (error) {
      return res.status(401).send("Email not found!")
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).send("Wrong email or password")
  }

  const token = jwt.sign(
    {userId: user.id, username: user.name},
    config.jwtSecret,
    {expiresIn: "1h"}
)

  return res.send(token)
}
}