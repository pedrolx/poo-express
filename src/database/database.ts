import { ICourse } from "../interfaces/course.interface";

export const courseDatabase: ICourse[] = [];

let id = 0;

export const generateId = () => {
    id++;
    return id
}