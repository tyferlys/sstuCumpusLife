import {IRegistrationRequestNextApi} from "@/types/registration";
import {NextApiResponse} from "next";
import {reqGetAllStudent} from "@/db/dbRequests";

export default async function handler(
    req: IRegistrationRequestNextApi,
    res: NextApiResponse
){
    const offsetDb : number = req.query.page * 3
    const listStudent = await reqGetAllStudent(offsetDb)
    res.status(200).json({list: listStudent})
}