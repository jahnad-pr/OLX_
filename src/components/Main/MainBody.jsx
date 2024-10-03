import React, { useContext, useEffect, useState } from 'react'
import MainCart from '../List/MainCart'
import { getUsers } from '../../Auth/DBcrud'
import { Categories } from '../../context/Category'
import Loader from '../Utils/Loader'


export default function MainBody({setLogPop}) {

  const [prodectData, SetProdectData] = useState()
  const [empty, isEmpty] = useState(false)
  const { searchData } = useContext(Categories)
  const [forSerch,setForSearch] = useState()
  const { added,isAdded } = useContext(Categories)
  const [ limit,changeLimit ] = useState(12)

  const loadMore = ()=>{
    changeLimit(limit+8)
  }

  useEffect(()=>{
    searchData?SetProdectData(forSerch.filter( data => data.prodectName.toUpperCase().includes(searchData.toUpperCase()) )):SetProdectData(forSerch)
  },[searchData])

  useEffect(() => {
    const fetchProdects = async () => {
      isEmpty(false)
      const productResult = await getUsers()
      SetProdectData(productResult)
      setForSearch(productResult)
    }
    fetchProdects()
    isAdded(false)

  }, [added])

  useEffect(()=>{
    prodectData?.length===0?isEmpty(true):isEmpty(false)
  },[prodectData])

  return (
    <>
      {prodectData?.length>0 ?
      <>
        <div className='w-screen h-auto xl:p-0 p-10 mb-80'>
          <h1 className='text-[24px] mb-2 mt-2 max-w-[1280px] w-full mx-auto pl-2'>Fresh recommendations</h1>
          <div className="max-w-[1280px] w-full mx-auto flex flex-wrap">
            {prodectData &&
              prodectData.map((data,index) => 
                index<limit&&
                <MainCart setLogPop={setLogPop} key={index} data={data} />
                )}
          </div>
        </div> { limit<prodectData.length &&
        <div className="w-full bg-red-300 h-20 mb-24 flex items-center">
          <div  onClick={loadMore}
          className="mx-auto p-3 border-2 border-black rounded-md px-4 font-bold hover:border-4 hover:bg-gray-600 hover:text-white">
            Load More
          </div>
        </div>
        }
        </>
        :!empty?
        <div className='w-full h-[calc(100vh_-_120px)] grid place-items-center'>
          <Loader color={'#000000'} />
        </div>:empty?
        <div className="w-full h-[calc(100vh_-_220px)] flex justify-center items-center flex-col">
          <img src="https://www.edgecrm.app/images/no-data.gif" alt="" />
          <h1 className='text-[24px] font-bold'>No Prodects</h1>
        </div>:null
        }
    </>
  )
}
