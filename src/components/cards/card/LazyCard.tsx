import React from "react";
import Product from "../../../data/interfaces/Product";
import { useInView } from 'react-intersection-observer';
import SkeletonCard from "./SkeletonCard";
import Card from "./Card";

const LazyCard: React.FC<Product> = ({ id, title, price, description, image, category }) => {

    const prop = { id, title, price, description, image, category }

    const { ref, inView } = useInView({
        triggerOnce: true, // Загружает только один раз
        threshold: 0.2, // Процент видимости для триггера
      });

    return (
        <div ref={ref}>
            {
                inView ? <Card  {...prop} /> : <SkeletonCard/>
            }
         </div>
    )
}

export default LazyCard;