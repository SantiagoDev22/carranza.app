"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Modal } from "flowbite-react";
import { Suspense, useState } from "react";
import { useShoppingCart } from "./services/shoppingCart";

const Order = dynamic(() => import("@/app/order"), {
  suspense: true,
});

export default function Cart() {

  // cerrar modal, actualizar sessionStorage
  const handleCheckout = () => {
    
    setOpenModal(false);
  }

  const { cartItems } = useShoppingCart();

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const [openModal, setOpenModal] = useState(false);
  const [modalPlacement] = useState("center-right");

  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        <svg
          className="w-7 lg:w-10 h-auto fill-oc-green-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
      </button>
      <Modal
        show={openModal}
        position={modalPlacement}
        onClose={() => setOpenModal(false)}
        className="sidebar"
      >
        <div className="bg-white h-screen p-0">
          <Modal.Header className="border-b-0"></Modal.Header>
          <Modal.Body className="bg-white overflow-hidden flex flex-col justify-between h-[91%]">
            <div className="flex flex-col gap-y-3">
              <p className="text-oc-green-1 font-bold text-lg">
                Carrito de compras
              </p>
              <Suspense fallback={<div>loading...</div>}>
                <Order />
              </Suspense>
            </div>
            <div className="border-t flex flex-col gap-y-5">
              <div className="bg-orange-100 rounded-md py-2 flex justify-between px-6 mt-4">
                <p className="text-oc-green-1 font-medium">Subtotal:</p>
                <p className="text-oc-green-1 text-lg font-semibold">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
              <Link
                href="/carrito-compras/mis-datos"
                onClick={handleCheckout}
                className="hover:text-black text-lg text-center text-white bg-oc-brown-1 transition font-semibold hover:bg-white border border-oc-brown-1 py-2 px-4"
              >
                Ir a pagar
              </Link>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}
