import React from "react";
import Skeleton from "react-loading-skeleton";
import style from './SkeletonCardStyle.module.css';
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => {
  return (

    //       <SkeletonTheme baseColor="#202020" highlightColor="#444">
    //   <section>
    //     <Skeleton height={50} width={50} />
    //   </section>
    // </SkeletonTheme>




    <div className={style.skeleton_card}>
      <div className={style.skeleton_card_image_container}>
        <Skeleton height={250} width={250} />
      </div>

      <div className={style.skeleton_card_content}>
        <Skeleton className={style.skeleton_card_title} />
        <Skeleton className={style.skeleton_card_title} />
        <Skeleton className={style.skeleton_card_title} />
      </div>

    </div>


  );
};
export default SkeletonCard;