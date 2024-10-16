import React, { FC, useContext } from "react";
import Data from "../data/context/context";
import Product from "../data/interfaces/Product";

const FullCard: React.FC<Product> = ({ id, title, price, description, image, category }) => {

    const value = useContext(Data);

    return (
        <div className="full-card" >
            <img src={image}></img>
            <div id='card_title'>{title}</div>
            <div className="card_footer">
                <div id='card_price'>{price + '$'}</div>
                <button>Назад</button>
            </div>
            {/* <figcaption>{description}</figcaption> */}
        </div>
    )
}

export default FullCard;