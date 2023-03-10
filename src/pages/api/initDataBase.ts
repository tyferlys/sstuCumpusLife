import {NextApiRequest, NextApiResponse} from "next";
import {initDataBase} from "@/db/db";

type Data = {
    status: string
}
//подключение базы данных
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method == "GET"){
        await initDataBase()
        res.status(200).json({status: "database created and working"})
    }
}