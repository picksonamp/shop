import React from "react";
import User from "../../data/interfaces/user";
import { useNavigate } from "react-router-dom";
import Nav from "./nav/nav";
import style from './header.module.css'

export interface authProps {
    auth: boolean,
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
    currentUser: User,
    setCurrentUser: React.Dispatch<React.SetStateAction<User>>
}

const Header: React.FC<authProps> = ({ auth, setAuth, currentUser, setCurrentUser }) => {

    const navigate = useNavigate()

    const hanldeSignOut = () => {

        setAuth(false)

        setCurrentUser(
            {
                surname: '',
                name: '',
                email: '',
                password: ''
            }
        )

        navigate('/')
    }

    return (
        <header>
            <Nav />

            {
                !auth &&
                <div>
                    <div
                        className={style.reg_auth_anchors}
                        onClick={() => navigate('/registration')}>
                        Регистрация
                    </div>

                    <div
                        className={style.reg_auth_anchors}
                        onClick={() => navigate('/auth')}>Вход</div>
                </div>
            }
            {
                auth &&
                <div>
                    <div onClick={()=> navigate('/personal-account')}
                        className={style.reg_auth_anchors}>
                        {`Вы вошли как: ${currentUser.name}`}
                    </div>

                    <div 
                        className={style.reg_auth_anchors} 
                        onClick={hanldeSignOut}>
                            Выйти
                    </div>
                </div>
            }
        </header>
    )
}

export default Header;