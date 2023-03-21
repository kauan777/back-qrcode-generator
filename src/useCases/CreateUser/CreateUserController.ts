import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { description, github, instagram, linkedin, name, slug } = req.body;

    const createUserUseCase = new CreateUserUseCase();

    const user = await createUserUseCase.execute({
      description,
      github,
      instagram,
      linkedin,
      name,
      slug,
    });

    return res.status(201).json({
      user,
    });
  }
}
