import React, { createContext, useContext, useState } from "react";
// import { toast } from 'react-hot-toast';

const context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [activeMenu, setActiveMenu] = useState(true);
    const [currentMode, setCurrentMode] = useState('Light');
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);
    const [showUserProfile, setShowUserProfile] = useState(false);

    const setMode = (e) => {
      setCurrentMode(e.target.value);
    }

    const increaseQuantity = () => {
        setQty((qty) => qty + 1);
    }

    const decreaseQuantity = () => {
        setQty((qty) => {
            if(qty - 1 < 1) return 1;
            return qty - 1;
        });
    }

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item.id === product.id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
        
        if(checkProductInCart) {
          const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct.id === product.id) return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity
            }
          })
    
          setCartItems(updatedCartItems);
        } else {
          product.quantity = quantity;
          
          setCartItems([...cartItems, { ...product }]);
        }
      }

      const onRemove = (product) => {
        const foundProduct = cartItems.find((item) => item.id === product.id);
        const newCartItems = cartItems.filter((item) => item.id !== product.id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
      }

      const toggleCartItemQuantity = (product, value) => {
        const foundProduct = cartItems.find((item) => item.id === product.id)
        console.log(foundProduct);
        const index = cartItems.findIndex((item) => item.id === product.id);
        const newCartItems = cartItems.filter((item) => item.id !== product.id)

        if(value === 'inc') {
          setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice + parseInt(foundProduct.price))
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
        } else if(value === 'dec') {
          if (foundProduct.quantity > 1) {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
          }
        }
      }

    return (
        <context.Provider
            value={{
                showCart,
                setShowCart,
                showUserProfile,
                setShowUserProfile,
                showProducts,
                setShowProducts,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                increaseQuantity,
                decreaseQuantity,
                toggleCartItemQuantity,
                onAdd,
                onRemove,
                activeMenu,
                setActiveMenu,
                currentMode,
                setMode
            }}
        >
            {children}
        </context.Provider>
    )
}

export const useStateContext = () => useContext(context);