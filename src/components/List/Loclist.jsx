import React from 'react'

export default function Loclist({data}) {
  return (
    <>
      <div className="w-100 border-t-[1px] border-">
            <p className='p-2 pl-4 text-[12px] text-[#929a9b]'>{data.title}</p>
            <ul className='flex flex-col'>
                {data.list.map( (data,index)=>
                      
                    <li key={index} className='flex p-2 pl-4 gap-2 items-center pb-2 hover:bg-[#c8f8f6]'>
                    <svg width="26px" height="26px" viewBox="0 0 1024 1024" data-aut-id="icon" className="fill-[#7e8d8f]" fillRule="evenodd"><path className="rui-w4DG7" d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                           <p className=' text-gray-700 text-[14px]'>{data}</p> 
                    </li>
                    
                )}
            </ul>
          </div>
    </>
  )
}
