import { User } from "@prisma/client";
import { prisma } from "../../prisma/client";

interface CreateUserRequest {
  slug: string;
}

type CreateUserResponse = { user: User | null };

export class FindUserBySlugUseCase {
  async execute({ slug }: CreateUserRequest): Promise<CreateUserResponse> {
    const user = await prisma.user.findUnique({
      where: {
        slug,
      },
    });

    return { user };
  }
}

// Single Responsiblity Principle (S) -S.O.L.I.D
