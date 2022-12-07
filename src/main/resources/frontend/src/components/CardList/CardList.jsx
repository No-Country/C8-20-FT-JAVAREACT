import * as component from "../";
import styles from "./CardList.module.css";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const CardList = ({ burgerList }) => {
  const [cardListData, setCardListData] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://c8-20-ft-backend-production.up.railway.app/product/products";

    axios.get(endPoint).then((response) => {
      setCardListData(response.data);
      console.log("Products endPoint response > ", response.data);
    });
  }, []);

  return (
    <div>
      <div className={styles.cardListContainer}>
        {cardListData.map(({ id, description, imageUrl, price, title }) => (
          <component.ProductCard
            id={id}
            description={description}
            imageUrl={imageUrl}
            price={price}
            title={title}
          />
        ))}
      </div>
      {/* <div className={styles.cardListContainer}>
        {burgerList.map((burger, index) => (
          <component.ProductCard img={burger} key={index} />
        ))}
      </div> */}
    </div>
  );
};
