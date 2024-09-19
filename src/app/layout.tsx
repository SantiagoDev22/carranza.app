import Image from 'next/image'
import { Montserrat } from "next/font/google";
import "../style/globals.css";
import Social from "../app/social";
import Newsletter from "../app/newsletter";
import Cart from "../app/cart";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es_MX">
      <body>
          <header className="sticky top-0 left-0 right-0 z-40 w-full shadow-md">
                <div className="bg-white shadow-md text-oc-green-1 md:gap-x-0 gap-x-5 transition ease-in delay-200 grid grid-cols-3 items-center justify-center px-5 lg:px-10 py-3">
                    <ul className="flex md:flex-row flex-col md:items-center gap-y-3 gap-x-4 lg:gap-x-10 justify-start">
                        <li className='lg:block hidden'>
                            <a href="#">
                                <Image
                                    src="/images/website/components/buscar.png"
                                    alt="Icono Buscar"
                                    width={32}
                                    height={31}
                                />
                            </a>
                        </li>
                        <li className='lg:block hidden'>
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
                        <li className='lg:hidden block'>
                            <a href="#" className="flex items-center gap-x-2">
                              <svg className='w-[30px] h-[19px]' viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.05 6.80018H2.88002C1.64002 6.80018 0.640015 5.80017 0.640015 4.56017V2.42017C0.640015 1.18017 1.64002 0.180176 2.88002 0.180176H47.04C48.28 0.180176 49.28 1.18017 49.28 2.42017V4.56017C49.29 5.80017 48.28 6.80018 47.05 6.80018Z" fill="#244B5A"/>
                                <path d="M47.05 22.8802H2.88002C1.64002 22.8802 0.640015 21.8803 0.640015 20.6403V18.5003C0.640015 17.2603 1.64002 16.2603 2.88002 16.2603H47.04C48.28 16.2603 49.28 17.2603 49.28 18.5003V20.6403C49.29 21.8803 48.28 22.8802 47.05 22.8802Z" fill="#244B5A"/>
                                <path d="M47.05 38.9701H2.88002C1.64002 38.9701 0.640015 37.9701 0.640015 36.7301V34.5901C0.640015 33.3501 1.64002 32.3501 2.88002 32.3501H47.04C48.28 32.3501 49.28 33.3501 49.28 34.5901V36.7301C49.29 37.9601 48.28 38.9701 47.05 38.9701Z" fill="#244B5A"/>
                              </svg>
                            </a>
                        </li>
                    </ul>
                    <a href="/" className="flex justify-center">
                        <Image
                            src="/images/website/components/logo.png"
                            alt="Logo"
                            width={129}
                            height={124}
                        />
                    </a>
                    <div className='flex gap-x-3 md:gap-x-6 justify-end'>
                      <Social />
                      <Cart />
                    </div>
                </div>
                <nav className='bg-white pt-1 pb-6 lg:block hidden'>
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
                </nav>
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
      </body>
    </html>
  );
}
