import styles from "./App.module.css";
import * as component from "./components";
import Carousel from "./components/Home";
import * as bootstrap from "bootstrap";

import burgerIcon from "./assets/images/burger-menu-icon.png";
import blackwood from "./assets/images/blackwood.jpg";
import tomate from "./assets/images/tomate.png";
import vegetales from "./assets/images/vegetales.png";
import burger1 from "./assets/images/burgers/burger1.png";
import burger2 from "./assets/images/burgers/burger2.png";
import burger3 from "./assets/images/burgers/burger3.png";
import burger4 from "./assets/images/burgers/burger4.png";
import burger5 from "./assets/images/burgers/burger5.png";
import burger6 from "./assets/images/burgers/burger6.png";
import burger7 from "./assets/images/burgers/burger7.png";
// import burger8 from "./assets/images/burgers/burger8.png";
// import burger9 from "./assets/images/burgers/burger9.png";

function App() {
  const burguerList = [
    burger1,
    burger2,
    burger3,
    burger4,
    burger5,
    burger6,
    burger7,
  ];
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
        <div className={styles.cardListContainer}>
          {burguerList.map((burger, index) => (
            <component.ProductCard img={burger} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
