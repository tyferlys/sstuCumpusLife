import React from 'react';
import RegistrationPersonContainer from "@/components/RegistrationPerson/RegistrationPersonContainer";
import axios from "axios";

const Page = (props: any) => {
    return (
        <RegistrationPersonContainer listStudent = {props.listStudent} pageNow={props.pageNow}/>
    );
};

export async function getServerSideProps({params} : any){
    try{
        let listStudent = await axios.get(`http://localhost:3000/api/registrationPerson/${params.page}`)
            .then((response) => response)
            .catch((error) => error);
        if (listStudent.data.list.length == 0)
            listStudent.data.list = "заявок больше нет"
        return {
            props: {
                listStudent: listStudent.data.list,
                pageNow: params.page,
            }
        }
    }
    catch (e){
        console.log(e)
        return {
            props: {
                listStudent: "error",
            }
        }
    }
}

export default Page;