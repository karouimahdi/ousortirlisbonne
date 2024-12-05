import { useState } from 'react'
import './App.css'
import AuthPage from "./pages/auth"
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
    <Route path="/auth" element={<AuthPage/>}/>
   </Routes>
  )
}  

export default App
