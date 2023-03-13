import {IRegistrationRequestNextApi} from "@/types/registration";
import {NextApiResponse} from "next";
import {reqGetAllStudent, reqStudentDelete} from "@/db/dbRequests";

export default async function handler(
    req: IRegistrationRequestNextApi,
    res: NextApiResponse
){
    const idStudent = Number(req.query.idPerson);

    try{
        const result = await reqStudentDelete(idStudent)
        console.log(result)
        res.status(200).json({"status": "deleted"})
    }
    catch (e){
        console.log(e)
        res.status(500).json({"status": "error"})
    }
}