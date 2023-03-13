import {NextApiResponse} from "next";
import {IRegistrationRequestNextApi} from "@/types/registration";
import formidable from 'formidable';
import * as fs from "fs";
import {reqStudent} from "@/db/dbRequests";


export default async function handler(
  req: IRegistrationRequestNextApi,
  res: NextApiResponse,
) {
  if (req.method == "POST") {
    const form = formidable({multiples: true});

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send('Internal server error');
      }


      const fileData = fs.readFileSync(files.photo.filepath);

      try{
        const result = await reqStudent({
          Name: fields.firstName,
          Surname:fields.lastName,
          MiddleName:fields.middleName,
          Phone:fields.phone,
          Mail:fields.email,
          StudentId:fields.studentId,
          Photo:fileData,
        })

        if (result == "почта уже существует"){
          res.status(400).json({type:0, text:"Почта уже существует"})
        }
        else if (result == "номер зачетной книжки уже существует"){
          res.status(400).json({type:0, text:"номер зачетной книжки уже существуе"})
        }

        res.status(200).json({type:0, text:"Requeset student created"})
      }
      catch (e: any) {
        const error = e.errors[0].message;
        res.status(400).json({type:1, text:error})
      }
    });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}