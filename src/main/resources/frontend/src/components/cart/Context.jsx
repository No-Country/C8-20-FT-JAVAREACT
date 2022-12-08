import { createContext, useState } from "react";

export const Context = createContext();

const { Provider } = Context;

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(1);

  const get = JSON.parse(localStorage.getItem("cart"));
  if (get === null) {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addItem = (item, qty) => {
    const newItem = {
      ...item,
      qty,
    };

    if (isInCart(newItem.id)) {
      const findProduct = cart.find((product) => product.id === newItem.id);
      const indexProduct = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[indexProduct].qty += qty;
      setCart(auxArray);
      localStorage.setItem("cart", JSON.stringify(auxArray));
    } else {
      setCart([...cart, newItem]);
      localStorage.setItem("cart", JSON.stringify([...cart, newItem]));
    }
  };

  const deleteItem = (id) => {
    localStorage.setItem(
      "cart",
      JSON.stringify(get.filter((product) => product.id !== id))
    );
    setCart(cart.filter((product) => product.id !== id));
  };

  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const quantity = () => {
    if (get) {
      return get.reduce((acc, product) => acc + product.qty, 0);
    }
  };

  const total = () => {
    if (get) {
      return get.reduce(
        (acc, product) => acc + Math.round(product.price * product.qty),
        0
      );
    }
  };

  return (
    <Provider
      value={{
        get,
        cart,
        isInCart,
        setCart,
        addItem,
        deleteItem,
        emptyCart,
        quantity,
        qty,
        setQty,
        total,
      }}
    >
      {children}
    </Provider>
  );
};

export default MyProvider;
