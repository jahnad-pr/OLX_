import React, { useEffect, useState } from "react";
import { getDynamicTimeGap } from "../Utils/TimeGap";
import { formatToINR } from "../Utils/PriceFormat";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Categories } from "../../context/Category";
import { collection, query, where, getDocs, updateDoc, doc, } from "firebase/firestore"
import Loader from "../Utils/Loader";
import { db } from "../../Auth/firebase"

export default function MainCart({ data,setLogPop }) {

  const navigate = useNavigate();
  const navigateToPodectDetails = () => {
    navigate(`/product/${data.id}`, { state: { data } })
    
  };
  const { isSign } = useContext(Categories)
  const [currentUserData,setcurrentUserData] = useState({})
  const [listner,setListner] = useState(false)
  const [loader,setLoader] = useState(false)

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
      updateUser()
    }else{
      setLogPop(true)
    }
  };

  return (
    <div
      onClick={navigateToPodectDetails}
      className="anime lg:min-w-[calc(25%_-_16px)] lg:max-w-[calc(25%_-_16px)] sm:max-w-[calc(33.33%_-_16px)] sm:min-w-[calc(33.33%_-_16px)] ms:min-w-[calc(50%_-_16px)] ms:max-w-[calc(50%_-_16px)] max-w-[calc(100%_-_16px)] min-w-[calc(100%_-_16px)] h-[266px] rounded-md m-2 flex flex-col overflow-hidden border-gray-300 border-[1px] relative"
    >
      <span
        onClick={addFavorite}
        className="w-9 h-9 bg-white absolute right-3 top-3 rounded-full grid place-items-center z-10"
      >
        {loader?<Loader color={'#000000'} rel={true} />:
        currentUserData[data.id] ? 
        ( <img className="w-6 h-6 popup" src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-favorite-5.png" alt="" /> ) : 
        ( <img className="w-6 h-6 popup" src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-heart-thin.png" alt="" /> )
        }
      </span>
      <div className="w-full h-40  p-2 overflow-hidden relative">
      <img src={data.imageURL || 'https://static.startuptalky.com/2022/06/OLX-Company-Profile-StartupTalky.jpg'} alt="OLX Image" className="object-cover w-full h-full" />
      </div>
      <div className="flex-1 flex w-full pt-2 relative">
        { data.featured && <span className='absolute text-[10px] bg-yellow-400 py-[1px] px-[6px] top-[-13px] left-[20px] overflow-hidden"'>
          FEATURED
        </span>}
        <div className={`w-2 h-full ${data.featured?'bg-yellow-400':''}  overflow-hidden`}></div>
        <div className="py-1 px-3 flex flex-col flex-1 pr-4 overflow-hidden">
          <p className="text-[20px] font-bold">
            {formatToINR(Number(data.price))}
          </p>
          <p className="text-[14px] text-gray-500">{data.prodectName}</p>
          <p className="text-[14px] my-1 text-gray-500 pr-2 overflow-hidden inline whitespace-nowrap ">
            {data.description}
          </p>
          <div className="text-[10px] text-gray-500 flex flex-1 items-end mt-1">
            <p>{data.location.toUpperCase()}</p>
            <span className="flex-1"></span>
            <p>{getDynamicTimeGap(data.date)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
