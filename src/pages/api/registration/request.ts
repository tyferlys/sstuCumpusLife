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
        await reqStudent({
          Name: fields.firstName,
          Surname:fields.lastName,
          MiddleName:fields.middleName,
          Phone:fields.phone,
          Mail:fields.email,
          StudentId:fields.studentId,
          Photo:fileData,
        })

        res.status(200).json({type:0, text:"Requset student created"})
      }
      catch (e) {
        const error = e.errors[0].message;

        switch (error){
          case "StudentId must be unique":
              res.status(400).json({type:1, text:"StudentId must be unique"})
            break;
        }

        res.status(400).json({type:999, text:"Unknown error"})
      }
    });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}