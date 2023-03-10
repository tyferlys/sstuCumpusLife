
import {DataTypes, Sequelize} from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    //адрес вашей локальной бд (абсолютный путь)
    storage: "D:\\sstuCumpusLife\\sstuCumpusLife\\src\\db\\sstu.db"
})
//Добавить валидацию в таблицу
const students = sequelize.define("students", {
    //айди
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    //логин
    Login:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            len: {
                args: [3, 30],
                msg: "Логин должен быть не менее 3 символов и не более 30"
            }
        }
    },
    //пароль
    Password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:{
                args: [8, 30],
                msg: "Пароль должен быть не менее 8 символов и не более 30"
            },
        }
    },
    //имя
    Name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2, 30],
                msg: "Имя должно быть не менее 2 символов и не более 30"
            }
        }
    },
    //фамилия
    Surname:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2, 30],
                msg: "Фамилия должна быть не менее 2 символов и не более 30"
            }
        }
    },
    //отчество
    MiddleName:{
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [2, 30],
                msg: "Отчество должно быть не менее 2 символов и не более 30"
            }
        }
    },
    //номер телефона
    Phone:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [11, 12],
                msg: "Введите корректный номер: начинается или с +7 или с 8"
            }
        }
    },
    //почта
    Mail:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    //роль (студент/админ)
    Role:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            customValidator(value: any){
                if (value != "student"){
                    throw new Error("Роль может быть только студентом")
                }
            }
        }
    },
    //дата регистрации
    DateRegistration:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    //номер зачетки
    StudentId:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    //направление обучения
    TypeStudies:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    //курс
    YearStudies:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            customValidator(value: any) {
                if (!(value >= 0 && value <= 6)){
                    throw new Error("Курс может быть от 1 до 6")
                }
            }
        }
    },
    //фото профиля
    Photo:{
        type: DataTypes.BLOB,
        allowNull: true,
    },
    //статус (о себе)
    Status:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    //время последней активности
    TimeActive:{
        type: DataTypes.DATE,
        allowNull: false,
    },
})

const requeststudents = sequelize.define("requeststudents", {
    //айди
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    //имя
    Name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2, 30],
                msg: "Имя должно быть не менее 2 символов и не более 30"
            }
        }
    },
    //фамилия
    Surname:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2, 30],
                msg: "Фамилия должна быть не менее 2 символов и не более 30"
            }
        }
    },
    //отчество
    MiddleName:{
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [2, 30],
                msg: "Отчество должно быть не менее 2 символов и не более 30"
            }
        }
    },
    //номер телефона
    Phone:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [11, 12],
                msg: "Введите корректный номер: начинается или с +7 или с 8"
            }
        }
    },
    //почта
    Mail:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    //номер зачетки
    StudentId:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    //фото профиля
    Photo:{
        type: DataTypes.BLOB,
        allowNull: false,
    },
})

const initDataBase = () => {
    sequelize.sync({
        alter: true,
    })
}

export {initDataBase, students, requeststudents}