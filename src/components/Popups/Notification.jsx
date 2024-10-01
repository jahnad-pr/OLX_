import React from 'react'

export default function Notification() {
  return (
    <div onClick={(evn)=>{ evn.stopPropagation() }} className='w-[304px] absolute z-[35] bg-white shadow-2xl flex justify-center flex-col text-center right-28
    after:absolute after:w-0 after:h-0 after:border-l-[10px] after:border-r-[10px] after:border--transparent after:border-r-transparent after:border-b-[10px] after:border-b-white after:border-l-transparent after:left-[46%] after:right-[50%] after:top-[-10px] hidden md:block'>
      <p className='mt-[32px] text-[14px]'>No notifications</p>
      <p className='my-3 text-[12px] opacity-50'>Check back here for updates!</p>
      <img className='h-[120px] max-w-[120px] mt-6 mb-2 mx-auto' src="	https://statics.olx.in/external/base/img/notifications.webp" alt="" />
    </div>
  )
}
