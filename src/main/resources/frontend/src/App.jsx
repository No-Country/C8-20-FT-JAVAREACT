import styles from "./App.module.css";
import * as component from "./components";
import Carousel from "./components/Home";
import * as bootstrap from "bootstrap";
import Search from './components/inputSearch/InputGet';
import Login from './components/modalLogin/Login';
import cartImg from './assets/images/iconOptions/cart.png';
import Cart from './components/cart/Cart';
import { useState } from "react";
import cart from "./assets/images/yellow-cart.svg";
import blackwood from "./assets/images/blackwood.jpg";
import tomate from "./assets/images/tomate.png";
import vegetales from "./assets/images/vegetales.png";

function App() {

  const [login, setLogin] = useState(false)
  const [close, setClose] = useState(false)

  return (
    <div className={styles.mainContainer}>
       <div className="navbar">
        <div>
          <button onClick={()=>{setLogin(true)}} className='login' >Log in</button>
        </div>
          <Search />
          <div>
          <button className="buttonCartOpen" onClick={()=>{setClose(true)}}><img src={cartImg} /></button>
        </div>
      </div>
      {close && <Cart setClose={setClose} />}
      {login && <Login setLogin={setLogin} />}
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
      <div>
        <button className={styles.fabCart}>
          <img
            className={styles.iconCartImage}
            src={cart}
            alt="Cart icon"
          ></img>
        </button>
      </div>
    </div>
  );
}

export default App;
