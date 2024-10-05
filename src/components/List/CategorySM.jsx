import React, { useContext } from 'react'
import { Categories } from '../../context/Category'

export default function CategorySM() {

    const categorYData = useContext(Categories)
    const { setCtegorySelection } = useContext(Categories)
    const showCategories = (cat) =>{
        setCtegorySelection(cat)      
        
    }

    return (
        <div className="min-h-32 w-full py-4 flex flex-col gap-2 md:hidden">
            <div className="flex px-4">
                <p>Browse categories</p>
                <span className='flex-1'></span>
                <p className='opacity-50 font-bold' onClick={()=>showCategories('')}>Show all</p>
            </div>
            <div className='flex-1 flex overflow-scroll'>
                {categorYData.cat.map( (data,index) => {
                    return <div onClick={()=>showCategories(data.value)} key={index} className='min-w-[28.57143vw] h-full flex justify-center items-center flex-col my-[10px]'>
                        <img className='w-12 h-12' src={data.img_path} alt="" />
                        <p className='text-[10px] mt-2 text-center'>{data.category}</p>
                    </div>
                })}

            </div>
        </div>
    )
}
