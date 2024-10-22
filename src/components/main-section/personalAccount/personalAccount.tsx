import style from './personalAccount.module.css'
import { Button } from '@mui/material'
import { authProps } from '../../header/header'
import { useNavigate } from 'react-router-dom'

const PerssonalAccount: React.FC<authProps> = ({ auth, setAuth, currentUser, setCurrentUser }) => {
    
    const navigate = useNavigate()

    const handlerClick = () => {
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
        <div className={style.main}>
            <h1>Личный кабинет</h1>
            <p>Ваше имя {currentUser.name}</p>
            <p>Ваша фамилия: {currentUser.surname}</p>
            <p>Ваша корзина:</p>

            <Button
                className={style.button} 
                variant="contained"
                onClick={handlerClick}>
                    Выйти
            </Button>

        </div>


    )
}

export default PerssonalAccount