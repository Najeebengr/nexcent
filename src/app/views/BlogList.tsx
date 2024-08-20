'use client'
import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { blogs } from '@/constants'
import Link from 'next/link'
function BlogList({ single }: { single: boolean }) {
    const router = useRouter();
    return (
        <section className='container m-auto  pb-16'>
            {
                single && <div className='pt-4 container m-auto'><button className="flex bg-[#4CAF4F] text-white px-6 py-3 ml-3 rounded-[3px]" onClick={() => router.push('/')}>Back to Home Page <FaArrowRight className="my-auto ml-2" /></button></div>
            }
            <h2 className='sub-heading-style text-center'>
                Caring is the new marketing
            </h2>
            <p className='para-style mt-3 text-center px-[30%]'>
                {` The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more. `}
            </p>
            <div className="blog-cards mt-10 mb-20 flex justify-between">
                {blogs.map((item, index) => (
                    <Link key={item.id} href={`/blog/${item.id}`}>
                    <div className='blog-card relative'>
                        <div className=''>
                            <Image src={`${item.imgURL}`} className='m-auto -z-10' alt="Company Logo" width={400} height={0} priority />
                        </div>
                        <div className='text absolute shadow-md m-auto left-[15%] rounded-md  w-[70%] bottom-[-20%] z-10 text-[#717171] font-bold text-center bg-[#F5F7FA] p-6'>
                            <p>
                                {item.title}
                            </p>
                            <button className='flex m-auto justify-center items-center gap-1 mt-4 text-[#4CAF4F] font-semibold'>
                                Read More
                                <FaArrowRight className="my-auto ml-2" />
                            </button>

                        </div>
                    </div>
                    </Link>
                ))}

         

            </div>
        </section>
    )
}

export default BlogList
