import React from 'react'
import Disney from './../assets/images/disney.png'
import Marvel from './../assets/images/marvel.png'
import NatG from './../assets/images/nationalG.png'
import Pixar from './../assets/images/pixar.png'
import Starwars from './../assets/images/starwar.png'

import Disneyv from './../assets/videos/disney.mp4'
import Marvelv from './../assets/videos/marvel.mp4'
import natGv from './../assets/videos/national-geographic.mp4'
import Pixarv from './../assets/videos/pixar.mp4'
import Starwarsv from './../assets/videos/star-wars.mp4'







function ProductionHouse() {
    const Productionhouselist=[
        {
            id:1,
            image:Disney,
            video:Disneyv
        },
        {
            id:2,
            image:Pixar,
            video:Pixarv

        },
        {
            id:3,
            image:Marvel,
            video:Marvelv
        },
        {
            id:4,
            image:Starwars,
            video:Starwarsv

        },
        {
            id:5,
            image:NatG,
            video:natGv
        }
    ]
  return (
    <div className='flex ml-80 gap-5 '>{Productionhouselist.map((item)=>(
        <div className='border-[2px] border-gray-600
        rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800
        '>
        <img src={item.image} className='w-full z-[1]'/>
        <video src={item.video} autoPlay loop playsInline
            className='absolute top-0 rounded-md  z-0 opacity-0 hover:opacity-50'
        />
        </div>

    ))}
    </div>
  )
}

export default ProductionHouse