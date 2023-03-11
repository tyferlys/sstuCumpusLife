import {NextApiResponse} from "next";
import {IRegistrationRequestNextApi} from "@/types/registration";

export default async function handler(
  req: IRegistrationRequestNextApi,
  res: NextApiResponse,
) {
  if (req.method == "POST") {
    res.status(200).json({ok: "true"})
  }
}