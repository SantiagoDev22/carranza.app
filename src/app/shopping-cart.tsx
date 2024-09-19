import Image from "next/image";
import Order from "../app/order";

export default function shoppingCart() {   
    return (
        <div>
            <p className="text-oc-green-1 font-bold text-lg">
                Tu orden
            </p>
            <div className="divide-y flex flex-col gap-y-9">
                <Order/>
                <div className="flex flex-col gap-y-4 py-5">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-oc-green-1">
                            Subtotal:
                        </p>
                        <p className="text-oc-green-1 font-bold">
                            $0.00
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-oc-green-1">
                            Envío:
                        </p>
                        <p className="text-oc-green-1 font-bold">
                            $0.00
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center pt-6">
                    <p className="font-bold text-oc-green-1">
                        Total:
                    </p>
                    <p className="text-oc-green-1 font-bold">
                        $0.00
                    </p>
                </div>
            </div>
        </div>
    );
}