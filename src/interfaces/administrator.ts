
interface Administrator{
    Id: number
    Login: string
    Password: string
    Name: string
    Surname: string
    MiddleName: string
    Phone: string
    Mail: string
    Role: string
    DateRegistration: Date
    DeletedForumsId: number[]
    DeletedMessagesId: number[]
    RegistredUsersId: number[]
    Status: string
    TimeActive: Date
}
export default Administrator;