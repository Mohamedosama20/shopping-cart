import { createContext, useState, useContext, useEffect } from "react";
import ShoppingCart from '../components/ShoppingCart'

const ShoppingCartContext = createContext({});
const initialCartItems = localStorage.getItem('Shopping-Cart') ? JSON.parse(localStorage.getItem('Shopping-Cart'))
: []

const ShoppingCartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState(initialCartItems);
    useEffect (() => {
        localStorage.setItem('Shopping-Cart', JSON.stringify(cartItems) )
    }, [cartItems])
    const openCart = () => {
        setIsOpen (true)
    }
    const closeCart = () => {
        setIsOpen (false)
    }

    const cartQuantity = cartItems.reduce((quantity, item) => (
        item.quantity + quantity
    ),0)
    const getItemsQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    };
    const addToCart = (id) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        })
    }
    const removeFromCart = (id) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        })
    }
    const ItemRemoveCart = (id) => {
        setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    }

    return (
        <ShoppingCartContext.Provider 
        value={
            {cartItems, getItemsQuantity, addToCart, removeFromCart, 
            ItemRemoveCart, openCart, closeCart, cartQuantity }}>
            {children}
            <ShoppingCart isOpen= {isOpen}/>
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)


};