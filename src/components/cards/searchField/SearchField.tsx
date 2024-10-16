import React, { FC, useContext } from "react";
import Data from "../../../data/context/context";
import Value from "../../../data/interfaces/Category";
import { StringStateProps } from "../../../data/interfaces/StringStateProps";
import style from './searchField.module.css';

const SearchField: FC<StringStateProps> = ({ search, setSearch }) => {

    const value = useContext<Value>(Data);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => setSearch('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    };
    return (
        <div className={style.form_container}>
                <form onSubmit={handleSubmit}>
                    <input
                        className={style.search_field}
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={handleChange}
                        onClick={handleClick}
                    />
                        <img className={style.search_ico}
                            src="https://i7.uihere.com/icons/805/425/292/cx-6239a19d5332d5b6eb5d8056dc178ad4.png" />
                </form>
            </div>

    )
}

export default SearchField;
