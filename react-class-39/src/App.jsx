import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import counter from './counter'
import Counter from './counter'
import Team from './team'
import User from './User'
import Friends from './friends'


function App() {
  
  const clickMe = () => {
    alert('button Clicked')
  }
  const addFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h3>React-part-2</h3>

      <Friends></Friends>
      <User></User>

      <Team></Team>

      <Counter></Counter>


      <button onClick={clickMe}>click me </button>
      <button onClick={() =>{alert('third button clicked')}}>click me 2 </button>
      <button onClick={()=>addFive(10)}> button 4 </button>
    </>
  )
}

export default App
