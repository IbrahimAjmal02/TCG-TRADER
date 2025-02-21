"use client"

import MainLayout from "../layouts/MainLayout"
import CheckoutItem from "../components/CheckoutItem"

export default function Checkout() {
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
                <div id="CheckoutPage" className="mt-4 max-w-[1100px] mx-auto">
                    <div className="text-2xl font-bold mt-4 mb-4">Checkout</div>

                    <div className="relative flex items-baseline gap-4 justify-between mx-auto w-full">
                        <div className="w-65%">
                            <div className="bg-white rounded-lg p-4 border">

                                <div className="text-xl font-semibold mb-2">Shipping Address</div>
                                <div>
                                    <ul className="text-sm mt-2">
                                            <li>Name: Ibidude175</li>
                                            <li>Address: Woodzblock</li>
                                            <li>Zip: WBL0CK</li>
                                            <li>City: Sauga</li>
                                            <li>Country: Canada</li>
                                    </ul>
                                </div>
                            </div>

                            <div id="Items" className="bg-white rounded-lg mt-4">
                                <CheckoutItem key ={product.id} product={product} />
                            </div>
                        </div>

                        <div id="PlaceOrder" className="relative -top-[6px] w-[35%] border rounded-lg">
                            <div className="p-4">
                                <div className="flex items-baseline justify-between text-sm mb-1">
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
                            
                                <form>
                                    <div className="border border-gray-500 p-2 rounded-sm"
                                        id="card-element"
                                    />
                                    <p
                                        id="card-error"
                                        role="alert"
                                        className="text-red-700 text-center font-semibold relative top-2"
                                    />

                                    <button type="submit" className="mt-4 bg-blue-600 text-lg w-full text-white font-semibold p-3 rounded-full ">
                                        Confirm and Pay
                                    </button>
                                </form>
                            </div>
                            <div className="flex items-center p-4 justify-center gap-2 border-t ">
                                <img width={40} src="/images/Panther_Trader.jpg"/>
                                <div className="font-light mb-2 mt-2">THANK YOU FOR YOUR VISIT!</div>
                            </div>                            
                        </div>                       
                    </div>
                </div>
            </MainLayout>
        </>
    )
}