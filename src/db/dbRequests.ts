import {requeststudents, students} from "@/db/db";

export const reqStudent = async (student) => {
    await requeststudents.create(student)
}