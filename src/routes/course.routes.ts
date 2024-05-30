import { Router } from "express";
import { CourseController } from "../controllers/course.controller";

export const courseRouter = Router();

const courseController = new CourseController;

courseRouter.get("/", courseController.getMany);
courseRouter.post("/", courseController.create);
courseRouter.get("/:id", courseController.getOne);
courseRouter.patch("/:id", courseController.updateCourse);
courseRouter.delete("/:id", courseController.deleteCourse);