import { useContext, useState } from "react";
import { Context } from "./Context";
import Count from "./ItemCount";
import "../../css/cart.css";

function Cart({ setCarting }) {
  const { total, emptyCart, deleteItem, get } = useContext(Context);

  return (
    <>
      <div className="containerCart">
        <div className="modalCart">
          <button
            className="closeModalCart"
            onClick={() => {
              setCarting(false);
            }}
          >
            X
          </button>
          <div>
            {get.length > 0 && (
              <div className="myCartTitle">
                <h3>Mi carrito</h3>
                <p>Resumen de mi compra</p>
              </div>
            )}
            <div className="containerCartCardsStyles">
              <div className="containerCartCardsStylesScroll">
                {get.length > 0 ? (
                  get.map((Item, cart) => {
                    return (
                      <div key={cart} className="containerCardCart">
                        <img src={Item.imageUrl} />
                        <p>{Item.title}</p>
                        <p>US$ {Item.price}</p>
                        <p>X{Item.qty}</p>
                        <button
                          onClick={() => {
                            deleteItem(Item.id);
                          }}
                        >
                          Eliminar
                        </button>
                        {/* <Count /> */}
                      </div>
                    );
                  })
                ) : (
                  <div className="noProductInCart">
                    <p>No hay productos en el carrito</p>
                  </div>
                )}
              </div>
            </div>
            {get.length > 0 && (
              <div className="PriceAndFinally">
                <p>Total: US${total()}</p>
                <button className="finallyBuy">Finalizar compra</button>
                <button
                  onClick={() => {
                    emptyCart();
                  }}
                  className="emptyCart"
                >
                  Vaciar Carrito
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
