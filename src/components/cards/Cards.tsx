import React, { useContext } from "react";
import Data from "../../data/context/context";
import Product from "../../data/interfaces/Product";
import LazyCard from "./card/LazyCard";
import Value from "../../data/interfaces/Category";
import SearchField from "./searchField/SearchField";
import { CategoriesList } from "./categoriesList/CategoriesList";
import style from './Cards.module.css';
import SkeletonCard from "./card/SkeletonCard";

export default function Cards() {


    const value = useContext<Value>(Data);

    const [loading, setLoading] = React.useState(true)

    const [search, setSearch] = React.useState('')
    const [categories, setCategories] = React.useState<string[]>([''])
    const [category, setCategory] = React.useState<string>('')

    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setCategories(json))
            .finally(() => setLoading(false))
    }, [])


    return (
        <div className={style.cards_container}>
            <div className={style.side_bar}>
                <SearchField search={search} setSearch={setSearch} />
                <CategoriesList
                    categories={categories}
                    setCategories={setCategories}
                    category={category}
                    setCategory={setCategory}
                />
            </div>


            <div className={style.cards}>
                {loading ?
                    Array(4)
                        .fill('')
                        .map((_, index) => <SkeletonCard key={index} />)
                    :
                    value.products
                        .filter(product => product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                        .filter(product => product.category.toLocaleLowerCase().includes(category.toLocaleLowerCase()))
                        .map((product: Product) => (<LazyCard key={product.id} {...product} />))
                }
            </div>
        </div>
    )
}