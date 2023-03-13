import { ExpandMore } from "@mui/icons-material";
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Typography} from "@mui/material";
import {red} from "@mui/material/colors";
import axios from "axios";
import CardStd from "@/components/RegistrationPerson/card";
import Grid2 from '@mui/material/Unstable_Grid2';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import {useState} from "react";
import {useRouter} from "next/router";
const RegistrationPerson = (props: any) => {

    let key = 0;

    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid
                    item
                    container
                    direction="column"
                    alignItems="center"
                >
                    <Grid item>
                        <Button><KeyboardArrowUpSharpIcon fontSize="large" onClick={() => {props.upDateListCard(0)}}/></Button>
                    </Grid>
                    {props.listStudent.map(student => {
                        return (
                            <Grid item key = {key++} item mb = {3}>
                                <CardStd student = {student} key = {key++} deleteStudentRequest = {props.deleteStudentRequest} id={key+1}/>
                            </Grid>
                        )
                    })}
                    <Grid item>
                        <Button><KeyboardArrowDownSharpIcon fontSize="large" onClick={() => {props.upDateListCard(1)}}/></Button>
                    </Grid>
                </Grid>

                <Grid item>
                    привет
                </Grid>
            </Grid>
        </div>
    );
};

export default RegistrationPerson;