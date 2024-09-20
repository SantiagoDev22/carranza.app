/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes l Original Carranza",
  description: "Aquí obtendrás todas las respuestas que necesitas para conocer acerca de nuestros productos para el cuidado del cabello, salud y belleza.",
};

export default function faqs() {   
    return (
        <div className="relative overflow-hidden">
            {/* Section Uno */}
            <section className="pt-28">
                <div className="container">
                    <div className="divide-y-2 divide-oc-brown-1">
                        <hgroup className="flex flex-col gap-y-14 pb-4">
                            <h1 className="md:text-5xl text-3xl font-bold uppercase text-oc-green-1">
                                Preguntas Frecuentes de <br className="xl:block hidden" />
                                Original Carranza
                            </h1>
                            <h2 className="md:text-4xl text-2xl uppercase font-semibold text-oc-green-1">
                                Resuelve todas tus dudas acerca de <br className="xl:block hidden" />
                                nuestro Détox Capilar y formas de compra
                            </h2>
                        </hgroup>
                        <p className="text-lg text-oc-green-1 pt-4 text-justify">
                            Si tienes alguna duda, solo debes ubicar cuál es en esta lita y resolver de forma sencilla. Aquí podrás encontrar información para saber cómo comprar a través de nuestra tienda en línea. Recuerda que si necesitas algo, nuestro equipo está listo para ayudarte, solo tienes que contactarnos vía WhatsApp y recibe atención inmediata.
                        </p>
                    </div>
                    <div className="flex md:flex-row flex-col gap-y-10 items-center justify-center gap-x-20 pt-12">
                        <figure>
                            <Image
                                src="/images/website/faq/products.webp"
                                alt="Productos"
                                width={550}
                                height={550}
                            />
                        </figure>
                        <div>
                            <a href="/lo-mas-vendido" className="text-black text-2xl hover:text-white hover:bg-oc-brown-1 transition bg-white border border-oc-brown-1 py-2 px-8">
                                Compra
                            </a>
                        </div>
                    </div>
                    <ul className="flex flex-col gap-y-5 pt-14 text-justify">
                        <li className="flex flex-col gao-y-2">
                            <p className="text-lg text-oc-green-1 font-bold">
                                ¿Cómo saber que el Détox Capilar es adecuado para mi tipo de cabello?
                            </p>
                            <p className="text-lg text-oc-green-1">
                                Nuestros productos integrar productos naturales y evitan todos esos químicos que vienen en las marcas comerciales. Así es como aseguramos que el Détox Capilar se lleva bien con todo tipo de cabello y piel.
                            </p>
                        </li>
                        <li className="flex flex-col gao-y-2">
                            <p className="text-lg text-oc-green-1 font-bold">
                                ¿Ofrecen productos para el crecimiento del cabello?
                            </p>
                            <p className="text-lg text-oc-green-1">
                                Sí, nuestro Détox Capilar es perfecto para evitar la caída de cabello y propiciar su crecimiento de forma saludable y 0% tóxica. Nuestros productos están formulados con ingredientes que nutren el cuero cabelludo y fortalecen los folículos pilosos para promover un crecimiento del cabello más fuerte y resistente.
                            </p>
                        </li>
                        <li className="flex flex-col gao-y-2">
                            <p className="text-lg text-oc-green-1 font-bold">
                                ¿Tienen productos específicos para problemas de caspa o cuero cabelludo sensible?
                            </p>
                            <p className="text-lg text-oc-green-1">
                                Sí, nuestro Détox Capilar cuenta es perfecto para tratar la caspa y cuidar el cuero cabelludo sensible. El Shampoo, Tónicos y Saw Palmetto están diseñados para aliviar la irritación, reducir la descamación y restaurar el equilibrio natural del cuero cabelludo.
                            </p>
                        </li>
                        <li className="flex flex-col gao-y-2">
                            <p className="text-lg text-oc-green-1 font-bold">
                                ¿Cómo puedo maximizar los resultados de los productos para el cabello?
                            </p>
                            <p className="text-lg text-oc-green-1">
                                Para maximizar los resultados, te recomendamos seguir las instrucciones de uso y masajear las zonas a trata por al menos 2 minutos en cada aplicación en el caso del Shampoo y Tónico. Esto incluye una dieta balanceada, evitar el calor excesivo y los tratamientos químicos dañinos, al igual que usar un champú y acondicionador comerciales que pueden dañar tu cabello.
                            </p>
                        </li>
                        <li className="flex flex-col gao-y-2">
                            <p className="text-lg text-oc-green-1 font-bold">
                                ¿Sus productos para el cabello son adecuados para hombres y mujeres?
                            </p>
                            <p className="text-lg text-oc-green-1">
                                Sí, nuestro Tratamiento Capilar es perfecto y efectivo para ambos, hombres y mujeres. La eficacia del Détox Capilar depende más del tipo de cabello y las necesidades específicas que del género.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Section Compra */}
            <section className="pt-28">
                <div className="container">
                    <div className="divide-y-2 divide-oc-brown-1">
                        <hgroup className="flex flex-col gap-y-14 pb-4">
                            <h2 className="md:text-5xl text-3xl font-bold uppercase text-oc-green-1">
                                cómo comprar
                            </h2>
                        </hgroup>
                        <ul className="flex flex-col gap-y-5 pt-10 text-justify">
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    ¿Qué métodos de pago aceptan?
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    Aceptamos una amplia variedad de métodos de pago para facilitar tu compra, incluyendo tarjetas de crédito y débito (Visa y Mastercard) y PayPal. Nuestra plataforma de pago en línea es segura y tus datos siempre se mantienen protegidos.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    ¿Ofrecen envíos internacionales?
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    Sí, realizamos envíos a México, Estados Unidos y Canadá. Los costos de envío internacional y los tiempos de entrega pueden variar según el destino.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    ¿Cuánto tiempo tarda el envío?
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    El tiempo de envío puede variar dependiendo de tu ubicación y el método de envío seleccionado. Para envíos en Estados Unidos, generalmente entregamos en un plazo de 3-7 días hábiles. Para envíos internacionales, el tiempo de entrega puede variar entre 7-21 días hábiles.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    ¿Qué pasa si tengo problemas con mi orden?
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    No se aceptan devoluciones en compras de minoristas, órdenes de compra incorrectas o productos dañados por el proveedor del servicio de paquetería, además, no se hacen devoluciones o reembolsos en productos abiertos de su empaquetado original, usados o en mal estado y error de manejo del cliente.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    ¿Realizan reembolsos?
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    Todas nuestras ventas son finales y por lo cual no aceptamos reembolsos. Sin embargo, puedes aplicar para nuestra garantía de devolución al 100% si el Détox Capilar no te dio resultados, consulta información correspondiente.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    ¿Es seguro comprar en su sitio web?
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    La seguridad de tus datos es nuestra máxima prioridad. Nuestro sitio web utiliza encriptación SSL para proteger tus datos personales y de pago. Puedes comprar con confianza, sabiendo que tu información está segura en todo momento.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    ¿Necesito una cuenta para realizar un pedido?
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    No es necesario crear una cuenta para realizar un pedido en nuestro sitio web.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section Aviso */}
            <section className="pt-28">
                <div className="container">
                    <div className="divide-y-2 divide-oc-brown-1">
                        <hgroup className="flex flex-col gap-y-14 pb-4">
                            <h2 className="md:text-5xl text-3xl font-bold uppercase text-oc-green-1">
                                Aviso de Privacidad
                            </h2>
                        </hgroup>
                        <ul className="flex flex-col gap-y-5 pt-10 text-justify">
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1">
                                    En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares  y su Reglamento, ORIGINAL CARRANZA SA de CV (en adelante, "Original Carranza") con domicilio en 624 N EXPRESSWAY 77 STE 10 BROWNSVILLE TX 78521, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.
                                </p>
                            </li>
                            <li className="flex flex-col gap-y-5">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Datos personales que recabamos
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    En Original Carranza recabamos los siguientes datos personales de nuestros clientes, proveedores y usuarios:
                                </p>
                                <ul className="list-disc list-inside text-oc-green-1 text-lg">
                                    <li>
                                        Nombre completo
                                    </li>
                                    <li>
                                        Dirección
                                    </li>
                                    <li>
                                        Correo electrónico
                                    </li>
                                    <li>
                                        Número de teléfono
                                    </li>
                                    <li>
                                        Número de identificación oficial
                                    </li>
                                    <li>
                                        Datos de pago (en caso de adquirir nuestros productos o servicios)
                                    </li>
                                </ul>
                                <p className="text-lg text-oc-green-1">
                                 Todos los datos personales que recabamos serán tratados de manera confidencial y solo serán utilizados para los fines descritos en el presente aviso de privacidad.
                                </p>
                            </li>
                            <li className="flex flex-col gap-y-5">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Finalidades del tratamiento de datos
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    En Original Carranza utilizamos sus datos personales para las siguientes finalidades:
                                </p>
                                <ul className="list-disc list-inside text-oc-green-1 text-lg">
                                    <li>
                                        Proveer nuestros productos y servicios
                                    </li>
                                    <li>
                                        Facturación y cobro
                                    </li>
                                    <li>
                                        Contactar a nuestros clientes y proveedores
                                    </li>
                                    <li>
                                        Envío de información promocional y publicidad de nuestros productos y servicios
                                    </li>
                                    <li>
                                        Realizar estudios internos sobre hábitos de consumo y preferencias de nuestros clientes
                                    </li>
                                </ul>
                            </li>
                            <li className="flex flex-col gap-y-5">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Finalidades del tratamiento de datos
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    En Original Carranza utilizamos sus datos personales para las siguientes finalidades:
                                </p>
                                <ul className="list-disc list-inside text-oc-green-1 text-lg">
                                    <li>
                                        Proveer nuestros productos y servicios
                                    </li>
                                    <li>
                                        Facturación y cobro
                                    </li>
                                    <li>
                                        Contactar a nuestros clientes y proveedores
                                    </li>
                                    <li>
                                        Envío de información promocional y publicidad de nuestros productos y servicios
                                    </li>
                                    <li>
                                        Realizar estudios internos sobre hábitos de consumo y preferencias de nuestros clientes
                                    </li>
                                </ul>
                            </li>
                            <li className="flex flex-col gap-y-5">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Transferencia de datos personales
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    En Original Carranza no transferimos sus datos personales a terceros, salvo que sea necesario para cumplir con las finalidades descritas en el presente aviso de privacidad o cuando exista una obligación legal para hacerlo.
                                </p>
                            </li>
                            <li className="flex flex-col gap-y-5">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Derechos ARCO
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    Usted tiene derecho a acceder a sus datos personales en nuestro poder. Así como a rectificarlos en caso de que sean inexactos o incompletos, cancelarlos cuando considere que no se requieren para alguna de las finalidades señaladas en el presente aviso de privacidad, oponerse al tratamiento de los mismos para fines específicos y a revocar el consentimiento que nos haya otorgado para el tratamiento de sus datos personales. Para hacer uso de estos derechos, deberá presentar una solicitud por escrito en nuestro domicilio señalado en el presente aviso de privacidad, o bien, enviando un correo electrónico a <a href="mailto:privacidad@originalcarranza.mx" className="decoration-oc-green-1 decoration-1 underline">privacidad@originalcarranza.mx</a> 
                                </p>
                            </li>
                            <li className="flex flex-col gap-y-5">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Cambios al aviso de privacidad
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    Original Carranza se reserva el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas o jurisprudenciales, políticas internas, nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios o productos y prácticas del mercado. Estas modificaciones estarán disponibles al público a través de nuestra página web viviangranados.com y en nuestras oficinas.
                                </p>
                                <p className="text-lg text-right text-oc-green-1 pt-6">
                                    Fecha de última actualización: 01 de julio del 2024.                                
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section Términos */}
            <section className="pt-28 pb-10 md:pb-32">
                <div className="container">
                    <div className="divide-y-2 divide-oc-brown-1">
                        <hgroup className="flex flex-col gap-y-14 pb-4">
                            <h2 className="md:text-5xl text-3xl font-bold uppercase text-oc-green-1">
                                Términos y Condiciones
                            </h2>
                        </hgroup>
                        <ul className="flex flex-col gap-y-5 pt-5 text-justify">
                            <li className="flex flex-col gap-y-5">
                                <p className="text-xl font-semibold uppercase text-oc-green-1">
                                    En Original Carranza Vivian estamos comprometidos en la creación y distribución de productos con máxima calidad y lograr la satisfacción de todos nuestros clientes. Para garantizar que reciba lo mejor de nuestros productos, la compañía cuenta con las siguientes políticas:
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    No se aceptan devoluciones en compras de minoristas, órdenes de compra incorrectas o productos dañados por el proveedor del servicio de paquetería, además, no se hacen devoluciones o reembolsos en productos abiertos de su empaquetado original, usados o en mal estado y error de manejo del cliente.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Reembolso
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    Todas nuestras ventas son finales y por lo cual no aceptamos reembolsos.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Costo de envío
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    Es responsabilidad del cliente pagar los costos de envío, así como devolver el producto en la misma forma que lo recibió, solo en caso de que la compañía haya cometido un error en la orden es en la única forma que se podrá hacer una excepción.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1">
                                    Solo se podrá hacer el reembolso en cuanto la compañía reciba el producto y esperar de 5 a 7 días hábiles para que se le reembolse su dinero.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Artículos en venta
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    Lamentablemente, no ofrecemos reembolso debido a que todas nuestras ventas son finales y el consumo de nuestros productos es responsabilidad de quien lo recomienda y de quien lo usa.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1">
                                    Si necesita más información acerca de nuestras políticas de reembolso, por favor comuníquese con nosotros a nuestro correo electrónico: <a className="font-bold decoration-oc-green-1 decoration-1 underline" href="mailto:hola@originalcarranza.mx">hola@originalcarranza.mx</a>
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Envíos
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    Tan pronto como nuestro equipo reciba su orden, normalmente requerimos de 3 a 5 días hábiles para procesarla. Este tiempo depende de la disponibilidad del producto en nuestra bodega. Además, ciertos métodos de pago pueden requerir más tiempo para verificar y procesar la información. En estos casos, no somos responsables de los retrasos que puedan surgir.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1">
                                    En ocasiones especiales, debido a condiciones ambientales o algún otro factor ajeno a nuestra compañía, los envíos pueden demorar, por lo cual no somos responsables y le mantenemos informado.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Atención A Clientes
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    Para temas relacionados con su orden, el sitio, disponibilidad o dudas sobre productos, envíenos un e-mail a <a href="mailto:hola@originalcarranza.mx">hola@originalcarranza.mx</a>, respondemos las 24 horas.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Datos De Envío
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    Original Carranza acepta órdenes para ser enviadas exclusivamente a domicilios de México.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Opciones De Envío
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    Las órdenes de Original Carranza se envían en días hábiles (lunes a viernes, sin incluir días festivos). Se seleccionará la paquetería correspondiente a su zona y recibirá un número de guía por correo electrónico para dar seguimiento al estatus de su pedido.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1">
                                    En caso de no localizar al destinatario, se realizarán hasta dos visitas adicionales al domicilio. Si aun así no se logra entregar el pedido, este será devuelto a nuestras instalaciones y se generará un segundo cargo de envío.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Cargos Por Envío
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    Los envíos a cualquier parte del país tienen un costo de $170 mxn y el tiempo de entrega es de 3 a 10 días hábiles, a partir de la confirmación de pago.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Restricciones De Envío
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    El envío de algunos productos a ciertos lugares puede no ser posible. Si esto afecta su pedido, lamentamos el inconveniente. En tal caso, se devolverá el total de su compra.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    Representación de colores en las imágenes
                                </p>
                                <p className="text-lg text-oc-green-1">
                                    En Original Carranza nos esforzamos por proporcionar imágenes precisas de los productos en nuestro sitio web. Sin embargo, es importante tener en cuenta que la representación de los colores de los productos puede variar según la configuración del monitor desde el cual se visualiza nuestra página web. Las diferencias en la calibración de los monitores pueden afectar la percepción de los colores de los productos en comparación con la realidad.
                                </p>
                            </li>
                            <li className="flex flex-col gao-y-2">
                                <p className="text-lg text-oc-green-1 font-bold">
                                    ¡Gracias por su confianza y comprensión!
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            
            {/* Divider */}
            <div className="py-2 bg-oc-green-1 relative z-20"></div>
    
            {/* Figure Left */}
            <figure className="absolute -left-[4.5rem] sm:left-0 -top-12">
                <Image
                    src="/images/website/components/figure-l.png"
                    alt="Figura"
                    width={100}
                    height={100}
                    className="w-full"
                />     
            </figure>
    
            {/* Figure Right */}
            <figure className="absolute -right-28 sm:-right-1 -top-2">
                <Image
                    src="/images/website/components/figure-r.png"
                    alt="Figura"
                    width={100}
                    height={100}
                    className="w-full"
                />     
            </figure>
        </div>
    );
}