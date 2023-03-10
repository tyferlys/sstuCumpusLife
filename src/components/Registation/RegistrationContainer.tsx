import React from 'react';
import {useForm} from "react-hook-form";
import Registration from "@/components/Registation/Registration";
import {IRegistrationFormValues, RegistrationFormDataType, RegistrationFormSchema} from "@/types/registration";
import {yupResolver} from "@hookform/resolvers/yup";


const RegistrationContainer = () => {
  const {handleSubmit, control, formState: {errors}} = useForm<IRegistrationFormValues>({
    resolver: yupResolver(RegistrationFormSchema)
  });
  const onSubmit = (data: RegistrationFormDataType) => {
    console.log(data);
  }
  return (
    <Registration errors={errors} handleSubmit={handleSubmit(onSubmit)} control={control}/>
  );
};

export default RegistrationContainer;