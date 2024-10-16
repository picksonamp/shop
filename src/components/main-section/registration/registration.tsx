import React from "react";
import User from "../../../data/interfaces/user";
import { Link, useNavigate, useLocation } from "react-router-dom";
import style from './registration.module.css';
import { TextField, Button} from "@mui/material";

interface RegistrationProps {
    currentUser: User,
    setCurrentUser: React.Dispatch<React.SetStateAction<User>>,
    auth: boolean,
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const Registration: React.FC<RegistrationProps> = ({ currentUser, setCurrentUser, auth, setAuth }) => {

    const location = useLocation()
    const navigate = useNavigate()


    const [regSurname, setRegSurname] = React.useState('')

    const [regName, setRegName] = React.useState('')

    const [email, setEmail] = React.useState('')

    const [password, setPassword] = React.useState('')

    const [passwordSecondField, setPasswordSecondField] = React.useState('')

    const [error, setError] = React.useState('')

    const handleChangeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegSurname(event.target.value)
    }

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegName(event.target.value)
    }

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleChangePasswordSecondField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordSecondField(event.target.value)
    }

    const handleOnSubmit = (event: React.FormEvent) => {

        event.preventDefault();
        setError('')

        if (!regName || !regSurname || !email || !password || !passwordSecondField) setError('Все поля должы быть заполнены!')
        else if (password !== passwordSecondField) setError('Поля с паролями не совпадают')
        else {

            setAuth(true)

            setCurrentUser(
                {
                    surname: regSurname,
                    name: regName,
                    email: email,
                    password: password
                }
            )
            navigate('/registration-success')

        }
    }

    return (
        <div className={style.registration_container}>

            <form autoComplete="off" className={style.registration_form} onSubmit={handleOnSubmit}>
                <h2>Регистрация</h2>

                <TextField
                    size="small"
                    error={!!error && !regSurname}
                    fullWidth
                    className={style.text_field}
                    label={error && !regSurname ? "Введите Фамилию" : null}
                    placeholder="Введите Фамилию"
                    variant="filled"
                    onChange={handleChangeSurname}
                />

                <TextField
                    size="small"
                    error={!!error && !regName}
                    fullWidth
                    id="filled-error"
                    label={error && !regName ? "Введите имя" : null}
                    placeholder="Введите имя"
                    variant="filled"
                    onChange={handleChangeName}
                />

                <TextField
                    size="small"
                    error={!!error && !email}
                    fullWidth
                    id="filled-error"
                    type="email"
                    label={error && !email ? "Введите адрес электронной почты" : null}
                    placeholder="Введите адрес электронной почты"
                    variant="filled"
                    onChange={handleChangeEmail}
                />

                <TextField
                    size="small"
                    error={!!error && !password}
                    fullWidth
                    id="filled-error"
                    label={
                        error && !password ? 'Введите пароль'
                            : error && password !== passwordSecondField ? 'Пароли не совпадают' : null}
                    placeholder="Введите пароль"
                    variant="filled"
                    onChange={handleChangePassword}
                />

                <TextField
                    size="small"
                    error={!!error && !passwordSecondField}
                    fullWidth
                    id="filled-error"
                    label={
                        error && !passwordSecondField ? 'Повторите пароль'
                            : error && password !== passwordSecondField ? 'Пароли не совпадают' : null}
                    placeholder="Повторите пароль"
                    variant="filled"
                    onChange={handleChangePasswordSecondField}
                />

                <label>
                    <Button
                        type="submit"
                        className={style.reg_button}
                        variant="contained"
                        size="large"
                        onSubmit={handleOnSubmit}>
                        регистрация
                    </Button>
                </label>

                <div className={style.form_footer}>
                    <div>У вас уже есть аккаунт? </div>
                    <span className={style.auth_anchor} onClick={() => navigate('/auth')}>Авторизация</span>
                </div>

            </form>

        </div>
    )
}


export default Registration;