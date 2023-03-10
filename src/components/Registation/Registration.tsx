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
import {Controller} from "react-hook-form";


const Registration: React.FC<IRegistrationProps> = ({handleSubmit, control, errors}) => {
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
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{mt: 3}} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                control={control}
                name="firstName"
                render={
                  ({field}) => <TextField
                    {...field}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Имя"
                    autoFocus
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                control={control}
                name="lastName"
                render={
                  ({field}) => <TextField
                    {...field}
                    required
                    fullWidth
                    id="lastName"
                    label="Фамилия"
                    name="lastName"
                    autoComplete="family-name"
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                control={control}
                name="studentId"
                render={
                  ({field}) => <TextField
                    {...field}
                    required
                    fullWidth
                    id="lastName"
                    label="Номер зачетки"
                    name="lastName"
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                control={control}
                name="phone"
                render={
                  ({field}) => <TextField
                    {...field}
                    required
                    fullWidth
                    id="phone"
                    label="Телефон"
                    name="phone"
                  />
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="middleName"
                render={
                  ({field}) => <TextField
                    {...field}
                    required
                    fullWidth
                    id="middleName"
                    label="Отчество"
                    name="middleName"
                  />
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="email"
                render={
                  ({field}) => <TextField
                    {...field}
                    required
                    fullWidth
                    id="email"
                    label="Почта"
                    name="email"
                    autoComplete="email"
                  />
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Alert severity="warning">Загрузите свою фотографию напротив экрана регистрации, держа студенческий в
                руках!</Alert>
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="photo"
                render={
                  ({field}) =>
                    <Button variant="contained" component="label" fullWidth>
                      Загрузить фотографию
                      <input {...field} hidden accept="image/*" multiple type="file" required/>
                    </Button>
                }
              />
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