import { Request, Response } from "express";
import { CourseService } from "../services/course.services";

export class CourseController{
    create(request: Request, response: Response) {
        const courseService = new CourseService();
        const course = courseService.create(request.body);
        return response.status(201).json(course);
    };

    getMany(request: Request, response: Response) {
        const courseService = new CourseService();
        const courses = courseService.getMany(request.query.search as string);
        return response.status(200).json(courses);
    };

    getOne(request: Request, response: Response){
        const courseService = new CourseService();
        const course = courseService.getOne(Number(request.params.id));
        return response.status(200).json(course);
    };

    updateCourse(request: Request, response: Response){
        const courseService = new CourseService();
        const course = courseService.updateCourse(Number(request.params.id), request.body);
        return response.status(200).json(course);
    };

    deleteCourse(request: Request, response: Response){
        const courseService = new CourseService();
        const message = courseService.deleteCourse(Number(request.params.id));
        return response.status(200).json(message);
    };
}