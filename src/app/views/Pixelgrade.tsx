import React from 'react'
import Image from 'next/image'
function Pixelgrade() {
  return (
    <div>
         <div className='pixelgrade flex container m-auto justify-between items-center my-16'>
        <div>
        <Image src="/images/rafiki.png" className='' alt="Company Logo" width={1300} height={0} priority />
        </div>
        <div className='grow-1 px-16'>
            <h2 className='sub-heading-style'>
            The unseen of spending three years<br/>at Pixelgrade
            </h2>
            <p className='para-style text-sm text-left mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
            <button className="flex bg-[#4CAF4F] text-white px-6 py-3 mt-7 rounded-[3px]">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Pixelgrade
