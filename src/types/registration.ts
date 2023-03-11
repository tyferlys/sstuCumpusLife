import {BaseSyntheticEvent} from "react";
import {FieldErrors, UseFormRegister} from "react-hook-form";
import {NextApiRequest} from "next";

export interface IRegistrationProps {
  handleSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => void;
  errors: FieldErrors<IRegistrationFormValues>;
  register: UseFormRegister<IRegistrationFormValues>;
}


export interface IRegistrationFormValues {
  firstName: string;
  lastName: string;
  studentId: number;
  phone: string;
  middleName: string;
  email: string;
  photo: File;
}


export interface IRegistrationRequestNextApi extends NextApiRequest {
  body: IRegistrationFormValues
}