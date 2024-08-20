import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Image from "next/image";

function Header() {
  return (
    <div>
        <header className="container mx-auto py-5 flex justify-between align-middle">
          <div className="logo my-auto"> 
          <Image src="/images/Logo.png" alt="Company Logo" width={150} height={0} priority />
          </div>
          <nav className="flex align-middle text-md">
            <ul className="flex align-middle">
              <li className="px-4 py-2">
                <Link href={'/'}> Home </Link>
              </li>
              <li className="px-4 py-2">
              <Link href={'/features'}> Features </Link>
              </li>
              <li className="px-4 py-2">
              <Link href={'/community'}> Community </Link>
              </li>
              <li className="px-4 py-2">
              <Link href={'/blog'}> Blog </Link>
              </li>
              <li className="px-4 py-2">
              <Link href={'/pricing'}> Pricing </Link>
              </li>
            </ul>
            <button className="flex bg-[#4CAF4F] text-white px-6 py-3 ml-3 rounded-[3px]">Register Now <FaArrowRight className="my-auto ml-2"/></button>
          </nav>
        </header>
      
    </div>
  )
}

export default Header
