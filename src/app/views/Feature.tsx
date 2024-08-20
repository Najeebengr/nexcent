'use client'
import React from 'react'
import Image from 'next/image'
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsBuildingsFill } from 'react-icons/bs';
import { FaArrowRight, FaHandsBound } from 'react-icons/fa6';
import Pixelgrade from './Pixelgrade';
import { useRouter } from 'next/navigation';
function Feature({single}: {single: boolean}) {
  const router = useRouter();
  return (
    <section className='feature mt-8'>
         {
        single &&  <div className='pt-4 container m-auto'> <button className="flex  bg-[#4CAF4F] text-white px-6 py-3 ml-3 rounded-[3px]" onClick={()=> router.push('/')}>Back to Home Page <FaArrowRight className="my-auto ml-2"/></button></div>
        }
      <div className='clients container m-auto'>
        <h2 className='sub-heading-style text-center '>
            Our Clients
        </h2>
        <p className='para-style text-center mt-2'>
        We have been working with some Fortune 500+ clients
        </p>
        <div className='logos flex justify-between'>
        <Image src="/images/client1.png" className='mt-8' alt="Company Logo" width={50} height={0} priority />
        <Image src="/images/client2.png" className='mt-8' alt="Company Logo" width={50} height={0} priority />
        <Image src="/images/client3.png" className='mt-8' alt="Company Logo" width={50} height={0} priority />
        <Image src="/images/client4.png" className='mt-8' alt="Company Logo" width={50} height={0} priority />
        <Image src="/images/client5.png" className='mt-8' alt="Company Logo" width={50} height={0} priority />
        <Image src="/images/client6.png" className='mt-8' alt="Company Logo" width={50} height={0} priority />
        <Image src="/images/client3.png" className='mt-8' alt="Company Logo" width={50} height={0} priority />
        </div>
      </div>
      <div className='feature-section mt-16 '>
        <h2 className='sub-heading-style text-center '>
        Manage your entire community<br/> in a single system    
        </h2>
        <p className='para-style mt-3 text-center'>
        Who is Nextcent suitable for?
        </p>
        <div className="cards flex container m-auto my-8 justify-between">
            <div className="card-1 basis-80 shadow-md p-6 rounded-md">
                <div className="icon relative flex justify-center">
                <HiMiniUserGroup className='text-5xl text-center z-10 text-[#4CAF4F]' />
                <Image src="/images/shape.png" className='-z-10 absolute top-[5px] left-[47%]' alt="Company Logo" width={50} height={0} priority />
              </div>
                <h2 className='text-[#4D4D4D] text-2xl text-center font-bold leading-8 mt-4'>
                Membership<br/> Organisations
                </h2>
                <p className='para-style text-sm text-center mt-4'>
                Our membership management software provides full automation of membership renewals and payments
                </p>
            </div>
            <div className="card-2 basis-80 shadow-md p-6 rounded-md">
            <div className="icon relative flex justify-center">
                <BsBuildingsFill className='text-5xl z-10 text-[#4CAF4F]' />
                <Image src="/images/shape.png" className='-z-10 absolute top-[5px] left-[47%]' alt="Company Logo" width={50} height={0} priority />
              </div>
                <h2 className='text-[#4D4D4D] text-2xl text-center font-bold leading-8 mt-4'>
                National<br/> Associations
                </h2>
                <p className='para-style text-sm text-center mt-4'>
                Our membership management software provides full automation of membership renewals and payments
                </p>
        
            </div>
            <div className="card-3 basis-80 shadow-md p-6 rounded-md">
            <div className="icon relative flex justify-center">
                <FaHandsBound  className='text-5xl z-10 text-[#4CAF4F]' />
                <Image src="/images/shape.png" className='-z-10 absolute top-[5px] left-[47%]' alt="Company Logo" width={50} height={0} priority />
                </div>
                <h2 className='text-[#4D4D4D] text-2xl text-center font-bold leading-8 mt-4'>
                Clubs And <br/> Groups
                </h2>
                <p className='para-style text-sm text-center mt-4'>
                Our membership management software provides full automation of membership renewals and payments
                </p>
        
            </div>
        </div>
      </div>
      <Pixelgrade />
    </section>
  )
}

export default Feature
