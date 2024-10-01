// Bimsillah
import './App.css'
import Header from './components/Main/Header'
import Category from './context/Category'
import LoginPopup from './components/Popups/LoginPopup'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Main/Product'
import MainBody from './components/Main/MainBody'

function App() {
  
  const [logPop,setLogPop] = useState(false)

  return (
    <Router>
        <Category>
          <Header setLogPop={setLogPop} />
          <Routes>
            <Route path='/' element={<MainBody />} />
            <Route path='/product/:id' element={<Product/>} />
          </Routes>
          { 
            <LoginPopup logPop={logPop} setLogPop={setLogPop} />
          }
      </Category>
    </Router>
  )
}

export default App
