import Image from "next/image";

import React from 'react'
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./About/page";
export async function generateStaticParams() {
  return [
    { slug: 'Karachi' },
    { slug: 'Lahore' },
    { slug: 'Islamabad' },
    { slug: 'Punjab' },
    { slug: 'Sindh' },
    { slug: 'Khyber Pakhtunkhwa' },
    { slug: 'Balochistan' },
  ];
}
import Link from "next/link";





const page = () => {
  return (
    <div>
      
      <Hero/>
      <About/>
    </div>
  )
}

export default page
