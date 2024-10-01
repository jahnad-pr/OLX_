import React from 'react'

export default function MainCart() {
  return (
    <div className="lg:min-w-[calc(25%_-_16px)] lg:max-w-[calc(25%_-_16px)] sm:max-w-[calc(33.33%_-_16px)] sm:min-w-[calc(33.33%_-_16px)] ms:min-w-[calc(50%_-_16px)] ms:max-w-[calc(50%_-_16px)] max-w-[calc(100%_-_16px)] min-w-[calc(100%_-_16px)] h-[266px] rounded-md m-2 flex flex-col overflow-hidden border-gray-300 border-[1px] relative">
    <span className='w-9 h-9 bg-white absolute right-3 top-3 rounded-full grid place-items-center'>
      <img className='w-6 h-6' src="https://www.svgrepo.com/show/13666/heart.svg" alt="" />
    </span>
    <div className="w-full h-40  p-2 overflow-hidden relative">
      <img className='object-cover' src="https://apollo.olx.in/v1/files/r7eit3q1lj271-IN/image;s=300x600;q=60" alt="" />
    </div>
    <div className="flex-1 flex w-full pt-2 relative">
    <span className='absolute text-[10px] bg-yellow-400 py-[1px] px-[6px] top-[-13px] left-[20px]'>FEATURED</span>
      <div className="w-2 h-full bg-yellow-400"></div>
      <div className="py-1 px-3 flex flex-col flex-1 pr-4">
        <p className='text-[20px] font-bold'>₹ 5,000</p>
        <p className='text-[14px] text-gray-500'>addisinol thinks</p>
        <p className='text-[14px] my-1 text-gray-500'>Commercial Plot Near Reddiyarpatti</p>
        <div className='text-[10px] text-gray-500 flex flex-1 items-end mt-1'>
          <p>Samudrapur, Maharashtra</p>
          <span className='flex-1'></span>
          <p>TODAY</p>
        </div>
      </div>
    </div>
  </div>
  )
}
