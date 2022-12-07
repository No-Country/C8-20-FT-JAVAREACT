import styles from "./App.module.css";
import * as component from "./components";
import Carousel from "./components/Home";
import * as bootstrap from "bootstrap";
import Search from './components/inputSearch/InputGet';
import Login from './components/modalLogin/Login';
import cartImg from './assets/images/iconOptions/cart.png';
import Cart from './components/cart/Cart';

import burger1 from "./assets/images/burgers/burger1.png";
import burger2 from "./assets/images/burgers/burger2.png";
import burger3 from "./assets/images/burgers/burger3.png";
import burger4 from "./assets/images/burgers/burger4.png";
import burger5 from "./assets/images/burgers/burger5.png";
import burger6 from "./assets/images/burgers/burger6.png";
import burger7 from "./assets/images/burgers/burger7.png";
import { useState } from "react";
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


  const [login, setLogin] = useState(false)
  const [close, setClose] = useState(false)

 

  return (
    <div className={styles.mainContainer}>
      {/* las clases css de navbar y login estan en index.css provisorio  */}
      <div className="navbar">
        <div>
          <button onClick={()=>{setLogin(true)}} className='login' >Log in</button>
        </div>
          navbar
          <Search />
          <div>
          <button className="buttonCartOpen" onClick={()=>{setClose(true)}}><img src={cartImg} /></button>
        </div>
      </div>
      {close && <Cart setClose={setClose} />}
      {login && <Login setLogin={setLogin} />}
      <component.Title />
      <div className={styles.carruselContainer}>
        <Carousel />
      </div>
      <div className={styles.cardListContainer}>
        {burguerList.map((burger, index) => (
          <component.ProductCard img={burger} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
