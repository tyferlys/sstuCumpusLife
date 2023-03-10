import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography} from "@mui/material";
import {red} from "@mui/material/colors";
import React from "react";
import Image from 'next/image'


const CardStd = (props: any) => {

    return (
        <Card sx={{ minWidth: 275, maxWidth: 675 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Карточка заявки на регистрацию
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    №{props.id}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.student.Surname} {props.student.Name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Номер студенческого - {props.student.StudentId}
                </Typography>
                <Typography variant="body2">
                    Почта - {props.student.Mail}
                    <br/>
                    Номер телефона - {props.student.Phone}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => {props.acceptStudentRequest(props.student.Id)}}>Принять</Button>
                <Button size="small" onClick={() => {props.deleteStudentRequest(props.student.Id)}}>Отклонить</Button>
            </CardActions>
        </Card>
    );
};

export default CardStd;