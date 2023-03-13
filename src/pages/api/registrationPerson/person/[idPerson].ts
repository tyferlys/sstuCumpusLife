import {IRegistrationRequestNextApi} from "@/types/registration";
import {NextApiResponse} from "next";
import {reqGetAllStudent, reqStudentAccept, reqStudentDelete} from "@/db/dbRequests";

export default async function handler(
    req: IRegistrationRequestNextApi,
    res: NextApiResponse
){
    if (req.method == "DELETE"){
        const idStudent = Number(req.query.idPerson);

        try{
            const result = await reqStudentDelete(idStudent)
            console.log(result)
            res.status(200).json({"status": "deleted"})
        }
        catch (e){
            const error = e.errors[0].message;
            res.status(500).json({"status": error})
        }
    }
    if (req.method == "POST"){

        try{
            await reqStudentAccept(Number(req.query.idPerson))
            res.status(200).json({"status": "added"})
        }
        catch (e){
            const error = e.errors[0].message;
            res.status(500).json({"status": error})
        }
    }
}