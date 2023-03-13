import {requeststudents, students} from "@/db/db";
import {generatePassword} from "@/db/createPassword";
import { Op } from "sequelize";

export const reqStudent = async (student: any) => {

    const {Mail, StudentId} = student

    const result = await students.findAll({
        where:{
            [Op.or]:[
                {Mail: Mail},
                {StudentId: StudentId},
            ]
        }
    })

    if (result.length == 0){
        await requeststudents.create(student)
    }
    else{
        if (result[0].dataValues.Mail == Mail){
            return "почта уже существует"
        }
        else if (result[0].dataValues.StudentId == StudentId){
            return "номер зачетной книжки уже существует"
        }
    }
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

export const reqStudentAccept = async (idStudent: number) => {
    const result = await requeststudents.findAll({
        where: {
            id: idStudent,
        }
    })

    const newPassword = await generatePassword(10);

    await students.create({
        Login:result[0].dataValues.Mail,
        Password:newPassword,
        Name:result[0].dataValues.Name,
        Surname:result[0].dataValues.Surname,
        MiddleName:result[0].dataValues.MiddleName,
        Phone:result[0].dataValues.Phone,
        Mail:result[0].dataValues.Mail,
        Role:"student",
        DateRegistration: new Date().getDate(),
        StudentId:result[0].dataValues.StudentId,
        TypeStudies:"none",
        YearStudies:1,
        Photo:result[0].dataValues.Photo,
        TimeActive: new Date().getDate(),
    })
    await reqStudentDelete(idStudent)
}