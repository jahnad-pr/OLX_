import React, { useContext, useEffect, useState } from 'react'
import MainCart from '../List/MainCart'
import { getUsers } from '../../Auth/DBcrud'
import { Categories } from '../../context/Category'
import Loader from '../Utils/Loader'


export default function MainBody() {

  const [prodectData, SetProdectData] = useState()
  const [empty, isEmpty] = useState(false)
  const { added,isAdded } = useContext(Categories)


  useEffect(() => {
    const fetchProdects = async () => {
      isEmpty(false)
      const productResult = await getUsers()
      SetProdectData(productResult)
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
        <div className='w-screen h-screen xl:p-0 p-10'>
          <h1 className='text-[24px] mb-2 mt-2 max-w-[1280px] w-full mx-auto pl-2'>Fresh recommendations</h1>
          <div className="max-w-[1280px] w-full mx-auto flex flex-wrap">
            {prodectData &&
              prodectData.map(data => <MainCart />)
            }
          </div>
        </div> :!empty?
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
