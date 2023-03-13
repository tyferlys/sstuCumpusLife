import {BaseSyntheticEvent} from "react";
import {UseFormRegister} from "react-hook-form";

export interface ILoginProps {
  handleSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => void;
  register: UseFormRegister<ILoginFormValues>;
}

export interface ILoginFormValues {
  login: string;
  password: string;
}
