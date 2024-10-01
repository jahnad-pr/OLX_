import React from 'react'
import MainCart from '../List/MainCart'

export default function MainBody() {

  return (
    <div className='w-screen h-screen xl:p-0 p-10'>
      <h1 className='text-[24px] mb-2 mt-2 max-w-[1280px] w-full mx-auto pl-2'>Fresh recommendations</h1>
      <div className="max-w-[1280px] w-full mx-auto flex flex-wrap">
        <MainCart />
      </div>
    </div>
  )
}
