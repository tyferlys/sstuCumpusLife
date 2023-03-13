import React from 'react';
import {ILoginProps} from "@/types/login";
import {Button, TextField, Typography} from '@mui/material';
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Container from "@mui/material/Container";

const Login: React.FC<ILoginProps> = (
  {
    register,
    handleSubmit,
  }
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
          Авторизация
        </Typography>
        <Box component="form" noValidate sx={{mt: 3}} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...register("login", {required: {value: true, message: 'Поле логин обязательно для заполения.'}})}
                name="login"
                required
                fullWidth
                id="login"
                label="Логин"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("password", {required: {value: true, message: 'Поле логин обязательно для заполения.'}})}
                required
                fullWidth
                id="password"
                label="Пароль"
                type='password'
                name="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
          >
            Авторизоваться
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/registration" className='link'>
                Нет аккаунта? Подайте заявку на регистрацию.
              </Link>
            </Grid>
            <Grid item>
              <Button>
                Забыли пароль?
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;