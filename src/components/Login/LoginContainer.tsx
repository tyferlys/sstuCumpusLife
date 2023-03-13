import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import Login from "@/components/Login/Login";
import {ILoginFormValues} from "@/types/login";

const LoginContainer = () => {
  const {register, handleSubmit} = useForm<ILoginFormValues>(
    {mode: 'onBlur'}
  );

  const onSubmit: SubmitHandler<ILoginFormValues> = async (data) => {
    console.log(data)
  }

  return (
    <Login handleSubmit={handleSubmit(onSubmit)} register={register}/>
  );
};

export default LoginContainer;