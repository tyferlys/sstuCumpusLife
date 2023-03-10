import {BaseSyntheticEvent} from "react";
import * as yup from "yup";
import {Control, FieldErrors} from "react-hook-form";

export const RegistrationFormSchema = yup.object<IRegistrationFormValues>({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    studentId: yup.number().min(100000).required(),
    phone: yup.string().matches(/^(?:\+7|8)\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
      'Введите корректный номер телефона.'),
    middleName: yup.string(),
    email: yup.string().email(),
    photo: yup.mixed()
      .test('fileType', 'Неподдерживаемый формат файла', function (value) {
        // Если файл не выбран, то пропускаем валидацию
        if (!value) return true;
        // Получаем тип файла
        const fileType = (value as File).type;
        console.log(value)
        // Поддерживаемые форматы
        const supportedFormats = ['image/jpeg', 'image/png'];
        // Проверяем, что тип файла соответствует поддерживаемым форматам
        return supportedFormats.includes(fileType);
      }).required(),
  }
).required();

export type RegistrationFormDataType = yup.InferType<typeof RegistrationFormSchema>

export interface IRegistrationProps {
  handleSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => void;
  control: Control<IRegistrationFormValues, any>;
  errors: FieldErrors<IRegistrationFormValues>;
}


export interface IRegistrationFormValues {
  firstName: string;
  lastName: string;
  studentId: number;
  phone: string;
  middleName: string;
  email: string;
  photo: string | number | readonly string[];
}