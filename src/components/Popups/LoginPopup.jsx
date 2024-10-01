import React,{ useState,useContext } from 'react'
import { auth,provider,signInWithPopup,signOut,onAuthStateChanged } from '../../Auth/firebase.js'
import { Categories } from '../../context/Category';


export default function LoginPopup({setLogPop,logPop}) {

  const { isSign,setSign } = useContext(Categories)

    onAuthStateChanged(auth, (user) => {
        if (user) {
          setSign(user)          
        }
      });
      
    
      const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            setSign(result.user)
            setLogPop(false)
            // You can store user info or navigate to a protected route
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
      const signOutUser = () => {
        if(confirm('Dou you want to logOut , Are you sure ?')){
          auth.signOut()
          .then(() => {
            // Sign-out successful.
            setSign(false)
            
            // Optionally, you can navigate to a different route or clear user info
          })
          .catch((error) => {
            console.error('Error signing out: ', error);
          });
        }
        
      };

    return (
        <>{ 
        <div onClick={()=>{ setLogPop(false) }} className={`w-screen h-screen z-[100]  bg-[#00000099] flex box-border fixed top-0 left-0 items-center duration-500 transition-opacity 
        justify-center backdrop-blur-sm ${!logPop?'translate-x-[200%]':'translate-x-0'} ${!logPop?'opacity-0':'opacity-100'}`} >
            <div onClick={(evn)=>{ evn.stopPropagation() }} className="w-screen h-screen bg-white md:w-[400px] md:h-[600px] p-6 flex flex-col relative">
                <div className="w-full flex overflow-scroll snap-mandatory snap-x">
                    <div className='min-w-full h-[220px] flex items-center justify-center flex-col gap-2 snap-center text-center'>
                        <img className='w-[100px] h-[100px]' src="	https://statics.olx.in/external/base/img/loginEntryPointPost.webp" alt="" />
                        <p>Help us become one of the safest places to buy and sell</p>
                    </div>
                    <div className='min-w-full h-[220px]  flex items-center justify-center flex-col gap-2 snap-center'>
                        <img className='w-[100px] h-[100px]' src="	https://statics.olx.in/external/base/img/loginEntryPointChat.webp" alt="" />
                        <p>Keep all your favourites in one place</p>
                    </div>
                    <div className='min-w-full h-[220px]  flex items-center justify-center flex-col gap-2 snap-center'>
                        <img className='w-[100px] h-[100px]' src="	https://statics.olx.in/external/base/img/loginEntryPointFavorite.webp" alt="" />
                        <p>Close deals from the comfort of your home.</p>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                <svg width="155px" height="155px" viewBox="0 0 1024 1024" data-aut-id="icon" fillRule="evenodd"><path className="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
                </div>
                <div onClick={signInWithGoogle} className="w-full  justify-center flex flex-1 items-center">
                    <button className="w-[360px] h-10 flex items-center bg-white  border border-gray-300 rounded-md shadow-md px-6 py-2 text-sm 
                    font-medium text-gray-800 dark:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                        <span className='flex-1 '>Continue with Google</span>
                    </button>
                </div>
                <div className='md:flex-1  justify-center text-center flex flex-col text-[13px] text-gray-600 mb-10 md:mb-0 '>
                    <p>All your personal details are safe with us.</p>
                    <p>If you continue, you are accepting <span className='text-[#6491fa]'>OLX Terms and Conditions and Privacy Policy</span></p>
                </div>

                <svg onClick={()=>{ setLogPop(false) }} width="22px" height="22px" viewBox="0 0 1024 1024" data-aut-id="icon" className="absolute top-5 right-5" fillRule="evenodd"><path className="" d="M878.336 85.333l-366.336 366.315-366.336-366.315h-60.331v60.331l366.336 366.336-366.336 366.336v60.331h60.331l366.336-366.336 366.336 366.336h60.331v-60.331l-366.315-366.336 366.315-366.336v-60.331z"></path></svg>
            </div>
        </div>}
        </>
    )
}
