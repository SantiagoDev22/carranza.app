import type { Metadata } from "next";
import Image from "next/image";
import Social from '../../social';

export const metadata: Metadata = {
  title: "Gracias l Original Carranza",
  description: "Gracias l Original Carranza",
};

export default function work() {   
    return (
        <div className="py-12 sm:py-20">
            <div className="container">
                <div className="flex flex-col gap-y-3">
                    <a href="/" className="flex justify-center">
                        <Image
                            src="/images/website/components/logo.png"
                            alt="Logo"
                            width={150}
                            height={150}
                        />
                    </a>
                    <div className="flex flex-col gap-y-4">
                        <p className="text-center text-oc-brown-1 text-4xl font-bold">
                            ¡Gracias!
                        </p>
                        <p className="text-center text-lg text-oc-green-1">
                            Todo está listo. En breve nos pondremos en contacto contigo.
                        </p>
                    </div>
                    <div className="flex justify-center pt-9">
                        <a href="/" className="hover:text-black text-lg text-white bg-oc-brown-1 transition hover:bg-white border border-oc-brown-1 py-2 px-4">
                            Ir al inicio
                        </a>
                    </div>
                    <div className="flex flex-col gap-y-6 pt-6">
                        <p className="text-center text-lg text-oc-green-1">
                            Síguenos
                        </p>
                        <div className="flex justify-center">
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}