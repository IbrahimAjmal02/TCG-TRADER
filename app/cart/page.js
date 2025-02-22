"use client"

import MainLayout from "../layouts/MainLayout"
import SimilarProducts from "../components/SimilarProducts"
import Product from "../components/Product"
import CartItem from "../components/CartItem.js"
import Link from "next/link"

export default function Cart() {
    const product = 
        {
          id: 1,
          title: "Pokemon Charizard - 4/102 - Holo Rare Collectible Card ",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
          url: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/02/charizard-1st-edition-from-pokemon-tcg.jpg?q=70&fit=crop&w=750&dpr=1",
          price: 36718
        }
      
    return (
        <>
            <MainLayout>
                <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
                    <div className="text-2xl font-bold my-4">Shopping Cart</div>
                    <div className="relative flex items-baseline justify-between gap-2">
                        <div className="w-[65%">
                            <CartItem key ={product.id} product={product} />
                        </div>

                        <div id="GoToCheckout" className="md:w-[33%] absolute top-0 right-0 m-2">
                            <div className="bg-white p-4 border">

                                <Link href="/checkout">
                                    <button className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4">
                                        Go to Checkout
                                    </button>
                                </Link>

                                <div className="flex items-center justify-between mt-4 text-sm mb-1">
                                    <div>Items (2)</div>
                                    <div>$610.84</div>
                                </div>

                                <div className="flex items-center justify-between mb-4 text-sm">
                                    <div>Shipping</div>
                                    <div>Free</div>
                                </div>

                                <div className="border-b border-gray-300"/>

                                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                                    <div>Subtotal</div>
                                    <div>$610.84</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <SimilarProducts />
            </MainLayout>
        </>
    )
}