import React from "react";
import { CategoriesListProps } from "../../../data/interfaces/CategoriesListProps";
import { CategoryStateProps } from "../../../data/interfaces/CategoriesListProps";
import style from './categoriesList.module.css';

export const CategoriesList: React.FC<CategoriesListProps & CategoryStateProps> = (
        {
        category,
        setCategory,
        categories,
        setCategories
    }) => {

    const handleChangeCategory = (event: React.MouseEvent<HTMLDivElement>) => {
        setCategory(event.currentTarget.className)
    }

    const firstLetterToUpperCase = (category: string): string => {
        if (!category || category.length === 0) {
            return category;
        }

        return category[0].toUpperCase() + category.slice(1);
    }


    return (
        <div className={style.categories}>
            <h3>Выбрана категория:</h3> 
            <h3 className={style.checked_category}>{!category ? 'All' : firstLetterToUpperCase(category)}</h3>
            <hr></hr>
            <div onClick={() => setCategory('')}>All</div>
            {
                categories.map((cat, index) => (
                    <div    key={index} 
                            className={cat} 
                            onClick={handleChangeCategory}>
                            {firstLetterToUpperCase(cat)}
                    </div>)
                )
            }
        </div>
    )
}