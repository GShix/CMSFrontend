

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import { useState } from 'react'
function App() {
  // const [count, setCount] = useStatee(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
