import {NextApiResponse} from "next";
import {FormDataRegistration, IRegistrationRequestNextApi} from "@/types/registration";
import formidable from 'formidable';



export default async function handler(
    req: IRegistrationRequestNextApi,
    res: NextApiResponse,
) {

    if (req.method == "POST") {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error(err.message);
                return res.status(500).send('Internal server error');
            }

            // обработка данных, полученных из формы
            const { photo1 } = fields;
            const { photo2 } = files;

            console.log(photo1, photo2)
        });

        res.status(200).json({message: 'true'});
    }
}