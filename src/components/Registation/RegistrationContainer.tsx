import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import Registration from "@/components/Registation/Registration";
import {IRegistrationFormValues} from "@/types/registration";


const RegistrationContainer = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<IRegistrationFormValues>(
    {mode: 'onBlur'}
  );
  const onSubmit: SubmitHandler<IRegistrationFormValues> = async (data) => {
    const formData = new FormData()
    formData.set('middleName', data.middleName)
    formData.set('firstName', data.firstName)
    formData.set('email', data.email)
    formData.set('phone', data.phone)
    formData.set('studentId', String(data.studentId))
    formData.set('lastName', data.lastName)
    formData.set('photo', data.photo[0])
    const requestSettings = {
      method: "POST",
      body: formData,
    }
    try {
      await fetch("http://localhost:3000/api/registration/request", requestSettings)
        .then((res) => console.log(res))
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Registration register={register} errors={errors} handleSubmit={handleSubmit(onSubmit)}/>
  );
};

export default RegistrationContainer;