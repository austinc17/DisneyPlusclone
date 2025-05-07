import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenremovieList from './components/GenremovieList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <Slider/>

      <ProductionHouse/>

      <GenremovieList/>

     



     

     
    </>
  )
}

export default App
