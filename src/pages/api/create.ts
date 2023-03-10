import {NextApiRequest, NextApiResponse} from "next";
import {createDb} from "@/db/db";

type Data = {
    status: string
}
//подключение базы данных
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    createDb()
    res.status(200).json({status: "database created and working"})
}