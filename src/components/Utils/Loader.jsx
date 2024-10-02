import { useContext, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Categories } from '../../context/Category';

export default function Loader({seccuss,showLoader,sell, loaderScreen,color}) {

  const { isAdded } = useContext(Categories)

  useEffect(()=>{

    seccuss? setTimeout(() => {
      loaderScreen.current.classList.add('Inime')
      setTimeout(() => {
        isAdded(true)     
        showLoader(false)
        sell(false)  
      }, 400); 
    }, 1500):null

  },[seccuss])

  return (
    <>
    <ReactLoading type={'bubbles'} color={color} height={'100px'} width={'150px'} />
    { seccuss &&
    <div className="fixed w-screen h-screen bg-[#060a19] z-[130] top-0 left-0 anime grid place-items-center">
      <img src="https://i.gifer.com/7S7F.gif" alt="" />
    </div>
    }
    </>
  )
}
