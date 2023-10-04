import React from "react";
import { Text } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";

import styles from '../../public/css/home.module.css'
import { Spacer } from "./Spacer";
import PaginationDesktop from "./PaginationDesktop";

export const HomeComponent: React.FC = () => {
  const { cars } = useCars();

  const onClickLeft = () => {
    let cardList = document?.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollPosition = cardList?.scrollLeft ?? 0;
    if(scrollPosition >= cardSize) {
      cardList?.scrollTo({ left: scrollPosition - cardSize })
    }
  }

  const onClickRight = () => {
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollSize = cardList?.scrollWidth ?? 0;
    let scrollPosition = cardList?.scrollLeft ?? 0;
    if(scrollPosition + cardSize <= scrollSize) {
      cardList?.scrollTo({ left: scrollPosition + cardSize })
    }
  }

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      <Spacer></Spacer>
      <div className={styles.cardsWrapper} id="card-list">
        {cars.map(car => <CarCard key={car.id} car={car}/>)}
      </div>
      <PaginationDesktop onClickLeft={onClickLeft} onClickRight={onClickRight}/>
    </div>
  );
};
