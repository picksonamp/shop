import style from './auth.module.css'
import React from "react";
import User from "../../../data/interfaces/user";
import { useNavigate, useLocation } from "react-router-dom";
import { TextField, Button} from "@mui/material";

interface IAuthProps {
    currentUser: User,
    setCurrentUser: React.Dispatch<React.SetStateAction<User>>,
    auth: boolean,
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const Auth: React.FC<IAuthProps> = ({ currentUser, setCurrentUser, auth, setAuth }) => {

    const location = useLocation()
    const navigate = useNavigate()


    const [name, setName] = React.useState('')

    const [password, setPassword] = React.useState('')

    const [error, setError] = React.useState('')

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleOnSubmit = (event: React.FormEvent) => {

        event.preventDefault();
        setError('')

        if (!name || !password) setError('Все поля должы быть заполнены!')
        else {

            setAuth(true)

            setCurrentUser(
                {
                    surname: '',
                    name: name,
                    email: '',
                    password: ''
                }
            )
            navigate('/cards')

        }
    }

    return (
        <div className={style.auth_container}>

            <form autoComplete="off" className={style.auth_form} onSubmit={handleOnSubmit}>
                <h2>Вход</h2>

                <TextField
                    size="small"
                    error={!!error && !name}
                    fullWidth
                    id="filled-error"
                    label={error && !name ? "Введите имя" : null}
                    placeholder="Введите имя"
                    variant="filled"
                    onChange={handleChangeName}
                />

                <TextField
                    size="small"
                    error={!!error && !password}
                    fullWidth
                    id="filled-error"
                    label={
                        error && !password ? 'Введите пароль': null}
                    placeholder="Введите пароль"
                    variant="filled"
                    onChange={handleChangePassword}
                />

                <label>
                    <Button
                        type="submit"
                        className={style.reg_button}
                        variant="contained"
                        size="large"
                        onSubmit={handleOnSubmit}>
                        войти
                    </Button>
                </label>

                <div className={style.form_footer}>
                    <div>У вас нет аккаунта? </div>
                    <span className={style.auth_anchor} onClick={() => navigate('/registration')}>Регистрация</span>
                </div>

            </form>

        </div>
    )
}

export default Auth;