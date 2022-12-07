import { useContext } from "react";
import { Context } from "./Context";
import Count from "./ItemCount";
import '../../css/cart.css';

function Cart({setClose}){

    const {total, emptyCart, deleteItem, get} = useContext(Context)

    return(
        <>
        <div className="containerCart">
            <div className="modalCart">
                <button className="closeModalCart" onClick={()=>{setClose(false)}}>X</button>
                <div>
                {get.length > 0 && 
                    <div>
                        <h3>Mi carrito</h3>
                        <p>Resumen de mi compra</p>
                    </div>
                }
               {get.length > 0 ?
                    get.map((Item, cart) => {
                       return <div key={cart}>
                            <img src={Item.url} />
                            <p>{Item.title}</p>
                            <p>US$ {Item.price}</p>
                            <p>X{Item.qty}</p>
                            <button onClick={()=>{deleteItem(Item.id)}}>Eliminar</button>
                            <Count />
                        </div>
                    }):
                    <div className="noProductInCart">
                        <p>No hay productos en el carrito</p>
                    </div>
              }
                 
                {get.length > 0 && 
                    <div>
                        <p>Total: US$ {total()}</p>
                        <button>Finalizar compra</button>
                        <button onClick={()=>{emptyCart()}}>Vaciar Carrito</button>
                    </div>
                }
            </div>
            </div>
        </div>
            
        </>
    )
}

export default Cart;