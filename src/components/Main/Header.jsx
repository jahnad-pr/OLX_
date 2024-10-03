import React, { Suspense, useContext, useEffect, useState } from 'react'
import { Categories } from '../../context/Category'
import LocationSearch from '../Popups/LocationSearch'
import LanguageList from '../Popups/LanguageList'
import CategoryXL from '../List/CategoryXL'
import CategorySM from '../List/CategorySM'
import UserDetails from '../Popups/UserDetails'
import Notification from '../Popups/Notification'
import { useNavigate } from 'react-router'



// eslint-disable-next-line react/prop-types
export default function Header({ setLogPop }) {

  const categorYData = useContext(Categories)
  const { isSign, setLocShow, setLangShow, setDetShow,
    setNotShow, locShow, langShow, detShow, notShow, closeAll,
    searchData, setSD } = useContext(Categories)

  const [locINput, setLocInput] = useState('kerala')
  const [sell, makeSell] = useState(false)
  const navigate = useNavigate()

  const Sell = React.lazy(() => import('../Popups/Sell'));
  const sellProdect = () => isSign?makeSell(true):setLogPop(true)


  useEffect(() => {

    const handleClickOutside = (event) => {
      // Check if the click target is outside the popup
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    categorYData.fetchCat()
    categorYData.fetchNavCat()
    isSign?document.addEventListener('mousedown', () => {
      locShow ? setLocShow(false) : null
      langShow ? setLangShow(false) : null
      detShow ? setDetShow(false) : null
      notShow ? setNotShow(false) : null
    }):null

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  return (
    <>
      <div onClick={closeAll} className='min-h-18 marker w-[100vw]  px-[10px] md:py-1 overflow-hidden bg-[#eff1f3]'>
        <div className="inner w-full flex gap-[5px] md:gap-5 items-center m-auto flex-wrap py-2 pr-3">

          <div className='flex items-center gap-3 md:min-w-0 min-w-[calc(100vw_-_139px)] pl-2'>
            <svg onClick={() => { isSign?setDetShow(true):setLogPop(true) }} width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="md:hidden" fillRule="evenodd"><path className="rui-w4DG7 ml-12" d="M896 682.667l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768zM896 469.333l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768zM896 256l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768z"></path></svg>

            <svg onClick={()=> navigate('/') } width="45px" height="45px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd"><path className="rui-w4DG7 hover:cursor-pointer" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
          </div>

          <div className='flex active: gap-1 w-[85px] md:hidden pr-0 justify-end'>
            <p className='text-[14px]'>Kerala</p>
            <svg width="18px" height="18px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-w4DG7" d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
          </div>

          <div className=' flex-1 md:flex'>
            <div className='h-12 w-full md:w-[272px] border-solid border-2 border-slate-950 rounded-md md:flex gap-2 items-center px-2 hidden 
            focus-within:border-[#47e7df]' type="text" >
              <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-w4DG7" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg>
              <input onFocus={() => { setLocShow(true) }} placeholder='Search city, area or locality' value={locINput} onChange={(ent) => { setLocInput(ent.target.value) }} className='w-[100%] bg-transparent outline-none' type="text" contentEditable />
              <svg onClick={() => { setLocShow(!locShow) }} width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon"
                className={`${locShow ? 'rotate-180' : 'rotate-0'} duration-500`} fillRule="evenodd"><path className="rui-w4DG7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
            </div>

            <div className='flex flex-1 min-w-[calc(100vw_-_20px)] ml-0 md:min-w-0 md:ml-4' >
              {/* Samall */}
              <div className='flex-1 md:h-12 h-10 border-solid border-2 border-slate-950 rounded-md w-full md:rounded-r-none flex items-center gap-3 px-2 focus-within:border-[#47e7df]' type="text" >
                <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" className="md:hidden" fillRule="evenodd"><path className="rui-w4DG7 hover:cursor-pointer" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg>
                <input value={searchData} onChange={(evt) => { isSign?setSD(evt.target.value):setLogPop(true) }} placeholder='Find Cars, Mobile Phones and more...' className='w-[100%] bg-transparent outline-none' type="text" />
              </div>
              <svg width="50px" height="50px" viewBox="0 0 1024 1024" data-aut-id="icon" className="p-3 md:h-12 fill-white bg-black rounded-r-md hidden md:block hover:cursor-pointer" fillRule="evenodd"><path className="rui-o3KKi" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg>
              <div></div>
            </div>
          </div>



          <div className='md:flex min-w-25 hidden gap-2 text-[14px] hover:cursor-pointer'>
            <p>ENGLISH</p>
            <svg onClick={() => setLangShow(!langShow)} width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className={`${langShow ? 'rotate-180' : 'rotate-0'} duration-500 hover:cursor-pointer`} fillRule="evenodd"><path className="rui-w4DG7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
          </div>
          <span className='block flex-1 md:hidden'></span>
          {!isSign ? <p onClick={() => { setLogPop(true) }} className='hidden md:block hover:cursor-pointer'>Login</p> :
            <>
              <svg width="32px" height="32px" viewBox="0 0 1024 1024" data-aut-id="icon" className="hidden md:block hover:bg-[#47e7df] p-1 rounded-full" fillRule="evenodd"><path className="rui-w4DG7" d="M469.333 171.119c-164.693 0-298.667 134.684-298.667 300.25v359.529l108.907-54.753 19.093-4.525h256c164.693 0 298.667-134.684 298.667-300.25s-133.973-300.25-298.667-300.25h-85.333zM147.093 938.667l-61.76-38.368v-428.929c0-212.856 172.267-386.036 384-386.036h85.333c211.733 0 384 173.18 384 386.036s-172.267 386.036-384 386.036h-245.931l-161.643 81.261z"></path></svg>
              <svg onClick={() => { setNotShow(!notShow) }} width="32px" height="32px" viewBox="0 0 1024 1024" data-aut-id="icon" className="hover:bg-[#47e7df] p-1 rounded-full hidden md:block " fillRule="evenodd"><path className="rui-w4DG7" d="M730.855 763.955h-435.559c-0.833-87.945-2.676-279.627-2.676-289.496 0-119.351 98.911-216.463 220.498-216.463s220.455 97.112 220.455 216.463c0 10-1.843 201.594-2.72 289.496v0zM819.282 748.603c0.92-93.341 2.062-266.38 2.062-274.144 0-141.589-98.692-260.545-231.64-294.319 2.192-7.237 3.684-14.782 3.684-22.765 0-44.345-35.969-80.27-80.27-80.27-44.345 0-80.27 35.923-80.27 80.27 0 7.983 1.491 15.483 3.684 22.765-132.948 33.731-231.64 152.687-231.64 294.319 0 7.721 1.14 182.339 2.019 276.030l-90.27 36.581 0.92 64.609h316.032c3.729 40.881 37.679 73.031 79.523 73.031s75.794-32.151 79.523-73.031h312.962l1.754-64.523-88.078-38.556z"></path></svg>
              <img onClick={() => setDetShow(!detShow)} className='w-[30px] h-[30px] bg-black rounded-full hidden md:block ' src={`${isSign.photoURL}`} alt="" />
              <svg onClick={() => setDetShow(!detShow)} width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className={`${detShow ? 'rotate-180' : 'rotate-0'} duration-500 hidden md:block `} fillRule="evenodd"><path className="rui-w4DG7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
            </>}


          {/* Sell button */}
          <div onClick={sellProdect} className='hover:cursor-pointer fixed z-[36] bottom-8 lg:bottom-0 left-[50%] translate-x-[-50%] lg:left-0 lg:translate-x-0 w-26 lg:relative shadow-2xl rounded-full'><svg width="104" height="48" viewBox="0 0 1603 768" className="_20oLV"><g><path className="_32cGm _3Vwmt fill-white" d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"></path><path className="_32cGm _3XfCS fill-yellow-400" d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"></path><path className="_32cGm _1DrSr fill-blue-500" d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"></path><path className="_32cGm HKswn fill-teal-500 " d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"></path></g></svg><div className="_3xUC8 absolute flex top-3 left-6 justify-center items-center gap-1"><span className="_3vzlb"><svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-lquEm" d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"></path></svg></span><span>SELL</span></div></div>

        </div>
        {locShow && <LocationSearch />}
        {langShow && <LanguageList />}
        {notShow && <Notification />}
        {detShow && <UserDetails setLogPop={setLogPop} detShow={detShow} setDetShow={setDetShow} />}

      </div>
      <CategorySM />
      <CategoryXL />
      {sell && <Suspense>
        <Sell makeSell={makeSell} sell={makeSell} />
      </Suspense>
      }
      {
        !isSign?<UserDetails setLogPop={setLogPop} detShow={detShow} setDetShow={setDetShow} />:''
      }
    </>
  )
}
