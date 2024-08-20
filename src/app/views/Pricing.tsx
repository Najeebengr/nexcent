'use client'
import React, { use } from 'react'
import { useRouter } from 'next/navigation'
import { FaArrowRight } from 'react-icons/fa';
function Pricing({single}: {single: boolean}) {
    const router = useRouter();
  return (
    <section className="bg-[#F5F7FA] py-12">
          {
        single &&  <div className='pt-4 container m-auto'> <button className="flex  bg-[#4CAF4F] text-white px-6 py-3 ml-3 rounded-[3px]" onClick={()=> router.push('/')}>Back to Home Page <FaArrowRight className="my-auto ml-2"/></button></div>
        }
    <div className="max-w-7xl mx-auto text-center mb-12">
      <h2 className="sub-heading-style">
        Choose Your Plan
      </h2>
      <p className="para-style mt-4">
        Select the perfect plan for your needs. Always flexible to grow.
      </p>
    </div>
    
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Basic Plan */}
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic</h3>
        <p className="text-gray-600 mb-6">
          A starter package for individuals.
        </p>
        <div className="text-4xl font-bold text-gray-800 mb-4">
          $19 <span className="text-base font-normal">/month</span>
        </div>
        <ul className="text-gray-600 space-y-2 mb-6">
          <li>5 Projects</li>
          <li>10 GB Storage</li>
          <li>Basic Support</li>
        </ul>
        <button className="w-full bg-[#4CAF4F] text-white py-3 rounded-lg hover:bg-[#4CAF4F] transition duration-300">
          Choose Plan
        </button>
      </div>

      {/* Pro Plan */}
      <div className="bg-[#4CAF4F] text-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2">
        <h3 className="text-xl font-semibold mb-4">Pro</h3>
        <p className="text-blue-100 mb-6">
          Best for professionals and small teams.
        </p>
        <div className="text-4xl font-bold mb-4">
          $49 <span className="text-base font-normal">/month</span>
        </div>
        <ul className="space-y-2 mb-6">
          <li>Unlimited Projects</li>
          <li>100 GB Storage</li>
          <li>Priority Support</li>
        </ul>
        <button className="w-full bg-white text-[#4CAF4F] py-3 rounded-lg hover:bg-gray-100 transition duration-300">
          Choose Plan
        </button>
      </div>

      {/* Enterprise Plan */}
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Enterprise</h3>
        <p className="text-gray-600 mb-6">
          Ideal for large organizations and enterprises.
        </p>
        <div className="text-4xl font-bold text-gray-800 mb-4">
          $99 <span className="text-base font-normal">/month</span>
        </div>
        <ul className="text-gray-600 space-y-2 mb-6">
          <li>Unlimited Projects</li>
          <li>1 TB Storage</li>
          <li>Dedicated Support</li>
        </ul>
        <button className="w-full bg-[#4CAF4F] text-white py-3 rounded-lg hover:bg-[#4CAF4F] transition duration-300">
          Choose Plan
        </button>
      </div>
    </div>
  </section>
  )
}

export default Pricing
