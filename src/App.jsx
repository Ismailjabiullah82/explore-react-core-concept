import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  

  return (
    <>
      <div>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>React Core Concept</h2>
    
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
            
    </>
  )
}

export default App
