import { log } from "console";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51PjPBfIxTeKGtyUE4RgvXXIPkQ6MKpNtWJaZckOyzNztOEfAL8DXrr65DDM3k8h5Jp5naScsDYC6FLM3olULNA3K00PVFamQN4');

export async function POST(request) {
    
    const body = await request.json();
    // console.log(body);
    
    const orderData = JSON.parse(body.orderData);
    const customerData = JSON.parse(body.customerData);
    const cartItems = JSON.parse(body.cartItems);
    const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL;
    const baseUrl = process.env.NEXT_PUBLIC_URL;

    const session = await stripe.checkout.sessions.create({
        success_url: `${baseUrl}/carrito-compras/gracias`,
        line_items: cartItems.map(item => {
            // Crear las URLs de las imágenes
            const images = item.gallery.map(image => `${storageUrl}/${image.route}/${image.img}`);

            return {
                price_data: {
                    currency: 'mxn',
                    product_data: {
                        name: item.name,  // El nombre del producto
                        images: images,   // Las URLs de las imágenes construidas
                        description: item.description,  // Descripción del producto
                        
                    },
                    unit_amount: parseFloat(item.price) * 100,  // Convertir el precio a centavos
                },
                quantity: item.quantity, // Cantidad del producto
            };
        }),
        customer_email: customerData.email,
        phone_number_collection: { enabled: true},
        locale: 'es',
        allow_promotion_codes: true,
        shipping_address_collection: {
            allowed_countries: ['MX']
        },        
        shipping_options: [
            {
                // shipping_amount: parseFloat(orderData.price) * 100,
                shipping_rate_data: {
                    display_name: 'Paquetería',
                    type: 'fixed_amount',
                    fixed_amount: {
                        amount: (parseFloat(orderData.shipping.price) * 100),
                        currency: 'mxn',
                    },
                    delivery_estimate: {
                        maximum: {
                            unit: 'day',
                            value: '3',
                        },
                    }
                }
            }
        ],
        mode: 'payment',
    });

    // console.log(session);
    
    return NextResponse.json(session)

}
