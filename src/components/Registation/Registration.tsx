import React from 'react';
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {Alert} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import {IRegistrationProps} from "@/types/registration";


const Registration: React.FC<IRegistrationProps> = (
  {register, handleSubmit,  errors}
) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
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
                {...register("firstName")}
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
                {...register("lastName")}
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
                {...register("middleName")}
                required
                fullWidth
                id="middleName"
                label="Отчество"
                name="middleName"
              />

            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("studentId")}
                required
                fullWidth
                id="studentId"
                label="Номер зачетки"
                name="studentId"
              />

            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("phone")}
                required
                fullWidth
                id="phone"
                label="Телефон"
                name="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("email")}
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
                <input {...register("photo")} hidden type="file"/>
              </Button>
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
          {errors.photo?.message}
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