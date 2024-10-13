"use client"
import Order from "../app/order";
import { useShoppingCart } from "./services/shoppingCart";

export default function ShoppingCart() {   

    const { cartItems } = useShoppingCart();

    const subtotal = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    },0);
    const shipping = 0;
    const total = shipping + subtotal;

    return (
        <div>
            <p className="text-oc-green-1 font-bold text-lg">
                Tu orden
            </p>
            <div className="divide-y flex w-full flex-col gap-y-9">
                <Order/>
                <div className="flex flex-col gap-y-4 py-5">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-oc-green-1">
                            Subtotal:
                        </p>
                        <p className="text-oc-green-1 font-bold">
                            ${subtotal.toFixed(2)}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-oc-green-1">
                            Envío:
                        </p>
                        <p className="text-oc-green-1 font-bold">
                            ${shipping.toFixed(2)}
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center pt-6">
                    <p className="font-bold text-oc-green-1">
                        Total:
                    </p>
                    <p className="text-oc-green-1 font-bold">
                        ${total.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
}