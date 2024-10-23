import React, { FC, useContext } from "react";
import Data from "../../data/context/context";
import Product from "../../data/interfaces/Product";
import style from './FullCard.module.css'
import { useNavigate } from "react-router-dom";

// interface FullCardProps extends Product {
//     setCurrentProduct: React.Dispatch<React.SetStateAction<Product>>;
//   }

const FullCard: React.FC<Product> = ({ id, title, price, description, image, category}) => {

    const navigate = useNavigate();

    const value = useContext(Data);

    const handlerClick = () => {

       

        navigate('/cards')
    }

    return (
        <div className="full-card" >
            <img src={image}></img>
            <div id='card_title'>{title}</div>
            <div className="card_footer">
                <div id='card_price'>{price + '$'}</div>
                <button onClick={handlerClick}>Назад</button>
            </div>
            {/* <figcaption>{description}</figcaption> */}
        </div>
    )
}

export default FullCard;