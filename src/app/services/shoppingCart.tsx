"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    gallery: {route:string; img:string}[];
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

export const ShoppingCartProvider: React.FC = ( {children} ) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const storedCart = sessionStorage.getItem('cartItems');
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);

    // Funcion to add products
    const addToCart = (product: CartItem) => {
        setCartItems((prevCartItems) => {
            const existingItemIndex = prevCartItems.findIndex((item) => item.id === product.id);

            if (existingItemIndex !== -1) {
                // Si el producto ya existe, actualiza la cantidad
                const updatedCartItems = [...prevCartItems];
                updatedCartItems[existingItemIndex].quantity += product.quantity;
                updateSessionStorage(updatedCartItems);
                return updatedCartItems;
            } else {
                // Si el producto no existe, lo agrega al carrito
                const newCartItems = [...prevCartItems, product];
                updateSessionStorage(newCartItems);
                return newCartItems;
            }
        });
    }

    // Funcion to remove products
    const removeFromCart = (productId: any) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = prevCartItems.filter((item) => item.id !== productId);
            updateSessionStorage(updatedCartItems);
            return updatedCartItems;
        });
    };

    const updateCartItemQuantity = (productId: any, quantity: number) => {
        const newQuantity = Math.max(1, Math.min(20, quantity));

        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            setCartItems((prevCartItems) => {
                const updatedCartItems = prevCartItems.map((item) =>
                    item.id === productId ? { ...item, quantity: newQuantity } : item
                );
                updateSessionStorage(updatedCartItems);
                return updatedCartItems;
            });
        }
    };

    const clearCart = () => {
        setCartItems([]);
        updateSessionStorage([]);
    }

    const updateSessionStorage = (items: CartItem[]) => {
        sessionStorage.setItem("cartItems", JSON.stringify(items));
    };

    
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