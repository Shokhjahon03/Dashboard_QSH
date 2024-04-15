import { Button } from 'flowbite-react'
import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Saidbar from './components/Saidbar'
import HomeP from './pages/HomeP'
import AddWork from './pages/AddWork'
import HodimlarP from './pages/HodimlarP'

export function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeP/>}/>
          <Route path='/hh' element={<HodimlarP/>}/>
        </Routes>
        <Saidbar/>
    </BrowserRouter>
  )
}
