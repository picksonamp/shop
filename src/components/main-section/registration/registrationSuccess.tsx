import React from "react";
import { Link, useNavigate } from "react-router-dom";
import doneImage from './done.png'
import style from './registration.module.css'
import { Button } from "@mui/material";


const RegistrationSuccess = () => {

    const navigate = useNavigate()

    const handleOnSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        navigate('/cards')
    }

    return (
        <div className={style.registration_container}>

            <form className={style.registration_form} onSubmit={handleOnSubmit}>
                <div>
                    <img src={doneImage} />
                    <h2 className={style.reg_succ_h}>Вы успешно зарегестрировались!</h2>
                </div>
                <p className={style.reg_succ_text}>
                    Продолжить покупки?
                </p>

                <label>
                    <Button
                        type='submit'
                        onSubmit={handleOnSubmit}>
                    К покупкам</Button>
                </label>

            </form>
        </div>

    )
}

export default RegistrationSuccess;