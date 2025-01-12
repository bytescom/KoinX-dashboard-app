import React from 'react'

const Promobanner = () => {
  return (
    <div className='bg-use h-[500px] rounded-2xl px-[4.5vw] text-white flex flex-col justify-center items-center gap-5'>
      <div className='text-[24px] w-[96%] font-bold text-center'>Get Started with KoinX for FREE</div>
      <div className='text-[14px] text-center'>With out range of features that you can equip for free, KoinX allows to you more educated and aware of your tax reports.</div>
      <div>
        <img src="bannerimg.svg" alt="loading..." />
      </div>
      <div className='flex justify-center items-center gap-2 bg-white py-2 px-6 rounded-lg'>
        <button className='text-base text-black font-bold '>
            Get Started for FREE
        </button>
        <img className='w-[18px]' src="arrow-right-line.svg" alt="" />
      </div>
    </div>
  )
}

export default Promobanner
