import { courseDatabase, generateId } from "../database/database";
import { ICourse, TCreateCourseData, TUpdateCourseData } from "../interfaces/course.interface";

export class CourseService {
    create(data: TCreateCourseData) {
        const now = new Date();

        const newCourse: ICourse = {
            id: generateId(),
            ...data,
            createdAt: now
        };

        courseDatabase.push(newCourse);

        return newCourse;
    };

    getMany(search?: string) {
        const filteredCourseList = courseDatabase.filter((course) => 
            search ? course.title.toLowerCase().includes(search.toLowerCase()) : true
        );

        return filteredCourseList
    };

    getOne(id: number){
        const course = courseDatabase.filter((course) => course.id === id );

        if(!course){
            throw new Error("Course not found");
        }

        return course;
    };

    updateCourse(id: number, data: TUpdateCourseData){
        const currentCourse = courseDatabase.find((course) => course.id === id);

        if(!currentCourse){
            throw new Error("Course not found");
        }

        const now = new Date();

        const updatedCourse: ICourse = { ...currentCourse, ...data, updatedAt: now };

        const index = courseDatabase.findIndex((course) => course.id === id);

        courseDatabase.splice(index, 1, updatedCourse);

        return updatedCourse
    }

    deleteCourse(id: number){
        const courseIndex = courseDatabase.findIndex((course) => course.id === id);

        if(courseIndex === -1){
            throw new Error("Course not found");
        }

        courseDatabase.splice(courseIndex, 1);

        return { message: "Course successfully deleted." }
    };
}