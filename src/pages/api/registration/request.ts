import {NextApiResponse} from "next";
import {IRegistrationRequestNextApi} from "@/types/registration";
import formidable from 'formidable';


export default async function handler(
  req: IRegistrationRequestNextApi,
  res: NextApiResponse,
) {
  if (req.method == "POST") {
    const form = formidable({multiples: true});

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send('Internal server error');
      }
      console.log(files)
      res.status(200).json({message: 'true'});
    });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}