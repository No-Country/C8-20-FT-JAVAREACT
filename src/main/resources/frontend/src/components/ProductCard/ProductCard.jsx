import styles from "./ProductCard.module.css";
import {useContext, useState, useEffect} from 'react';
import { Context } from "../cart/Context";
import axios from 'axios';

export const ProductCard = ({ img }) => {

  const dataBase = 'https://c8-20-ft-backend-production.up.railway.app/product/products'
  const [item, setItem] = useState([])

    useEffect(()=>{
        axios.get(dataBase)
        .then(res => {
            setItem(res.data)
        })
        .catch((rej)=>{
            console.log('error al traer los productos')
        })
        
    },[])

  const{isInCart, addItem, qty} = useContext(Context)

  const onAdd = () =>{
    isInCart(item.id)
    addItem(item, qty)
}


  return (
    <div className={styles.cardMainContainer}>
      <div id="imageContainer" className={styles.imageContainer}>
        <img src={img} alt="burger1"></img>
      </div>
      <div id="solidContainer" className={styles.solidContainer}>
        <div className={styles.burgerName}>Kingpin</div>
        <div className={styles.burgerPrice}>$8.45</div>
        <button className={styles.addButton} onClick={()=>{onAdd()}}>Añadir al carrito</button>
      </div>
    </div>
  );
};
