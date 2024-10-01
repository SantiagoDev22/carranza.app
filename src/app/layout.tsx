"use client";

import Image from 'next/image'
import { Montserrat } from "next/font/google";
import "../style/globals.css";
import Social from "../app/social";
import Newsletter from "../app/newsletter";
import Cart from "../app/cart";
import { ShoppingCartProvider } from './services/shoppingCart';
import { Button, Navbar } from "flowbite-react";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es_MX">
      <body>
        <ShoppingCartProvider>
          <header className="sticky top-0 left-0 right-0 z-40 w-full shadow-md">
                <Navbar fluid rounded className='bg-white shadow-md text-oc-green-1 transition ease-in delay-200 px-5 lg:px-10 py-3'>
                    <div className="flex">
                      <Navbar.Toggle />
                      <ul className="flex md:flex-row flex-col md:items-center gap-y-3 gap-x-4 lg:gap-x-10 justify-start">
                          <li className='md:block hidden'>
                              <a href="#">
                                  <Image
                                      src="/images/website/components/buscar.png"
                                      alt="Icono Buscar"
                                      width={32}
                                      height={31}
                                  />
                              </a>
                          </li>
                          <li className='md:block hidden'>
                              <a href="#" className="flex items-center gap-x-2">
                                  <Image
                                      src="/images/website/components/clientes.png"
                                      alt="Icono Cliente"
                                      width={23}
                                      height={31}
                                  />
                                  <p className="font-semibold text-xs lg:text-lg">
                                      Servicio al Cliente
                                  </p>
                              </a>
                          </li>
                      </ul>
                    </div>
                    <Navbar.Brand href="/" className="flex justify-center">
                        <Image
                            src="/images/website/components/logo.png"
                            alt="Logo"
                            width={129}
                            height={124}
                        />                    
                    </Navbar.Brand>
                    <div className='flex gap-x-3 md:gap-x-6 justify-end'>
                        <div className="hidden sm:block">
                            <Social />
                        </div>
                        <Cart />
                    </div>
                    <Navbar.Collapse className='col-span-12 m-auto py-3 md:h-full h-screen'>
                      <ul className='flex md:flex-row flex-col md:font-normal font-semibold gap-y-5 items-center md:divide-x divide-oc-green-1 justify-center text-oc-green-1 md:text-base text-lg xl:text-lg'>
                        <li className='px-10 lg:px-20 md:hidden block'>
                          <a href="/" className='hover:font-medium'>Inicio</a>
                        </li>
                        <li className='px-10 lg:px-20'>
                          <a href="/tratamiento-natural" className='hover:font-medium'>Nosotros</a>
                        </li>
                        <li className='px-10 lg:px-20'>
                          <a href="/productos-naturales" className='hover:font-medium'>Cómo Funciona</a>
                        </li>
                        <li className='px-10 lg:px-20'>
                          <a href="/blog" className='hover:font-medium'>Blog</a>
                        </li>
                        <li className='px-10 lg:px-20'>
                          <a href="/lo-mas-vendido" className='hover:font-medium'>Comprar</a>
                        </li>
                        <li className='md:hidden block'>
                          <div>
                              <a href="#" className="flex items-center gap-x-2">
                                  <p className="font-semibold md:text-xs lg:text-lg">
                                      Servicio al Cliente
                                  </p>
                              </a>
                          </div>
                        </li>
                        <li className='md:hidden flex items-center gap-x-3'>
                            <Social />
                            <a href="#">
                                <Image
                                    src="/images/website/components/buscar.png"
                                    alt="Icono Buscar"
                                    width={29}
                                    height={29}
                                />
                            </a>
                        </li>
                      </ul>
                    </Navbar.Collapse>
                </Navbar>
                {/* <nav className='bg-white pt-1 pb-6 lg:block hidden'>
                  <ul className='flex items-center divide-x divide-oc-green-1 justify-center text-oc-green-1 text-lg'>
                    <li className='px-10 lg:px-20'>
                      <a href="/tratamiento-natural" className='hover:font-medium'>Nosotros</a>
                    </li>
                    <li className='px-10 lg:px-20'>
                      <a href="/productos-naturales" className='hover:font-medium'>Cómo Funciona</a>
                    </li>
                    <li className='px-10 lg:px-20'>
                      <a href="/blog" className='hover:font-medium'>Blog</a>
                    </li>
                    <li className='px-10 lg:px-20'>
                      <a href="/lo-mas-vendido" className='hover:font-medium'>Comprar</a>
                    </li>
                  </ul>
                </nav> */}
          </header>
          
            <main className={inter.className}>{children}</main>
          

          <footer className='bg-white pt-10 sm:pt-16 pb-7 lg:px-10 px-5 relative z-20'>
              <div className='flex sm:flex-row flex-col gap-y-7 justify-center sm:justify-between sm:items-stretch items-center'>
                <ul className='flex flex-col sm:text-left text-center gap-y-4 text-oc-green-1 md:text-base text-sm'>
                  <li>
                    <a href="#" className='font-medium md:text-lg'>
                      Servicio al Cliente
                    </a>
                  </li>
                  <li>
                    <a href="/tratamiento-natural">
                      Nosotros
                    </a>
                  </li>
                  <li>
                    <a href="/productos-naturales">
                      Cómo Funciona
                    </a>
                  </li>
                  <li>
                    <a href="/blog">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/lo-mas-vendido">
                      Comprar
                    </a>
                  </li>
                  <li>
                    <a href="/preguntas-frecuentes">
                      FAQ
                    </a>
                  </li>
                </ul>
                <div className='sm:max-w-[20rem] md:max-w-[26rem] flex flex-col-reverse sm:flex-col gap-y-7 sm:gap-y-10'>
                  <div className='flex flex-col gap-y-3'>
                    <p className='text-oc-green-1 sm:text-xl md:text-2xl font-medium'>
                      Lo último de Original Carranza
                    </p>
                    <p className='sm:text-balance text-sm md:text-lg text-oc-green-1'>
                      Sé la primer persona en descubrir las novedades que Original Carranza tiene preparadas:
                    </p>
                    <Newsletter />
                  </div>
                  <div className='flex justify-center sm:justify-start'>
                      <Social />
                  </div>
                </div>
              </div>
          </footer>

          {/* btn float whatsapp */}
          <div className="fixed mb-10 sm:mb-0 sm:mt-52 mr-2 sm:mr-[50px] bottom-0 sm:top-0 right-0 z-40">
              <figure className="animate-pulse">
                  <a href="#" target="_blank" rel="nofollow">
                    <Image
                        src="/images/website/components/ws.png"
                        alt="Logo WhatsApp"
                        width={100}
                        height={100}
                    />
                  </a>
              </figure>
          </div>
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
