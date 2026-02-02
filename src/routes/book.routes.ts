import { Router } from "express";
import { BookController } from "../controllers/book.controller";
import { authMiddleware } from "../utils/auth.middleware";

const bookController = new BookController();

const bookRouter = Router();

bookRouter.use(authMiddleware);
bookRouter.use("/", bookController.router);

export { bookRouter };