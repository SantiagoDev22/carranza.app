"use client";

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import { getProducts } from "../app/services/products";
import { Productos } from "@/app/services/types/Productos";
import { useShoppingCart } from "@/app/services/shoppingCart";

const ProductsList = () => {
  const [products, setProducts] = useState<Productos[]>([]);
  const [quantities, setQuantities] = useState<{ [productId: string]: number }>(
    {}
  );

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

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(newQuantity, 1),
    }));
  };

  const { addToCart } = useShoppingCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="pt-20 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-8">
      {/* item for foreach */}
      {products.map((product) => {
        const imageUrl =
          product.gallery.length > 0
            ? `${process.env.NEXT_PUBLIC_STORAGE_URL}${product.gallery[0].route}${product.gallery[0].img}`
            : "/images/website/tienda/shampoo.png";
        return (
          <div
            key={product.id}
            className="shadow-2xl px-2 py-4 bg-white flex flex-col gap-y-2"
          >
            <Link
              href={`/lo-mas-vendido/${product.slug}`}
              className="hover:brightness-90 transition flex justify-center"
            >
              <Image
                src={imageUrl}
                alt={product.title}
                width={150}
                height={150}
                unoptimized
              />
            </Link>
            <div className="flex flex-col">
              <Link href={`/lo-mas-vendido/${product.slug}`}>
                <p className="text-oc-green-1 text-lg font-semibold">
                  {product.title}
                </p>
              </Link>
              <p className="text-oc-brown-1 text-2xl font-bold ">
                ${product.price}
              </p>
            </div>
            <div className="flex gap-x-2 pt-2">
              <ul className="border border-oc-green-2 rounded-3xl flex">
                <li className="border-r border-oc-green-2">
                  <button
                    onClick={() => handleDecreaseQuantity(product.id)}
                    className="text-oc-green-1 font-medium text-lg px-4 py-1"
                  >
                    -
                  </button>
                </li>
                <li className="px-4 py-1">
                  <span className="text-oc-green-1 font-semibold text-lg">
                    {quantities[product.id] || 1}
                  </span>
                </li>
                <li className="border-l border-oc-green-2">
                  <button
                    onClick={() => handleIncreaseQuantity(product.id)}
                    className="text-oc-green-1 font-medium text-lg px-4 py-1"
                  >
                    +
                  </button>
                </li>
              </ul>
              <button
                onClick={() =>
                  addToCart({
                    ...product,
                    quantity: quantities[product.id] || 1,
                  })
                }
                className="text-black text-base rounded-3xl hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-4"
              >
                Agregar
              </button>
            </div>
          </div>
        );
      })}
      {/* end item */}
    </div>
  );
};

export default ProductsList;
