import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      

<section className="text-white body-font bg-slate-950">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    {/* <img className="lg:w-[full] h-[full] md:w-[full] w-[full] mb-10 object-cover object-center "
    src="/pk-cusine-blog-cover.webp"
     alt="hero"/> */}
      <Image
            src='/pk-cusine-blog-cover.webp'
            alt="Hero Image"
            width={700}
            height={320}
            className="object-contain w-full h-auto"
          />
    <div className="text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium bg-gradient-to-tr from-teal-200 to-orange-300 bg-clip-text text-transparent">Pakistani Cuisine: A Tasty Guide to the Specialities of All Areas</h1>
      <p className="mb-8 leading-relaxed">Imagine a cuisine so diverse and flavorful that it can transport you to a different world with just a single bite. A cuisine that is both hearty and delicate, spicy and sweet, all at the same time. A cuisine that is steeped in history and culture.</p>
       
        <br/>
        <br/>
        <p className='font-semibold font-mono text-2xl  bg-gradient-to-bl from-teal-100 to-teal-800 bg-clip-text text-transparent'>That is Pakistani cuisine.</p>
        <br/>
        <br/>

<p>From the fiery dishes of the North to the sweet treats of the South, Pakistani food is sure to tantalize your taste buds. 
    Buckle up as we embark on a mouthwatering expedition through the diverse and flavorsome world of Pakistani cuisine. Pakistan, a land of enchanting history and culture, boasts a culinary heritage that’s as rich and varied as its people.</p>
      {/* <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>> */}
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
