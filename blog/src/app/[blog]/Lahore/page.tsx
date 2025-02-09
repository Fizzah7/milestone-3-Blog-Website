"use client"

import React from 'react';

const page = () => {
    return (
      <div>
        <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="platter.jpg"/>
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-500">Lahore:</h1>
        <p className="mb-8 leading-relaxed"><ul>
          <li>
         <h3 className='font-semibold text-yellow-500 text-2xl'> Lahori Fried Fish:</h3>River fish marinated in spices, coated in gram flour, and deep-fried to perfection.
         <h3 className='font-semibold text-yellow-500 text-2xl'> Murgh Channay: </h3>  Chicken cooked with chickpeas in a spicy curry, served with tandoori naan.
         <h3 className='font-semibold text-yellow-500 text-2xl'> Chargha:</h3>Whole chicken marinated with spices and deep-fried or steamed, served with naan and chutney.
         <h3 className='font-semibold text-yellow-500 text-2xl'>Tawa Pulao:</h3>  Spicy fried rice cooked on a large tawa (griddle) with vegetables and meat.
         <h3 className='font-semibold text-yellow-500 text-2xl'>Firni:</h3>A rice flour pudding served in clay pots.
         <h3 className='font-semibold text-yellow-500 text-2xl'> Rabri Falooda:</h3> A sweet dessert with vermicelli, milk, and ice cream, topped with nuts.
          </li></ul></p>
       
      </div>
    </div>
  </section>
      </div>
    )
  }
  
  export default page