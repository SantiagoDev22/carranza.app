'use client';

import { log } from "console";
import React, { useState, useEffect } from "react";

interface Shipping {
    shipping: string;
    price: string;
}

const ShippingForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [shippingError, setShippingError] = useState("");
    const [selectedShipping, setSelectedShipping] = useState<Shipping | null>(null);

    const handleShippingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const shippingValue = event.target.value;
        const shippingPrice = event.target.form?.shipping_value.value;

        setSelectedShipping({
            shipping: shippingValue,
            price: shippingPrice,
        });

        setShippingError('');
    };
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // Validar todos los campos antes de enviar
        if(!selectedShipping){
            setShippingError("Debes seleccionar un método de envío");
            return;
        }
    
        setIsLoading(true);
    
        const cartData = JSON.parse(sessionStorage.getItem('customerData') || '{}');
        const orderData = {
            ...cartData,
            shipping: selectedShipping,
        };
        // Guardar el pedido en la sessionStorage
        sessionStorage.setItem('orderData', JSON.stringify(orderData));
    
        const res = await fetch('/api/checkout', {
            method: "POST",
            body: JSON.stringify(sessionStorage),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const session = await res.json();
        setTimeout(() => {
            setIsLoading(false);
            window.location = session.url
        }, 2100);


        // const data = await res.json();
        console.log(session);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="pt-10 flex flex-col gap-y-10">
                    <p className="text-oc-green-1 font-bold text-lg">
                        Envío por paquetería
                    </p>
                    <div className="pt-3">
                        <div className="flex items-center mb-5 hover:cursor-pointer">
                            <input type="hidden" value={150} name="shipping_value"/>
                            <input id="shipping-1" name="shipping" type="radio" onChange={handleShippingChange} defaultChecked={false} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="shipping-1" className="block ms-2 font-medium text-oc-green-1">
                                $150 por paquete
                            </label>
                        </div>
                        {shippingError && <p className="text-red-500 text-sm">{shippingError}</p>}
                    </div>
                    <div className="flex justify-center gap-x-10">
                        <a href="/carrito-compras/mis-datos" className="hover:text-black text-lg text-white bg-oc-brown-1 transition hover:bg-white border border-oc-brown-1 py-2 px-4">
                            Volver
                        </a>
                        <button type="submit" className="hover:text-black text-lg text-white bg-oc-brown-1 transition hover:bg-white border border-oc-brown-1 py-2 px-4">
                            <svg aria-hidden="true" role="status" className={`${isLoading ? '' : 'hidden'} inline w-4 h-4 me-3 text-oc-brown-1 animate-spin`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg> 
                            Pagar
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ShippingForm;