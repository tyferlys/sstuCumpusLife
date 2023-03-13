import RegistrationPerson from "@/components/RegistrationPerson/RegistrationPerson";
import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import {useRouter} from "next/router";


const RegistrationPersonContainer = (props: any) => {

    const router = useRouter()
    const upDateListCard = async (nextPage: number) => {
        if (nextPage === 0){
            router.push(`/registrationPerson/${Number(props.pageNow) - 1}`)
        }
        else if (nextPage === 1){
            router.push(`/registrationPerson/${Number(props.pageNow) + 1}`)
        }
    }

    const deleteStudentRequest = async (idStudent: number) => {
        await axios.delete(`http://localhost:3000/api/registrationPerson/person/${idStudent}`)
        router.push(`/registrationPerson/${Number(props.pageNow)}`)
    }

    return (
        <RegistrationPerson listStudent = {props.listStudent} upDateListCard = {upDateListCard} deleteStudentRequest = {deleteStudentRequest}/>
    );
};

export default RegistrationPersonContainer;