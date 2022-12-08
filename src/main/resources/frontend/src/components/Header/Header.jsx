import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "animate.css";
import cart from "../../assets/images/cart.png";
import Cart from "../cart/Cart";
import {useState, useContext} from 'react';
import {Context} from '../cart/Context';
import Search from '../inputSearch/InputGet';
// import { Search } from "../Search/Search";
// import { auth, logout } from "../../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

export const Header = () => {

  const{quantity ,qty} = useContext(Context)
  
  const token = sessionStorage.getItem("token");
  const swalert = withReactContent(Swal);

  // console.log("token", token);
  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    // console.log("Target ID :", e.target.id);
    // console.log("onHandleClick token", token);
    // if (!token) {
    //   swalert.fire();
    //   swalert.fire({
    //     customClass: {
    //       container: [styles.swalertContainer],
    //       popup: [styles.swalertPopup],
    //       title: [styles.swalertTitle],
    //       htmlContainer: [styles.swalertHtml],
    //       actions: [styles.swalertActions],
    //       confirmButton: [styles.swalertConfirmButton],
    //     },
    //     showClass: {
    //       popup: `
    //       animate__animated
    //       animate__zoomIn
    //       animate__faster
    //     `,
    //     },
    //     hideClass: {
    //       popup: "animate__animated animate__flipOutX",
    //     },
    //     title: "Error",
    //     text: "Necesitas loguearte para acceder a este contenido",
    //     backdrop: false,
    //     buttonsStyling: false,
    //     scrollbarPadding: false,
    //   });
    //   return;
    // }
    // console.log("Hacia el listado");
    if (e.target.id === "headerHome") navigate("/");
    if (e.target.id === "headerLogin") navigate("/login");
  };

  const [carting, setCarting] = useState(false)

  return (
    <nav>
      <div className={styles.headerDiv}>
        <a href="/" className={styles.headerTitle} id="netflix">
          <div className={styles.titleContainer}>
            <span id="titleLeft">VILLAIN</span>
            <span id="titleRight">BURGER</span>
          </div>
        </a>
        <Link to="/">Home</Link>
        <Link to="/login" onClick={handleClick} id="headerLogin">
          Login
        </Link>
        <Link to="/" onClick={handleClick} id="headerCart">
          <div>
          {carting && <Cart setCarting={setCarting} />}
            <button className={styles.fabCart} onClick={()=>{setCarting(true)}}>
            <div className="Qty">
              <p>{quantity(qty)}</p>   
              {/* clases en index.css provisoriamente */}
            </div>
              <img
                className={styles.iconCartImage}
                src={cart}
                alt="Cart icon"
              ></img>
            </button>
          </div>
          <div className="searchContainer">
            <Search />
          </div>
        </Link>

        {/* <Link to="/" onClick={logout}>
            Logout
          </Link> */}
        {/* <div className={styles.push}>
            <Search />
          </div> */}
      </div>
      
    </nav>
  );
};
