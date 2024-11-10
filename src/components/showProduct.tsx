"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Productos } from "@/app/services/types/Productos";
import { useShoppingCart } from "@/app/services/shoppingCart";

interface ProductDetailsProps {
    product: Productos;
}

const ProductShow: React.FC<ProductDetailsProps> = ({product}) => {
    const [products, setProducts] = useState<Productos[]>([]);
    const [quantities, setQuantities] = useState<{ [productId: string]: number }>(
      {}
    );
  
    const [loadingStates, setLoadingStates] = useState<{ [productId: string]: boolean}>({});
    const { addToCart } = useShoppingCart();
    
    const handleIncreaseQuantity = (productId: string) => {
        setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: Math.min((prevQuantities[productId] || 1) + 1, 20),
        }));
    };

    const handleDecreaseQuantity = (productId: string) => {
        setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: Math.max((prevQuantities[productId] || 1) - 1, 1),
        }));
    };

    const handleAddToCart = async (product: Productos) => {
        setLoadingStates((prevState) => ({
          ...prevState,
          [product.id]: true,  // Establecer el estado de carga en true para el producto actual
        }));
    
        try {
          // Simulamos un tiempo de espera de 1.5 segundos con setTimeout para que el loading sea visible
          setTimeout(async () => {
            await addToCart({
              ...product,
              quantity: quantities[product.id] || 1,
            });
    
            // Una vez que el producto se haya agregado al carrito, se oculta el loading
            setLoadingStates((prevState) => ({
              ...prevState,
              [product.id]: false,
            }));
          }, 1500);  // Simulamos un delay de 1.5 segundos
        } catch (error) {
          console.error("Error al agregar al carrito:", error);
          setLoadingStates((prevState) => ({
            ...prevState,
            [product.id]: false,  // En caso de error, ocultamos el loading
          }));
        }
    };
    return (
        <>
            <div className="flex xl:flex-row flex-col gap-y-10 justify-around">
                <figure className="flex justify-center">
                    <Image 
                        alt={product.name} 
                        src={
                            product.cover
                             ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${product.cover}`
                             : product.gallery.length > 0
                             ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${product.gallery[0].route}${product.gallery[0].img}`
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
                            <button
                            onClick={() => handleDecreaseQuantity(product.id)}  
                            className="rounded-full font-bold bg-oc-white-1 h-5 w-5 text-oc-green-1 flex items-end justify-center">
                                -
                            </button>
                            <p className="text-center text-oc-green-1 font-bold">
                            {quantities[product.id] || 1}
                            </p>
                            <button
                            onClick={() => handleIncreaseQuantity(product.id)}
                            className="rounded-full font-bold bg-oc-white-1 h-5 w-5 text-oc-green-1 flex items-end justify-center">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-3 justify-center pt-8">
                        <Link  href="/carrito-compras/mis-datos"
                            onClick={() => handleAddToCart(product)}
                            className="text-black font-medium text-lg text-center hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-8">
                            Compra
                        </Link>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="text-black text-lg font-medium hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-8">
                            <svg aria-hidden="true" role="status" className={`${loadingStates[product.id] ? '' : 'hidden'} inline w-4 h-4 me-3 text-oc-brown-1 animate-spin`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg> 
                            <span className={`${loadingStates[product.id] ? 'hidden' : ''}`}>Agregar al carrito</span>
                        </button>
                    </div>
                </div>
            </div>
            <ul className="grid grid-cols-3 gap-x-5 pt-11">
                {product.gallery.map((img, index) => {
                    const images = img.id
                    ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${img.route}${img.img}`
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