import React, { useContext } from 'react'
import { Categories } from '../../context/Category'


export default function CategoryXL() {

    const { setCtegorySelection } = useContext(Categories)
    const categorYData = useContext(Categories)
    const showCategories = (cat) =>{
        setCtegorySelection(cat)
    }

    return (
        <div className="w-full h-auto mt-[2px] border-b-[2px] border-t-[2px] border-[#eff1f3] border-solid">
            <div className=' md:flex h-11 max-w-[1280px] ml-auto mr-auto text-[14px] items-center 
                 overflow-x-auto hidden w-[calc(100vw_-_20px)]'>
                <div className='flex items-center mr-4 whitespace-nowrap'>
                    <p className='font-black'>ALL CATEGORIES</p>
                </div>
                <ul className='flex items-center gap-3 font-light opacity-70'>
                    {categorYData.nav.map((data, index) => {
                        return <li key={index} onClick={()=>showCategories(data.label)} className='font-thin  whitespace-nowrap'>{data.label}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
