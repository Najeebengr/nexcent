import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
function Banner() {
  return (
    <section className='bg-[#F5F7FA] py-20 '>
        <div className='banner-inner flex container m-auto justify-between items-center'>
            <div className='banner-text font-semibold'>
                <h1 className='text-6xl heading-color leading-[4.2rem]'>
                    Lessons and insights<br/><span className='text-[#4CAF4F]'>from 8 years</span>
                </h1>
                <p className='para-style mt-4 '>
                Where to grow your business as a photographer: site or social media?
                </p>
                <button className="flex bg-[#4CAF4F] text-white px-6 py-3 mt-7 rounded-[3px]">Register</button>
            </div>
            <div className='banner-img'>
            <Image src="/images/banner.png" className='mt-8' alt="Company Logo" width={450} height={0} priority />
            </div>
        </div>
    </section>
  )
}

export default Banner
