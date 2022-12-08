import styles from "./ProductCard.module.css";

import { motion } from "framer-motion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "animate.css";
import {useEffect, useState, useContext} from 'react';
import {Context} from '../cart/Context';

const swalert = withReactContent(Swal);
export const ProductCard = ({item}) => {
  const animatedEntrances = [
    " animate__flipInX",
    " animate__rotateIn",
    " animate__rollIn",
    " animate__jackInTheBox",
    " animate__zoomIn",
    " animate__slideInDown",
    " animate__slideInLeft",
    " animate__fadeIn",
    " animate__lightSpeedInLeft",
  ];
  const animatedExits = [
    " animate__flipOutX",
    " animate__rotateOut",
    " animate__rollOut",
    " animate__hinge",
    " animate__zoomOut",
    " animate__slideOutDown",
    " animate__slideOutRight",
    " animate__fadeOut",
    " animate__lightSpeedOutRight",
  ];
  const animation = 3;

  const [isOpen, setIsopen] = useState(false);
  const [scale, setScale] = useState(0.8);
  const [scale2, setScale2] = useState(0.1);
  const [valueY1, setvalueY1] = useState(0);
  const [valueY2, setvalueY2] = useState(0);

  const{isInCart, addItem, qty} = useContext(Context)

  const onAdd = () =>{
    isInCart(item.id)
    addItem(item, qty)
}

  useEffect(() => {
    console.log("isOpen > ", isOpen);
    if (isOpen) {
      setScale(0.5);
      setScale2(1);
      setvalueY1(-30);
      setvalueY2(-75);
    } else {
      setScale(1);
      setScale2(0.1);
      setvalueY1(0);
      setvalueY2(-100);
    }
  }, [isOpen]);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log("Target ID :", e.target.id);
    // console.log("onHandleClick token", token);

    swalert.fire();
    swalert.fire({
      customClass: {
        container: [styles.swalertContainer],
        popup: [styles.swalertPopup],
        title: [styles.swalertTitle],
        htmlContainer: [styles.swalertHtml],
        actions: [styles.swalertActions],
        confirmButton: [styles.swalertConfirmButton],
      },
      showClass: {
        popup: "animate__animated" + [animatedEntrances[animation]],
      },
      hideClass: {
        popup: "animate__animated" + [animatedExits[animation]],
      },
      title: "OOPS!",
      text: "Componente en desarrollo...",
      backdrop: true,
      buttonsStyling: false,
      scrollbarPadding: false,
    });
  };

  return (
    <div className={styles.cardMainContainer}>
      <div className={styles.imageDetailContainer}>
        <motion.div
          animate={{ y: valueY1, scale: scale }}
          id="imageContainer"
          className={styles.imageContainer}
        >
          <img
            onClick={() => setIsopen(!isOpen)}
            className={styles.cardImage}
            src={item.imageUrl}
            alt={item.title}
          ></img>
        </motion.div>
        <motion.div
          animate={{ y: valueY2, scale: scale2 }}
          className={styles.detailContainer}
        >
          <p>{item.description}</p>
        </motion.div>
      </div>
      <div id="solidContainer" className={styles.solidContainer}>
        <div className={styles.burgerName}>{item.title}</div>
        <div className={styles.burgerPrice}>${item.price}</div>
        <button className={styles.addButton} onClick={()=>{onAdd()}}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};
