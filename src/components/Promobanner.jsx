import React from 'react'

const Promobanner = () => {
  return (
    <div className='bg-use h-[500px] rounded-2xl px-[3.5vw] md:px-4 lg:px-[3.8vw]  text-white flex flex-col justify-center items-center gap-5'>
      {/* This is Img div visible on  devices of max-width: 1024px */}
      <div className='block lg:hidden'>
        <img src="bannerimg.svg" alt="loading..." />
      </div>

      <div className='text-[24px] w-[96%] font-bold text-center'>Get Started with KoinX for FREE</div>
      <div className='text-[14px] text-center'>With out range of features that you can equip for free, KoinX allows to you more educated and aware of your tax reports.</div>
  
      {/* This is Img div visible on lg-devices of min-width: 1024px */}
      <div className='hidden lg:block'>
        <img src="bannerimg.svg" alt="loading..." />
      </div>
      <div className='flex justify-center items-center gap-2 bg-white py-2 px-6 md:px-4 lg:px-6 rounded-lg'>
        <button className='text-base text-black font-bold '>
            Get Started for FREE
        </button>
        <img className='w-[18px]' src="arrow-right-line.svg" alt="" />
      </div>
    </div>
  )
}

export default Promobanner
