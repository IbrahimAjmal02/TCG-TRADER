"use client";

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function CarouselComp() {
    return (
        <>
        <div className='max-w-[950px] mx-auto'>
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false}>
                <div>
                    <img src='/images/banner/OPTCG_Pic.jpg'/>
                </div>
                <div>
                    <img src='/images/banner/PokemonTCG.jpg'/>
                </div>
                <div>
                    <img src='/images/banner/YugiohTCG.jpg'/>
                </div>
            </Carousel>
        </div>
        </>
    )
}