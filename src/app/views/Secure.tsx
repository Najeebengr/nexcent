import React from 'react'
import Image from 'next/image'
function Secure() {
  return (
    <section>
         <div className='pixelgrade flex container m-auto justify-between items-center my-16'>
        <div>
        <Image src="/images/pana.png" className='' alt="Company Logo" width={1300} height={0} priority />
        </div>
        <div className='grow-1 px-16'>
            <h2 className='sub-heading-style'>
            How to design your site footer<br/> like we did
            </h2>
            <p className='para-style text-sm text-left mt-4'>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            <button className="flex bg-[#4CAF4F] text-white px-6 py-3 mt-7 rounded-[3px]">Learn More</button>
        </div>
      </div>
   
    </section>
  )
}

export default Secure
