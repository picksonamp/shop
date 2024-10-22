import React from "react";
import style from './nav.module.css';
import { useNavigate } from "react-router-dom";

export default function Nav() {

    const navigate = useNavigate()

    const navItems = [
        {
            title: 'Главная',
            link: '/'
        },
        {
            title: 'Товары',
            link: 'cards'
        },
        {
            title: 'Личный кабинет',
            link: 'personal-account'
        }
    ];

    const [activeIndex, setActiveIndex] = React.useState<number|null>(null);

    const handleItemClick = (index:number) => {
      setActiveIndex(index);
    };

    return(

        <nav className={style.navigation}>
            <ul className={style.list}>
            {navItems.map((item, index) => (
                <li 
                    key={index}
                    className={activeIndex === index ? style.active : ''}
                    onClick={() => {handleItemClick(index); navigate(item.link)}}>
                    {item.title}
                </li>
            )

            )}
            </ul>
        </nav>
    )
}