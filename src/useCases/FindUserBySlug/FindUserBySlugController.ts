import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { FindUserBySlugUseCase } from "./FindUserBySlugUseCase";

export class FindUserbySlugController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { slug } = req.params;

    const findUserBySlugUseCase = new FindUserBySlugUseCase();
    const { user } = await findUserBySlugUseCase.execute({ slug });

    return res.status(201).json({
      user,
    });
  }
}
