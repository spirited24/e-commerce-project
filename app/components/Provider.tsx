"use client";


import { CartProvider as USCProvider } from "use-shopping-cart";
import { ReactNode } from "react";

export default function CartProvider({children}: {children: ReactNode}){
    return (
        <USCProvider 
        mode="payment"
        cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
        currency="usd"
        billingAddressCollection={false}
        successUrl="https://localhost:3000/stripe/success"
        cancelUrl="https://localhost:3000/stripe/error"
        shouldPersist={true}
        language="en-US"
        >
            {children}
        </USCProvider>
    )
}
