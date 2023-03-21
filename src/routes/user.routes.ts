import { Router } from "express";
import { CreateUserController } from "../useCases/CreateUser/CreateUserController";
import { FindUserbySlugController } from "../useCases/FindUserBySlug/FindUserBySlugController";

const userRoutes = Router();

const findUserbySlugController = new FindUserbySlugController();
const createUserController = new CreateUserController();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/:slug", findUserbySlugController.handle);

export { userRoutes };
