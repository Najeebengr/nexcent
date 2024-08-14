import React from 'react'
import Image from 'next/image'
import { FaArrowRight, FaDribbble, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
function Footer() {
  return (
    <div>
         <footer className="">
          <div className=" py-9 bg-[#F5F7FA] before-footer h-full flex flex-col justify-center items-center">
          <h3 className="text-5xl text-center leading-[3.5rem] font-bold text-[#263238] ">
          Pellentesque suscipit<br/> fringilla libero eu.
          </h3>
          <button className="mt-9 flex bg-[#4CAF4F] text-white px-6 py-3 ml-3 rounded-[3px]">Get a Demo <FaArrowRight className="my-auto ml-2"/></button>
          </div>
          <div className="main-footer bg-[#263238] py-16">
            <div className="inner container m-auto flex justify-between">
              <div className="col-1 flex flex-col gap-10 basis-[45%]">
              <Image
              src="/images/logo-Footer.png"
              alt="Company Logo"
              width={180}
              height={0}
              priority
              />
              <p className="text-white leading-8 font-light text-sm">
              Copyright © 2020 Landify UI Kit.<br/>
              All rights reserved
              </p>

              <div className="social-icons">
                <ul className="flex gap-3">
                  <li className="">
                    <FaInstagram className="bg-[#3c464c] text-white p-2 rounded-full text-4xl"/>
                  </li>
                  <li className="">
                    <FaDribbble className="bg-[#3c464c] text-white p-2 rounded-full text-4xl"/>
                  </li>
                  <li className="">
                    <FaTwitter className="bg-[#3c464c] text-white p-2 rounded-full text-4xl"/>
                  </li>
                  <li className="">
                    <FaYoutube className="bg-[#3c464c] text-white p-2 rounded-full text-4xl"/>
                  </li>
                </ul>
              </div>

              </div>
              <div className="col-2 text-white flex flex-col gap-8">
              <h3 className="text-lg font-semibold">
                  Company
                </h3>
                <ul className="text-sm font-light flex flex-col gap-3">
                  <li>
                    About Us
                  </li>
                  <li>
                    Blog
                  </li>
                  <li>
                    Contact Us
                  </li>
                  <li>
                    Pricing
                  </li>
                  <li>
                    Testimonials
                  </li>
                </ul>
        
              </div>
              <div className="col-3 text-white flex flex-col gap-8">
              <h3 className="text-lg font-semibold">
              Support
                </h3>
                <ul className="text-sm font-light flex flex-col gap-3">
                  <li>
                    Help center
                  </li>
                  <li>
                    Terms of service 
                  </li>
                  <li>
                    Legal
                  </li>
                  <li>
                    Privacy policy
                  </li>
                  <li>
                    Status
                  </li>
                </ul>
        
              </div>
              <div className="col-4 text-white flex flex-col gap-8">
                <h3 className="text-lg font-semibold">
                  Stay up to date
                </h3>
                <form action="" className="relative">
                  <input type="email" className="bg-[#515B60] p-3 text-white placeholder:text-white placeholder:font-light placeholder:text-sm rounded-md" placeholder="Your email address "/>
                  <FiSend className="text-xl absolute top-[32%] right-[6%]"/>
                </form>
              </div>
            </div>
          </div>
        </footer>
     
    </div>
  )
}

export default Footer
