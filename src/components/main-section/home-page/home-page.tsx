import React from "react";
import Value from "../../../data/interfaces/Category";
import Data from "../../../data/context/context";
import style from './home-page.module.css';

export default function HomePage() {

    const value = React.useContext<Value>(Data);

    return (
        <div className={style.home_page}>

            <div className={style.home_page_first_block}>
                <div id={style.logo}>
                    <h1 id={style.lorem}>LOREM</h1>
                    <h3 id={style.ipsum}>IPSUM</h3>
                </div>
            </div> 

            {/* <div className="home-page-block">
                <div>
                    <h1>
                        {value.products[3].title}
                    </h1>
                    <h3>
                        {value.products[3].price + '$'}
                    </h3>
                </div>
                <div><img alt='clothes' src={value.products[3].image} /></div>
            </div>

            <div className="home-page-block">
                <div><img alt='clothes' src={value.products[2].image} /></div>
                <div>
                    <h1>
                        {value.products[2].title}
                    </h1>
                    <h3>
                        {value.products[2].price + '$'}
                    </h3>
                </div> 

            </div>  */}

        </div>


    )
}