import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography} from "@mui/material";
import {red} from "@mui/material/colors";

const CardStd = (props: any) => {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Карточка заявки на регистрацию
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
                <Button size="small">Посмотреть</Button>
                <Button size="small">Отклонить</Button>
            </CardActions>
        </Card>
    );
};

export default CardStd;