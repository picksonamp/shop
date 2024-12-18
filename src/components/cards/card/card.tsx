import React, { FC, useContext } from "react";
import Data from "../../../data/context/context";
import Product from "../../../data/interfaces/Product";
import style from './Card.module.css';
import { useNavigate } from "react-router-dom";


const Card: React.FC<Product> = ({ id, title, price, description, image, category }) => {

    const value = useContext(Data);

    const navigate = useNavigate();

    const [buttonStyle, setButtonStyle] = React.useState("style.purchase_button_add")
    const [buttonText, setButtonText] = React.useState("Buy")

    const handleClick = () => {

        value.setCurrentProduct({
            category,
            description,
            id,
            image,
            price,
            title,
        }
        )

        window.scrollTo({
            top: 0,
            behavior: 'auto' // для прокрутки вверх т.к. после выбора таваров в конце страницыб карточка товара, при переходе на нее, отображается внизу 
        })

        navigate('/full_card')
    }


    return (
 
                <div
                className={style.product_card}
                id={String(id)}
            // onClick={handleOpenDescription}
            >
                <div className={style.product_card_image_container}>
                    <img
                        src={image}
                        loading="lazy"
                        alt='Product Image' />
                </div>

                <div className={style.product_card_content}>
                    <div className={style.product_card_title}>{title}</div>
                    <div className={style.card_footer}>
                        <div className={style.product_card_price}>{price + '$'}</div>
                        <button
                            className={style.purchase_button_add}
                            onClick={handleClick}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div> 


    )
}

export default Card;