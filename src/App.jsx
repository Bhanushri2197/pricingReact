import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PricingCard from './PricingCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="pricingBlock">
      <h1 className="heading">React Price Card Task</h1>
      <div  className="pricingListBlock">
        <PricingCard plan="FREE" price="0"/>
        <PricingCard plan="PLUS" price="9"/>
        <PricingCard plan="PRO" price="49"/>
      </div>
      
    </div>
   
  )
}

export default App
