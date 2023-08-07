import { createContext, useReducer, useContext, useState } from "react";
import shopReducer, { initialState } from "@/pages/shopReducer";
import Cookies from "js-cookie";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToBasket = (product) => {
    const updatedBasket = state.products;
    for (let idx = 0; idx < updatedBasket.lenght; idx++) {
      if (updatedBasket[idx].id === product.id) {
        updatedBasket[idx].count += product.count;
        break;
      }
    }

    const exists = updatedBasket.some((item) => item.id === product.id);

    if (!exists) {
      updatedBasket.push(product);
    }

    Cookies.set("products", JSON.stringify(updatedBasket));

    updatedPrice(updatedBasket);

    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        products: updatedBasket,
      },
    });
  };

  const removeFromBasket = (product) => {
    const updatedBasket = state.products.filter(
      (currentProduct) => currentProduct.id !== product.id
    );
    Cookies.set("products", JSON.stringify(updatedBasket));
    updatedPrice(updatedBasket);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: {
        products: updatedBasket,
      },
    });
  };

  const updatedPrice = (products) => {
    let total = 0;

    products.forEach((product) => (total += product.price * product.count));

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
      },
    });
  };

  const incrementCount = (product) => {
    const newBasket = state.products;
    for (let idx = 0; idx < newBasket.lenght; idx++) {
      if (newBasket[idx].id === product.id) {
        newBasket[idx].count = product.count;
        break;
      }
    }
    Cookies.set("products", JSON.stringify(newBasket));
    updatedPrice(newBasket);

    dispatch({
      type: "INCREMENT_COUNT",
      payload: {
        products: newBasket,
      },
    });
  };

  const decreaseCount = (product) => {
    const newBasket = state.products;
    for (let idx = 0; idx < newBasket.lenght; idx++) {
      if (newBasket[idx].id === product.id) {
        newBasket[idx].count = product.count;
        break;
      }
    }

    Cookies.set("products", JSON.stringify(newBasket));
    updatedPrice(newBasket);
    dispatch({
      type: "DECREASE_COUNT",
      payload: {
        products: newBasket,
      },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToBasket,
    removeFromBasket,
    incrementCount,
    decreaseCount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("useShop must be usen within ShopContext");
  }
  return context;
};

export default useShop;
