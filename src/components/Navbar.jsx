import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Modal } from "flowbite-react";
import { useState } from 'preact/hooks'
const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
     <nav className='w-[450px] h-[50px] border-b border-l border-orange-400 fixed top-0 right-0'>
        <div className="container1 h-full">
          <div className="navbar w-full h-full flex justify-around items-center">
            <div className='flex items-center gap-2'>
            <i className='bx bxs-dashboard text-[25px] text-orange-400'></i>
            <h1>Dashboard</h1>
            </div>
            <ul className='flex items-center gap-10'>
              <Link to={'/'}>Uy</Link>
              <Link onClick={() => setOpenModal(true)}>Ishlar Qo'shish +</Link>
              <Link><i className='bx bx-user-circle text-[25px] text-orange-400'></i></Link>
            </ul>
          </div>
        </div>
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Yangi Vazifa qo'shish</Modal.Header>
        <Modal.Body>
          <form className="space-y-6 flex flex-col">
            <label htmlFor="name">Vazifa Nomi</label>
              <input id='name' type="text" placeholder='#Vazifa' className='border-4 rounded-md'/>
            <label htmlFor="date">Vazifa Muddati Qachongacha</label>
              <input id='date' type="date" className='border-4 rounded-md'/>
              <label htmlFor="nameH">Bajaruvchi Kim</label>
              <input id='nameH' type="text" placeholder='#Vazifa' className='border-4 rounded-md'/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Qo'shish</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Bekor Qilish
          </Button>
        </Modal.Footer>
      </Modal>
      </nav> 
    </>
  )
}

export default Navbar
