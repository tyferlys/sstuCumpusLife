export interface Administrator {
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


export interface Student {
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
  StudentId: string
  TypeStudies: string
  YearStudies: string
  Status: string
  TimeActive: Date
}
