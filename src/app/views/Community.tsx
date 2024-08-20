'use client'
import React from 'react'
import { FaArrowRight, FaHandsBound } from 'react-icons/fa6'
import { GiClick } from 'react-icons/gi'
import { HiUsers } from 'react-icons/hi2'
import { IoCard } from 'react-icons/io5'
import { useRouter } from 'next/navigation'
function Community({single}: {single: boolean}) {
    const router = useRouter();
    return (
        <section className='community bg-[#F5F7FA]'>
            {
        single &&  <div className='pt-4 container m-auto'> <button className="flex  bg-[#4CAF4F] text-white px-6 py-3 ml-3 rounded-[3px]" onClick={()=> router.push('/')}>Back to Home Page <FaArrowRight className="my-auto ml-2"/></button></div>
        }
            <div className='container m-auto py-16 flex justify-between items-center'>
                <div className='text'>
                    <h2 className='sub-heading-style'>
                        Helping a local <br /><span className='text-[#4CAF4F]'>
                            business reinvent itself
                        </span>
                    </h2>
                    <p className='text-black font-normal mt-2'>
                        We reached here with our hard work and dedication
                    </p>
                </div>
                <div className='countings xl:basis-1/3 lg:basis-2/3'>
                    <div className='row-1 flex flex-wrap gap-20 gap-y-9'>
                        <div className='flex grow basis-0 items-center gap-4 '>
                            <div>
                                <HiUsers className='text-[#4CAF4F] text-5xl' />
                            </div>
                            <div>
                                <h2 className='sub-heading-style'>
                                    2,245,341
                                </h2>
                                <p className='para-style'>
                                    Members
                                </p>
                            </div>
                        </div>
                        <div className='flex grow basis-0 items-center gap-4'>
                            <div>
                                <FaHandsBound className='text-[#4CAF4F] text-5xl' />
                            </div>
                            <div>
                                <h2 className='sub-heading-style'>
                                    46,328
                                </h2>
                                <p className='para-style'>
                                    Clubs
                                </p>
                            </div>
                        </div>
                        <div className='flex grow basis-0 items-center gap-4'>
                            <div>
                                <GiClick className='text-[#4CAF4F] text-5xl' />
                            </div>
                            <div className=''>
                                <h2 className='sub-heading-style'>
                                    828,867
                                </h2>
                                <p className='para-style'>
                                    Event Bookings
                                </p>
                            </div>
                        </div>
                        <div className='flex grow basis-0 items-center gap-4'>
                            <div>
                                <IoCard className='text-[#4CAF4F] text-5xl' />
                            </div>
                            <div>
                                <h2 className='sub-heading-style'>
                                    1,926,436
                                </h2>
                                <p className='para-style'>
                                    Payments
                                </p>
                            </div>
                        </div>

                    
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Community
