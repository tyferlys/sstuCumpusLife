import {requeststudents, students} from "@/db/db";

export const reqStudent = async (student: any) => {
    await requeststudents.create(student)
}

export const reqGetAllStudent = async (offsetDb : number) => {
    const result = await requeststudents.findAll({
        limit: 3,
        offset: offsetDb,
    })
    return result
}

export const reqStudentDelete = async (idStudent: number) => {
    const result = await requeststudents.destroy({
        where: {
            id: idStudent
        }
    })
    return result;
}