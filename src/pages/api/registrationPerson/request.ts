import {IRegistrationRequestNextApi} from "@/types/registration";
import {NextApiResponse} from "next";
import {reqGetAllStudent} from "@/db/dbRequests";

export default async function handler(
    req: IRegistrationRequestNextApi,
    res: NextApiResponse
){
    const listStudent = await reqGetAllStudent()
    res.status(200).json({list: listStudent})
}