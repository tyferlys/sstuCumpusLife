import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {Alert, FormHelperText} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import {IRegistrationProps} from "@/types/registration";
import {
  emailOptions,
  lastNameOptions,
  middleNameOptions,
  nameOptions, phoneOptions, photoOptions,
  studentIdOptions
} from "@/components/Registation/registrationValidationSettings";


const Registration: React.FC<IRegistrationProps> = (
  {register, handleSubmit, errors}
) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Подать заявку на регистрацию
        </Typography>
        <Box component="form" noValidate sx={{mt: 3}} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("firstName", nameOptions)}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Имя"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("lastName", lastNameOptions)}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                required
                fullWidth
                id="lastName"
                label="Фамилия"
                name="lastName"
                autoComplete="family-name"
              />

            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("middleName", middleNameOptions)}
                error={!!errors.middleName}
                helperText={errors.middleName?.message}
                required
                fullWidth
                id="middleName"
                label="Отчество"
                name="middleName"
              />

            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("studentId", studentIdOptions)}
                error={!!errors.studentId}
                helperText={errors.studentId?.message}
                required
                fullWidth
                id="studentId"
                label="Номер студенческого"
                name="studentId"
              />

            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("phone", phoneOptions)}
                error={!!errors.phone}
                helperText={errors.phone?.message}
                required
                fullWidth
                id="phone"
                label="Телефон"
                name="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("email", emailOptions)}
                error={!!errors.email}
                helperText={errors.email?.message}
                required
                fullWidth
                id="email"
                label="Почта"
                name="email"
                autoComplete="email"
              />

            </Grid>
            <Grid item xs={12}>
              <Alert severity="warning">Загрузите свою фотографию напротив экрана регистрации, держа студенческий в
                руках!</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" component="label" fullWidth>
                Загрузить фотографию
                <input {...register("photo", photoOptions)} hidden type="file"/>
              </Button>
              <FormHelperText error={true}>{errors.photo?.message}</FormHelperText>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
          >
            Отправить заявку на регистрацию
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#">
                Уже есть аккаунт? Войти.
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
};

export default Registration;