import Image from "next/image";

export default function shoppingCart() {   
    return (
        <div>
            <p className="text-oc-green-1 font-bold text-lg">
                Tu orden
            </p>
            <div className="divide-y flex flex-col gap-y-9">
                <div className="flex gap-x-5 py-5 px-6 shadow-xl relative">
                    <figure>
                        <Image
                            className="xl:w-60"
                            src="/images/website/tienda/shampoo.png"
                            alt="Producto"
                            width={100}
                            height={100}
                        />
                    </figure>
                    <div className="flex flex-col gap-y-3">
                        <p className="text-oc-green-1">
                            Shampoo
                        </p>
                        <ul className="border border-oc-green-2 rounded-3xl flex">
                            <li className="border-r border-oc-green-2 px-4 py-1">
                                <a href="#" className="text-oc-green-1 font-medium text-lg">
                                    -
                                </a> 
                            </li>
                            <li className="px-4 py-1">
                                <a href="#" className="text-oc-green-1 font-semibold text-lg">
                                    1
                                </a> 
                            </li>
                            <li className="border-l border-oc-green-2 px-4 py-1">
                                <a href="#" className="text-oc-green-1 font-medium text-lg">
                                    +
                                </a> 
                            </li>
                        </ul>
                    </div>
                    <div className="pl-5">
                        <p className="text-oc-brown-1">
                            $400
                        </p>
                    </div>
                    <a href="#" className="absolute right-3 bottom-3 text-oc-green-1 text-sm">
                        Eliminar
                    </a>
                </div>
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