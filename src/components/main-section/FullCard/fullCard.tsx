import React, { FC, useContext } from "react";
import Data from "../../../data/context/context";
import Product from "../../../data/interfaces/Product";
import style from './fullCard.module.css'
import { useNavigate } from "react-router-dom";

const FullCard: FC<Product> = ({ title, price, description, image, category }) => {

    const navigate = useNavigate();

    const value = useContext(Data);

    const handlerClick = () => navigate('/cards')

    const handlerAddToChart = () => {} 

    return (
        <div className={style.full_card} >
            <div className={style.image_container}>
                <img className={style.image} src={image} />
            </div>

            <div className={style.full_decription}>

                <div className={style.card_title}>{title}</div>
                <div >{'Категория: ' + category}</div>
                <div >{'Цена: ' + price + '$'}</div>
                <figcaption>{'Описание: ' + description}</figcaption>
                <div>
                    <button className={style.button} onClick={handlerAddToChart}>В КОРЗИНУ</button>
                    <button className={style.button} onClick={handlerClick}>НАЗАД</button>
                </div>

            </div>

        </div>
    )
}

export default FullCard;