import {RegisterOptions} from "react-hook-form/dist/types/validator";

export const nameOptions: RegisterOptions = {
  required: {value: true, message: 'Поле Имя обязательно для заполнения.'},
  minLength: {value: 2, message: 'Минимальная длина имени 2 символа.'},
}

export const lastNameOptions: RegisterOptions = {
  required: {value: true, message: 'Поле Фамилия обязательно для заполнения.'},
  minLength: {value: 3, message: 'Минимальная длина фамилии 3 символа.'},
}

export const middleNameOptions: RegisterOptions = {
  minLength: {value: 4, message: 'Минимальная длина отчества 4 символа.'},
}


export const studentIdOptions: RegisterOptions = {
  validate: value => Number.isInteger(value) || 'Номер студенческого должен быть числом.',
  min: {value: 100000, message: 'Минимальная длина студенческого - 6 цифр.'},
  valueAsNumber: true,
  required: {value: true, message: 'Поле номер студенческого обязательно для заполнения.'}
}

export const phoneOptions: RegisterOptions = {
  pattern: {
    value: /^(\+7|7|8)?[\s\-]?\(?(\d{3})\)?[\s\-]?(\d{3})[\s\-]?(\d{2})[\s\-]?(\d{2})$/,
    message: 'Введите корректный номер телефона.'
  },
  required: {value: true, message: 'Поле номер телефона обязательно для заполнения.'}
}

export const emailOptions: RegisterOptions = {
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Введите корректный email.'
  },
  required: {value: true, message: 'Поле почта обязательно для заполнения.'}
}


export const photoOptions: RegisterOptions = {
  validate: (value: FileList) => isJpgOrPng(value[0]) || "Файл должен иметь расширение jpg или png и быть не больше 3 мб.",
  required: {value: true, message: 'Фото обязательно для загрузки.'}
}

function isJpgOrPng(file: File) {
  return file && (file['type'] === 'image/jpeg' || file['type'] === 'image/jpg' || file['type'] === 'image/png') && file['size'] <= 3 * 1024 * 1024;
}