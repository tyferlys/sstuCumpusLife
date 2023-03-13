import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import Registration from "@/components/Registation/Registration";
import {IRegistrationFormValues} from "@/types/registration";
import axios from "axios";


const RegistrationContainer = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<IRegistrationFormValues>(
    {mode: 'onBlur'}
  );
  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [isDialogError, setDialogError] = React.useState<boolean>(false);

  const handleCloseDialog = () => setIsDialogOpen(false);
  const onSubmit: SubmitHandler<IRegistrationFormValues> = async (data) => {
    const formData = new FormData()
    formData.append('middleName', data.middleName)
    formData.append('firstName', data.firstName)
    formData.append('email', data.email)
    formData.append('phone', data.phone)
    formData.append('studentId', String(data.studentId))
    formData.append('lastName', data.lastName)
    formData.append('photo', data.photo[0])


    try {
      await axios.post("http://localhost:3000/api/registration/request", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
        .then((res) => {
          console.log(res)
        })
    } catch (e) {
      setDialogError(true);
      console.log(e)
    } finally {
      setIsDialogOpen(true)
    }
  }
  return (
    <Registration
      register={register}
      errors={errors}
      handleSubmit={handleSubmit(onSubmit)}
      handleCloseDialog={handleCloseDialog}
      isDialogOpen={isDialogOpen}
      isDialogError={isDialogError}
    />
  );
};
export default RegistrationContainer;