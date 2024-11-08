"use client";

import Image from "next/image";
import Link from "next/link";
import { Productos } from "@/app/services/types/Productos";

interface ProductDetailsProps {
    product: Productos;
}

const ProductShow: React.FC<ProductDetailsProps> = ({product}) => {
    return (
        <>
            <div className="flex xl:flex-row flex-col gap-y-10 justify-around">
                <figure className="flex justify-center">
                    <Image 
                        alt={product.name} 
                        src={
                            product.cover
                             ? `${process.env.NEXT_PUBLIC_STORAGE_URL}${product.cover}`
                             : product.gallery.length > 0
                             ? `${process.env.NEXT_PUBLIC_STORAGE_URL}${product.gallery[0].route}${product.gallery[0].img}`
                             : "/images/website/tienda/shampoo.png" // Ruta a tu imagen por defecto
                            }
                        width={300} 
                        height={300}
                        unoptimized
                    />
                </figure>
                <div className="flex flex-col gap-y-7">
                    <div className="flex flex-col gap-y-4">
                        <h1 className="text-oc-green-1 text-3xl font-bold text-left xl:text-right">
                            {product.title}
                        </h1>
                        <p className="text-4xl font-bold text-oc-brown-1 text-left xl:text-right">
                            ${product.price}
                        </p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p className="text-oc-green-1 text-left text-lg">
                            Cantidad:
                        </p>       
                        <div className="border-oc-green-1 border-2 flex py-2 justify-between w-full px-3">
                            <a href="#" className="rounded-full font-bold bg-oc-white-1 px-2 text-oc-green-1 flex items-center justify-center">
                                -
                            </a>
                            <p className="text-center text-oc-green-1 font-bold">
                                1
                            </p>
                            <a href="#" className="rounded-full font-bold bg-oc-white-1 px-2 text-oc-green-1 flex items-center justify-center">
                                +
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center pt-8">
                        <a href="#" className="text-black text-2xl hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-8">
                            Compra
                        </a>
                    </div>
                </div>
            </div>
            <ul className="grid grid-cols-3 gap-x-5 pt-11">
                {product.gallery.map((img, index) => {
                    const images = img.id
                    ? `${process.env.NEXT_PUBLIC_STORAGE_URL}${img.route}${img.img}`
                    : "";
                    return (
                        <li key={index}>
                            <Image 
                                alt={product.name}
                                src={images}
                                width={250}
                                height={250}
                                unoptimized
                                className="w-56 h-56 object-scale-down"
                            />
                        </li>
                    );
                })}
            </ul>
            <div className="flex flex-col gap-y-6 pt-12">
                <div className="divide-y-2 divide-oc-green-1">
                    <p className="text-left text-oc-green-1 text-xl font-bold pb-2">
                        Descripción y Detalles
                    </p>
                    <p className="text-lg text-oc-green-1 pt-5">
                        {product.description}
                    </p>
                </div>
                <div className="divide-y-2 divide-oc-green-1">
                    <p className="text-left text-oc-green-1 text-xl font-bold pb-2">
                        Características
                    </p>
                    <p className="text-lg text-oc-green-1 pt-5">
                        {product.body}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProductShow;