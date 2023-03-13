import RegistrationPerson from "@/components/RegistrationPerson/RegistrationPerson";
import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";


const RegistrationPersonContainer = (props: any) => {

    const upDateListCard = async () => {

    }

    return (
        <RegistrationPerson listStudent = {props.listStudent}/>
    );
};

export default RegistrationPersonContainer;