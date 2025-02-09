"use client"

import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="platter.jpg"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-200">Khyber Pakhtunkhwa:</h1>
      <p className="mb-8 leading-relaxed"><ul>
        <li>
       <h3 className='font-semibold'> Chapli Kebab:</h3> Imagine succulent minced meat kebabs, kissed by the charcoal grill, their flavors bursting forth.
       <h3 className='font-semibold'>Peshawari Naan: </h3> A thick, fluffy naan bread, a perfect companion to chapli kebabs.
       <h3 className='font-semibold'>Kabuli Pulao:</h3> Fragrant rice, cooked to perfection with meat, vegetables, and a blend of spices.
       <h3 className='font-semibold'>Seekh Kebabs:</h3>Skewered minced meat kebabs, seasoned with local spices and grilled over an open flame.
       <h3 className='font-semibold'>Dum Pukht:</h3> Meat (lamb or beef) slow-cooked with onions, tomatoes, and spices in its own juices.
       <h3 className='font-semibold'> Rosh:</h3> A clear meat broth with chunks of lamb or beef, often served with bread.
        
        </li></ul></p>
     
    </div>
  </div>
</section>
    </div>
  )
}

export default page
