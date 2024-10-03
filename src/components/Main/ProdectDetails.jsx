import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router"
import { formatToINR } from "../Utils/PriceFormat"
import { getDynamicTimeGap } from "../Utils/TimeGap";
import { collection, query, where, getDocs, updateDoc, doc, } from "firebase/firestore"
import { Categories } from "../../context/Category"
import { db } from "../../Auth/firebase"
import Loader from "../Utils/Loader";


export default function ProdectDetails({setLogPop}) {

  const prodectData = useLocation();
  const { data } = prodectData.state || {};
  const [loader,setLoader] = useState(false)
  const { isSign } = useContext(Categories)
  const [listner,setListner] = useState(false)
  const [request,showRequestPopup] = useState(false)
  const [currentUserData,setcurrentUserData] = useState({})
  const none = useRef()
  const navigate = useNavigate()


  const closeSellPopup = ()=>{
    navigate('/',{ replace:true })
  }


    // get Current user data
    useEffect(() => {
      const a = async () => {
        const q = query( collection(db, "users"), where("userId", "==", isSign.uid) )
        const querySnapshot = await getDocs(q);
  
        querySnapshot.forEach((docSnapshot) => {
          const userData = docSnapshot.data()
          setcurrentUserData(userData)
          setLoader(false)
    }) }
        a() }, [isSign,listner])

        useEffect(()=>{
          if(request&&none.current){
            setTimeout(() => {
              none.current.classList.add('ok')
              setTimeout(() => {
                none.current.style.display = 'none'
              }, 200);
              
            }, 1000);
          }
        },[request])
  
  
    // add fav
    const addFavorite = (event) => {
      event.stopPropagation()
      if(isSign){
        setLoader(true)
        
        const updateUser = async () => {
          const q = query(
            collection(db, "users"),
            where("userId", "==", isSign.uid)
          );
          const querySnapshot = await getDocs(q);
          
          querySnapshot.forEach(async (deta) => {
            // Get the document reference
            const userDoc = doc(db, "users", deta.id);
            
            // Get the current value of the field you want to toggle
            const currentData = deta.data();
            const currentValue = currentData[data.id];
            
            // Toggle the value
            const newFields = { [data.id]: !currentValue };
            await updateDoc(userDoc, newFields);
            setListner(!listner)
          });
        };
        updateUser();
      }else{
        setLogPop(true)
      }

    };


  return (
    <>
      {
        <div className={`w-screen h-auto pb-10 bg-[#f2f4f5] first-line:ProdectDetails relative first-letter`}>
                <img onClick={closeSellPopup} className='absolute w-[40px] h-[40px] right-20 top-8 hover:cursor-pointer opacity-55' src="https://www.svgrepo.com/show/32011/close-button.svg" alt="" />
          <div className="w-[calc(100%_-_45px)] max-w-[1280px] h-full mx-auto ">
            <div className="w-full h-full flex flex-col xl:flex-row p-5 gap-5">

             {/* First section */}
              <div className="basis-[66.66%]  flex flex-col">
                {/* Image Div */}
                <div className="w-full flex-1  grid place-items-center border-[1px] border-gray-300 rounded-md">
                  <img className="w-full" src={data.imageURL} alt="" />
                </div>
                {/* Details Name/Description */}
                <div className="w-full p-4 mt-2 border-[1px] border-gray-300 rounded-md bg-white">
                  <div className="w-full">
                    <h1 className="text-[22px] font-bold">Details</h1>
                    <p className="mt-3 opacity-50 mb-3">Prodect :{data.prodectName}</p>
                  </div><hr />
                  <div className="w-full">
                    <h1 className="text-[22px] font-bold mt-5">Description</h1>
                    <p className="mt-3 opacity-50">{data.description}</p>
                  </div>
                </div>
              </div>
            
              {/* Second section */}
              <div className="basis-[33.33%] flex flex-col">
                {/* Prize&Details */}
                <div className="w-full p-5 border-[1px] border-gray-300 rounded-md bg-white">
                    <span className="w-full flex">
                        <p className="text-[30px] font-bold">{formatToINR(Number(data.price))}</p>
                        <span className="flex-1"></span>
                        <span onClick={addFavorite} className="h-6 w-6">
                      {loader?<Loader color={'#000000'} rel={true} />:
                      currentUserData[data.id] ? 
                        ( <img className="w-6 h-6 popup" src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-favorite-5.png" alt="" /> ) : 
                        ( <img className="w-6 h-6 popup" src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-heart-thin.png" alt="" /> )}
                    </span>
                    </span>
                    <p className="opacity-50">{data.category} Good</p>
                    <span className="flex mt-3 opacity-50">
                        <p className="text-[10px]">{data.location.toUpperCase()}</p>
                        <span className="flex-1"></span>
                        <p className="text-[10px]">{getDynamicTimeGap(data.date)}</p>
                    </span>
                </div>
                {/* User details */}
                <div className="w-full border-[1px] border-gray-300 flex flex-col rounded-md mt-2 bg-white">
                  <span className="flex p-5 items-center">
                    <img className="w-[75px] h-[75px] rounded-full mr-5" src={data.profileURL} alt="" />
                    <p className="font-bold text-[18px]">{data.userName}</p>
                    <span className="flex-1"></span>
                    <img className="w-6 h-6 popup" src="https://www.svgrepo.com/show/95912/right-arrow.svg" alt="" />
                  </span>
                  <button onClick={()=>isSign?showRequestPopup(true):setLogPop(true)} className={`px-3 py-2 mx-3 mb-5 rounded-md duration-500 ${!request?'bg-blue-500':'bg-[#14b8a6]'} text-white font-bold`}>{!request?'Request for Product':'Requested'}</button>
                  { request &&
                    <div ref={none} className="bg-green-400  w- pb-3 pt-3   bottom-0 mb-5 flex gap-5 text-center justify-center .Jnime">
                      Request sent
                      <img className="w-5 h-5" src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/tick-green-icon.png" alt="" />
                    </div>
                  }
                </div>
                {/* Place Details */}
                <div className="p-5 flex flex-col gap-3  border-[1px] border-gray-300 mt-2 rounded-md bg-white">
                  <p className="text-[22px] font-bold">Posted in</p>
                  <p className="opacity-50">{data.location}</p>
                </div>
                {/* Terms and plicy of Prodect */}
                <div className="flex-1 mt-2 p-5 border-[1px] border-gray-300 rounded-md flex flex-col gap-3 bg-white">
                <p className="text-[22px] font-bold w-full max-w-[100%]">Posted in</p>
                <p className=" opacity-50 flex-1 ">Before purchasing a product, we highly recommend that you verify all details with the seller, including the condition, authenticity, and price. Please inspect the item thoroughly, as all transactions are final and made directly between you and the seller. We do not offer any warranties, guarantees, or returns on the products listed. Make sure to communicate clearly with the seller and confirm all information before proceeding with payment. By completing the purchase, you acknowledge that you are solely responsible for ensuring the quality and accuracy of the product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
