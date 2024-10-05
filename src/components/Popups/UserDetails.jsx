import React, { useContext } from 'react'
import { Categories } from '../../context/Category'
import progress from '../../assets/images/progress.png'
import LazyImage from 'react-lazy-blur-image'


export default function UserDetails({setDetShow,setLogPop}) {

  const { isSign,setSign,signOutUser } = useContext(Categories)
  const showPopuo = (event)=>{
    event.stopPropagation()
    setLogPop(true)
  }

  return (
    <>{ isSign?
    <div onClick={(evn)=>{ evn.stopPropagation() }} className='md:w-[288px] md:h-auto right-0  top-0 md:top-auto fixed md:absolute md:right-20 shadow-2xl bg-white z-[100]  md:block w-screen h-screen
    after:absolute after:w-0 after:h-0 after:border-l-[10px] after:border-r-[10px] after:border--transparent after:border-r-transparent after:border-b-[10px] after:border-b-white after:border-l-transparent  after:right-[22%] after:top-[-10px] '>
        <div className='flex items-center ml-5 mt-5 gap-5 mb-5 md:hidden'>
            <svg onClick={()=>{ setDetShow(false) }}  width="22px" height="22px" viewBox="0 0 1024 1024" data-aut-id="icon" className="hover:cursor-pointer" fillRule="evenodd"><path className="" d="M878.336 85.333l-366.336 366.315-366.336-366.315h-60.331v60.331l366.336 366.336-366.336 366.336v60.331h60.331l366.336-366.336 366.336 366.336h60.331v-60.331l-366.315-366.336 366.315-366.336v-60.331z"></path></svg>
            <svg width="45px" height="45px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd"><path className="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
            </div>
        <div className="w-full mx-5 mb-4 mt-4 flex items-center gap-4">

            <img src={isSign.photoURL || 'https://i0.wp.com/mandapublishers.com/wp-content/uploads/2021/05/%E2%80%94Pngtree%E2%80%94user-icon-isolated-on-abstract_5192004.png?w=500&ssl=1'} alt="User" className="w-14 h-14 bg-black rounded-full"/>


            <p className='text-[20px]'>{isSign.displayName}</p>
        </div>
        
        <div className='m-6'>
            <p className='text-[16px]'>2 step left</p>
            <img className='py-2' src={progress} alt="" />
            <p className='text-[12px] opacity-50'>We are built on trust. Help one another to get to know each other better.</p>
        </div>
        <div className="border-t-2 border-gray-200 w-full">
            <ul className='w-[100%]'>
                <li className='h-[48px] px-6 py-3 flex items-center gap-4 hover:bg-[#c8f8f6]'>
                <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" className="opacity-50" fillRule="evenodd"><path className="rui-w4DG7" d="M830.798 448.659L512 838.574L194.172 449.881C173.712 422.71 162.909 390.536 162.909 356.848C162.909 271.282 232.514 201.697 318.061 201.697C390.187 201.697 450.812 251.248 468.112 318.06H555.889C573.188 251.248 633.794 201.697 705.94 201.697C791.486 201.697 861.091 271.282 861.091 356.848C861.091 390.536 850.289 422.71 830.798 448.659M705.94 124.121C625.086 124.121 553.736 165.547 512 228.325C470.264 165.547 398.914 124.121 318.061 124.121C189.731 124.121 85.3335 228.499 85.3335 356.848C85.3335 407.505 101.527 455.796 133.14 497.745L461.906 899.879H562.095L891.811 496.524C922.473 455.796 938.667 407.505 938.667 356.848C938.667 228.499 834.269 124.121 705.94 124.121"></path></svg>
                <p>My ADS</p>
                </li>
                <li className='h-[48px] px-6 py-3 flex items-center gap-4 hover:bg-[#c8f8f6]'>
                <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" className="opacity-50" fillRule="evenodd"><path className="rui-w4DG7" d="M426.667 42.667h170.667l42.667 42.667-42.667 42.667h256l42.667 42.667v768l-42.667 42.667h-682.667l-42.667-42.667v-768l42.667-42.667h256l-42.667-42.667 42.667-42.667zM213.333 896h597.333v-682.667h-597.333v682.667zM469.333 426.667v-85.333h256v85.333h-256zM298.667 426.667v-85.333h85.333v85.333h-85.333zM469.333 597.333v-85.333h256v85.333h-256zM298.667 597.333v-85.333h85.333v85.333h-85.333zM469.333 768v-85.333h256v85.333h-256zM298.667 768v-85.333h85.333v85.333h-85.333z"></path></svg>                <p>Buy Business Packages</p>
                </li>
                <li className='h-[48px] px-6 py-3 flex items-center gap-4 hover:bg-[#c8f8f6]'>
                <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" className="opacity-50" fillRule="evenodd"><path className="rui-w4DG7" d="M899.285 256l39.381 39.083v476.501l-39.381 39.083h-774.571l-39.381-39.083v-476.501l39.381-39.083h774.571zM853.461 511.573h-681.6v213.632h681.6v-213.632zM693.205 618.411h76.459l34.901 32.213-34.901 32.213h-128.896l-34.901-32.213 34.901-32.213h52.437zM853.461 341.248h-681.387v86.357l681.387-2.347v-84.053z"></path></svg>
                <p>Bought Packages & Billing</p>
                </li>
                
            </ul>
        </div>
        <div className="border-t-2 border-gray-200 w-full">
            <ul className='w-[100%] '>
                <li className='h-[48px] px-6 py-3 flex items-center gap-4 hover:bg-[#c8f8f6]'>
                <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" className="opacity-50" fillRule="evenodd"><path className="rui-w4DG7" d="M550.789 744.728c0 21.41-17.377 38.789-38.789 38.789s-38.789-17.377-38.789-38.789 17.377-38.789 38.789-38.789 38.789 17.377 38.789 38.789zM686.546 415.030c0 82.89-58.105 152.513-135.757 170.201v43.131l-38.789 38.789-38.789-38.789v-77.575l38.789-38.789c53.489 0 96.97-43.481 96.97-96.97s-43.481-96.97-96.97-96.97-96.97 43.481-96.97 96.97l-38.789 38.789-38.789-38.789c0-96.232 78.312-174.546 174.546-174.546s174.546 78.312 174.546 174.546zM512 861.090c-192.505 0-349.090-156.626-349.090-349.090 0-192.505 156.587-349.090 349.090-349.090 192.466 0 349.090 156.587 349.090 349.090 0 192.466-156.626 349.090-349.090 349.090zM512 85.333c-235.288 0-426.667 191.379-426.667 426.667s191.379 426.667 426.667 426.667 426.667-191.379 426.667-426.667-191.379-426.667-426.667-426.667z"></path></svg>
                <p>Help</p>
                </li>
                <li className='h-[48px] px-6 py-3 flex items-center gap-4 hover:bg-[#c8f8f6]'>
                <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" className="opacity-50" fillRule="evenodd"><path className="rui-w4DG7" d="M873.997 456.711H819.182C811.047 414.001 794.347 374.323 770.704 339.651L809.444 300.892V259.727L767.653 217.918H726.489L687.73 256.677C653.058 233.054 613.38 216.334 570.67 208.199V153.384L541.552 124.266H482.455L453.337 153.384V208.199C410.628 216.334 370.949 233.054 336.277 256.677L297.518 217.918H256.334L214.544 259.727V300.892L253.303 339.651C229.661 374.323 212.96 414.001 204.825 456.711H150.011L120.893 485.829V544.926L150.011 574.044H204.825C212.96 616.753 229.661 656.431 253.303 691.103L214.544 729.863V771.047L256.334 812.837H297.518L336.277 774.078C370.949 797.72 410.628 814.421 453.337 822.556V877.37L482.455 906.488H541.552L570.67 877.37V822.556C613.38 814.421 653.058 797.72 687.73 774.078L726.489 812.837H767.653L809.444 771.047V729.863L770.704 691.103C794.347 656.431 811.047 616.753 819.182 574.044H873.997L903.115 544.926V485.829L873.997 456.711ZM512.004 750.044C382.605 750.044 277.337 644.776 277.337 515.377C277.337 385.978 382.605 280.711 512.004 280.711C641.403 280.711 746.67 385.978 746.67 515.377C746.67 644.776 641.403 750.044 512.004 750.044ZM512.004 350.839C421.266 350.839 347.463 424.641 347.463 515.379C347.463 606.117 421.266 679.92 512.004 679.92C602.741 679.92 676.544 606.117 676.544 515.379C676.544 424.641 602.741 350.839 512.004 350.839ZM512.004 601.697C464.405 601.697 425.685 562.977 425.685 515.379C425.685 467.781 464.405 429.061 512.004 429.061C559.602 429.061 598.322 467.781 598.322 515.379C598.322 562.977 559.602 601.697 512.004 601.697Z"></path></svg>
                <p>Settings</p>
                </li>
                <li onClick={()=>{ signOutUser(),setDetShow(false) }} className='h-[48px] px-6 pb-6 py-3 flex items-center gap-4 hover:bg-[#c8f8f6] hover:text-red-600 hover:fill-red-600'>
                <svg width="23px" height="23px" viewBox="0 0 1024 1024" data-aut-id="icon" className="opacity-50" fillRule="evenodd"><path className="rui-w4DG7" d="M128 85.333l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-213.333l-42.667-42.667-42.667 42.667v170.667h-682.667v-682.667h682.667v170.667l42.667 42.667 42.667-42.667v-213.333l-42.667-42.667h-768zM494.336 298.667l-183.168 183.168v60.331l183.168 183.168h60.331v-60.331l-110.336-110.336h323.669l42.667-42.667-42.667-42.667h-323.669l110.336-110.336v-60.331h-60.331z"></path></svg>
                <p>Logout</p>
                </li>
                
            </ul>
        </div>
        

    </div>:
    <button onClick={showPopuo} className='md:hidden h-10 w-[calc(100%_-_48px)] bg-black my-4 mx-6 text-white flex items-center justify-center rounded-md'>Signup or Signin</button>
    }</>
  )
}
