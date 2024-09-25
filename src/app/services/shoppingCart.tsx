"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
}

interface ShoppingCartType {
    cartItems: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (productId: any) => void;
    updateCartItemQuantity: (productId: any, quantity: number) => void;
    clearCart: () => void;
}

const ShoppingCartContext = createContext<ShoppingCartType | null>(null);

export const useShoppingCart = () => {
    const context = useContext(ShoppingCartContext);
    if(!context){
        throw new Error("useShoppingCart must be used within a ShoppingCartProvider");
    }
    return context;
};

export const ShoppingCartProvider: React.FC = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const storedCart = sessionStorage.getItem('cartItems');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    // Funcion to add products
    const addToCart = (product: CartItem) => {
        const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

        if(existingItemIndex !== -1){
            // Si el producto ya existe, actualiza la cantidad
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += product.quantity;
            setCartItems(updatedCartItems);
            updateSessionStorage();
        }else{
            // Si el producto no existe, lo agrega al carrito
            setCartItems([...cartItems, product]);
            updateSessionStorage();
        }
        updateSessionStorage();
    }

    // Funcion to remove products
    const removeFromCart = (productId: any) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
        updateSessionStorage();
    }

    const updateCartItemQuantity = (productId: any, quantity: number) => {
        if(quantity <= 0){
            removeFromCart(productId);
            updateSessionStorage();
        }else{
            setCartItems((prevCartItems) => 
                prevCartItems.map((item) =>
                    item.id === productId ? { ...item, quantity } : item,
                    updateSessionStorage()
                ),
            );
        }
        updateSessionStorage();
    }

    const clearCart = () => {
        setCartItems([]);
        updateSessionStorage();
    }

    const updateSessionStorage = () => {
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    
    return (
        <ShoppingCartContext.Provider 
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateCartItemQuantity,
                clearCart
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}