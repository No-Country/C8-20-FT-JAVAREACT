import styles from "./Home.module.css";
import * as component from "../";
import Carousel from "../HomeCarusel";

import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import * as bootstrap from "bootstrap";

import cart from "../../assets/images/yellow-cart.svg";
import blackwood from "../../assets/images/blackwood.jpg";
import tomate from "../../assets/images/tomate.png";
import vegetales from "../../assets/images/vegetales.png";

export const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.topContainer}
        style={{
          backgroundImage: `url(${blackwood})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.tomateContainer}>
          <img src={tomate} alt="tomate"></img>
        </div>
        <div className={styles.vegetalesContainer}>
          <img
            className={styles.vegetalesImage}
            src={vegetales}
            alt="vegetales"
          ></img>
        </div>
        <div className={styles.gradientLayer}>
          <div className={styles.navbarContainer}>
            {/* <div className={styles.burgerIconContainer}>
              <img
                className={styles.burgerIconImage}
                src={burgerIcon}
                alt="burgerIcon"
              ></img>
            </div> */}
            <div className={styles.titleContainer}>
              <component.Title />
            </div>
          </div>

          <div className={styles.carruselContainer}>
            <Carousel />
          </div>
        </div>
      </div>

      <div className={styles.middleContainer}>
        <component.CardList />
        {/* <div className={styles.cardListContainer}>
          {burguerList.map((burger, index) => (
            <component.ProductCard img={burger} key={index} />
          ))}
        </div> */}
      </div>
      {/* <div>
        <button className={styles.fabCart}>
          <img
            className={styles.iconCartImage}
            src={cart}
            alt="Cart icon"
          ></img>
        </button>
      </div> */}
    </div>
  );
};
