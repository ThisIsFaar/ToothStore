import { createContext, useContext, useEffect, useReducer } from 'react';
import { cartReducer, filterProductReducer } from './Reducer';
const Cart = createContext();
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((products) => {
        let allData = products.map((product) => {
          product.quantity = Math.floor(Math.random() * 10);
          product.inStock = product.quantity ? true : false;
          return product;
        });
        dispatch({ type: 'fetchData', payload: allData });
      });
  }, []);

  const [filterProductState, filterProductdispatch] = useReducer(
    filterProductReducer,
    {
      byCategory: 'all',
      byRating: 'all',
      bySearch: '',
    }
  );

  return (
    <Cart.Provider
      value={{ state, dispatch, filterProductState, filterProductdispatch }}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
