import React from 'react'
import Loclist from '../List/Loclist'

export default function LocationSearch() {
    return (
        <>
            <div onClick={(evn)=>{ evn.stopPropagation() }} className="w-[272px] h-72 absolute bg-white left-[calc(5rem_+_4px)] hidden md:block top-14 mt-1 z-30 shadow-2xl overflow-y-scroll" >
                <div className="pt-6 pb-4 flex pl-4 gap-2 items-center">
                    <svg width="28px" height="28px" viewBox="0 0 1024 1024" data-aut-id="icon" className="fill-[#3a77ff]" fillRule="evenodd"><path className="rui-w4DG7" d="M640 512c0 70.692-57.308 128-128 128s-128-57.308-128-128c0-70.692 57.308-128 128-128s128 57.308 128 128zM942.933 469.333h-89.6c-17.602-157.359-141.307-281.064-297.136-298.527l-1.531-0.139v-89.6h-85.333v89.6c-157.359 17.602-281.064 141.307-298.527 297.136l-0.139 1.531h-89.6v85.333h89.6c17.602 157.359 141.307 281.064 297.136 298.527l1.531 0.139v89.6h85.333v-89.6c157.359-17.602 281.064-141.307 298.527-297.136l0.139-1.531h89.6zM512 772.267c-143.741 0-260.267-116.525-260.267-260.267s116.525-260.267 260.267-260.267c143.741 0 260.267 116.525 260.267 260.267v0c0 143.741-116.525 260.267-260.267 260.267v0z"></path></svg>
                    <div className="text-[#3a77ff]">
                        <p>Use current location</p>
                    </div>
                </div>

                <Loclist data={{title:'RECENT LOCATION',list:['India']}} />
                <Loclist data={{title:'POPULAR LOCATION',list:['Thiruvananthapuram','Kochi','Thrissur','Kozhikode']}} />

            </div>
        </>
    )
}
 