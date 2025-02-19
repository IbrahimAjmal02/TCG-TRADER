"use client";

import { BiLoader } from "react-icons/bi"
import ProductComp from "./Product"


export default function SimilarProducts() {
    const products = [
        {
          id: 1,
          title: "Pokemon Charizard - 4/102 - Holo Rare Collectible Card ",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
          url: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/02/charizard-1st-edition-from-pokemon-tcg.jpg?q=70&fit=crop&w=750&dpr=1",
          price: 36718
        },
        {
          id: 2,
          title: "Doflamingo",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBhX3Dd7EtUIgnHB87adflUBZsmyKvZ9AZf8-z9pxrpxGm3d_8nYIHs0ADnoN3xkhIJE&usqp=CAU",
          price: 24287
        }
      ]
    return (
        <>
            <div>
                <div className="border-b py-1 max-w-[1200px] mx-auto" />

                <div className="max-w-[1200px] mx-auto">
                    <div className="font-bold text-2xl py-2 mt-4">Similar Sponsored Items</div>

                    {products.length > 0 ?
                        <div className="grid grid-cols-5 gap-4">
                            {products.map(product => {
                                <ProductComp key={product.id} product={product}/>
                            })}
                        </div>

                        : <div className="flex items-center justify-center">
                            <div className="flex items-center justify-center gap-4 font-semibold">
                                <BiLoader size={30} className="text-blue-400 animate-spin" />
                                Loading Products...
                            </div>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}