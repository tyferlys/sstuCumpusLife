import {requeststudents, students} from "@/db/db";

export const reqStudent = async (student: any) => {
    await requeststudents.create(student)
}

export const reqGetAllStudent = async () => {
    const result = await requeststudents.findAll({
        limit: 3,
        offset: 0,
    })
    return result
}