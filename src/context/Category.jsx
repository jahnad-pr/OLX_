import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { auth } from '../Auth/firebase'

export const Categories = createContext()
export default function Category({children}) {

  const [cat,setCat] =useState([])
  const [nav,setNav] =useState([])
  const [isSign,setSign] = useState(false)

  const [locShow, setLocShow] = useState(false)
  const [langShow, setLangShow] = useState(false)
  const [detShow, setDetShow] = useState(false)
  const [notShow, setNotShow] = useState(false)
  const [searchData, setSD] = useState('')
  const [added, isAdded] = useState('')


  const closeAll = ()=> {
    locShow?setLocShow(false):null
    langShow?setLangShow(false):null
    detShow?setDetShow(false):null
    notShow?setNotShow(false):null
  }

  

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


  const fetchCat = async () => {
    await fetch('/CategoryData.json')
    .then( res => res.json() )
    .then( data => setCat(data))
  }

  const fetchNavCat = async () => {
    await fetch('/HeadList.json')
    .then( res => res.json() )
    .then( data => setNav(data))
  }

  return (
      <Categories.Provider value={{fetchCat,cat,nav,fetchNavCat,isSign,setSign,signOutUser,
        setLocShow,setLangShow,setDetShow,setNotShow,
        locShow,langShow,detShow,notShow,closeAll,searchData,setSD,added,isAdded
      }}>
        {children}
      </Categories.Provider>
  )
}
