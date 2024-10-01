import React from 'react'

export default function LanguageList() {

    const lanList = ['English','Hindi','Malayalam']

    return (
        <div onClick={(evn)=>{ evn.stopPropagation() }} className="w-[200px] bg-white absolute md:block hidden right-[10.3rem] left-auto z-30
         after:absolute after:w-0 after:h-0 after:border-l-[10px] after:border-r-[10px] after:border--transparent after:border-r-transparent after:border-b-[10px] after:border-b-white after:border-l-transparent after:left-[46%] after:right-[50%] after:top-[-10px]
         rounded-[4px] p-4 pb-0 shadow-2xl">
            <ul className='text-[18px]'>
                {lanList.map( (data,index) => <li key={index} className='py-3'>{data}</li> )}
            </ul>
        </div>
    )
}
