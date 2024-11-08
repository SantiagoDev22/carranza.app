"use client";
import Image from "next/image";

import { useShoppingCart } from "@/app/services/shoppingCart";

const Order = () => {

    const { cartItems, removeFromCart, updateCartItemQuantity} = useShoppingCart();

    return (
        <div>
            {cartItems.map((item) => {
                const imgUrl = item.gallery.length > 0 
                ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${item.gallery[0].route}${item.gallery[0].img}`
                : "/images/website/tienda/shampoo.png";
                return(
            <div key={item.id} className="flex gap-x-5 py-5 px-6 shadow-xl relative">
                <figure className="flex shrink-0">
                    <Image
                        className="xl:w-14"
                        src={imgUrl}
                        alt={item.title}
                        width={100}
                        height={100}
                        unoptimized
                    />
                </figure>
                <div className="flex flex-col gap-y-3">
                    <p className="text-oc-green-1">
                        {item.title}
                    </p>
                    <ul className="border border-oc-green-2 rounded-3xl flex">
                        <li className="border-r border-oc-green-2 py-1">
                            <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)} className="text-oc-green-1 font-medium text-lg px-4">
                                -
                            </button> 
                        </li>
                        <li className="px-4 py-1">
                            <span className="text-oc-green-1 font-semibold text-lg">
                                {item.quantity}
                            </span> 
                        </li>
                        <li className="border-l border-oc-green-2 py-1">
                            <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)} className="text-oc-green-1 font-medium text-lg px-4">
                                +
                            </button> 
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-oc-brown-1">
                        ${(item.quantity * item.price)}
                    </p>
                </div>
                <button onClick={() => removeFromCart(item.id) } className="absolute right-3 bottom-3 text-oc-green-1 text-sm">
                    Eliminar
                </button>
            </div>
            );
        })}
        </div>
    );
}

export default Order;