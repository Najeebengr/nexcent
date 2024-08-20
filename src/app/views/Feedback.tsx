'use client'
import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
function Feedback({single}: {single:boolean}) {
  const router = useRouter();
  return (
    <section className='bg-[#F5F7FA]'>
        {
        single &&  <div className='pt-4 container m-auto'> <button className="flex  bg-[#4CAF4F] text-white px-6 py-3 ml-3 rounded-[3px]" onClick={()=> router.push('/')}>Back to Home Page <FaArrowRight className="my-auto ml-2"/></button></div>
        }
           <div className='pixelgrade py-4 flex container m-auto justify-between items-start my-16'>
        <div>
        <Image src="/images/tesla.png" className='' alt="Company Logo" width={1100} height={0} priority />
        </div>
        <div className='grow-1 px-16'>
            <p className='para-style text-sm text-left mt-2'>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </p>
            <p className='text-[#4CAF4F] font-lg font-semibold mt-4'>
                Tim Smith
            </p>
            <p className=' text-[#717171] mt-1 font-light text-sm '>
            British Dragon Boat Racing Association
            </p>
            <div className="flex gap-10">
        <div className='logos flex justify-start gap-8 mt-8'>
        <Image src="/images/client1.png" className='' alt="Company Logo" width={50} height={0} priority />
        <Image src="/images/client2.png" className='' alt="Company Logo" width={50} height={0} priority />
        <Image src="/images/client3.png" className='' alt="Company Logo" width={50} height={0} priority />
        <Image src="/images/client4.png" className='' alt="Company Logo" width={50} height={0} priority />
        <Image src="/images/client5.png" className='' alt="Company Logo" width={50} height={0} priority />
        <Image src="/images/client6.png" className='' alt="Company Logo" width={50} height={0} priority />
        <Image src="/images/client3.png" className='' alt="Company Logo" width={50} height={0} priority />
        </div>
        <button className='flex justify-center items-center gap-1 mt-8 text-[#4CAF4F] font-semibold'>
            Meet All Customers
            <FaArrowRight className="my-auto ml-2"/>
        </button>
            </div>
      
    
        </div>
      </div>
   
    </section>
  )
}

export default Feedback
