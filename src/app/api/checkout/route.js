import { log } from "console";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe
('sk_test_51PjPBfIxTeKGtyUE4RgvXXIPkQ6MKpNtWJaZckOyzNztOEfAL8DXrr65DDM3k8h5Jp5naScsDYC6FLM3olULNA3K00PVFamQN4');

export async function POST(request) {
    
    const body = await request.json();
    console.log(body);
    
    const orderData = JSON.parse(body.orderData);
    const customerData = JSON.parse(body.customerData);
    const cartItems = JSON.parse(body.cartItems);
    const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL;

    console.log(cartItems[0].gallery.map(item => `${storageUrl}${item.route}${item.img}`));
    
    const session = await stripe.checkout.sessions.create({
        success_url: 'http://localhost:3000/carrito-compras/gracias',
        line_items: [
            {
                price_data: {
                    currency: 'mxn',
                    product_data: {
                        name: cartItems[0].name,  // Ejemplo: Desodorante Orgánico Artesanal
                        images: cartItems[0].gallery.map(item => `${storageUrl}${item.route}${item.img}`),  // Aquí obtenemos la URL completa
                    },
                    unit_amount: parseFloat(cartItems[0].price) * 100,  // Asegúrate de convertir el precio a centavos
                },
                quantity: cartItems[0].quantity, // Ejemplo: 1
            },
        ],
        customer_email: customerData.email,
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
        // shipping_details: {
        //     address: {
        //         city: customerData.municipality,
        //         country: 'MX',
        //         line1: customerData.street + " " + customerData.number + " " + customerData.zip,
        //         line2: '',
        //         postal_code: customerData.zip,
        //         state: customerData.state,
        //     },
        //     name: customerData.customer
        // },
        mode: 'payment',
    });

    console.log(session);
    
    return NextResponse.json(session)

}
