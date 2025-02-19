"use client";

import Product from './components/Product'
import CarouselComp from './components/CarouselComp'
import MainLayout from './layouts/MainLayout'

export default function Home() {
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
    <MainLayout>
      <CarouselComp />
      <div className='max-w-[1200px] mx-auto'>
          <div className='text-2xl font-bold mt-4 mb-6 px-4'>
            Products
          </div>
          <div className="grid grid-cols-5 gap-4">
            {products.map(product => (
              <Product key={product.id} product={product}/>
             ))}

          </div>
      </div>
    </MainLayout>
  )
}
