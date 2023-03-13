import React from 'react';
import RegistrationPersonContainer from "@/components/RegistrationPerson/RegistrationPersonContainer";
import axios from "axios";

const RegistrationPerson = (props: any) => {
    return (
        <RegistrationPersonContainer listStudent = {props.listStudent}/>
    );
};

export async function getServerSideProps(context: any){
    try{
        let listStudent = await axios.get("http://localhost:3000/api/registrationPerson/request")
            .then((response) => response)
            .catch((error) => error);

        return {
            props: {
                listStudent: listStudent.data.list,
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

export default RegistrationPerson;