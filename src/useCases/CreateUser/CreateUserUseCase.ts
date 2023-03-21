import { User } from "@prisma/client";
import { AppError } from "../../errors/AppError";
import { prisma } from "../../prisma/client";
import { FindUserBySlugUseCase } from "../FindUserBySlug/FindUserBySlugUseCase";

interface CreateUserRequest {
  name: string;
  slug: string;
  description: string;
  github: string;
  linkedin: string;
  instagram: string;
}

type CreateUserResponse = User;

export class CreateUserUseCase {
  async execute({
    name,
    slug,
    description,
    github,
    instagram,
    linkedin,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    const findUserBySlugUseCase = new FindUserBySlugUseCase();
    const { user: userExists } = await findUserBySlugUseCase.execute({ slug });

    if (userExists) {
      throw new AppError("Slug already exists");
    }

    const user = await prisma.user.create({
      data: {
        name,
        slug,
        description,
        github,
        instagram,
        linkedin,
      },
    });

    return user;
  }
}

// Single Responsiblity Principle (S) -S.O.L.I.D
