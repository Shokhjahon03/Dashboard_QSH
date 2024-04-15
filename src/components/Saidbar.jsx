import { useState } from 'preact/hooks'
import React from 'react'
import { Link } from 'react-router-dom'
const Saidbar = () => {
    let [darkmod,setDarkmode]=useState(true)
  let func=()=>{
    setDarkmode(!darkmod)
    if (darkmod) {
        let dark=document.querySelector('body')
        dark.setAttribute('class', 'dark')
    }else{
      let dark=document.querySelector('body')
      dark.removeAttribute('class' ,'dark')
    }
  }

  return (
   <>
    <div className='fixed top-[50px] right-0 w-[450px] h-dvh border-l border-l-orange-400 pt-[50px] flex flex-col gap-5 pl-[30px]'>
        <Link to={'/hh'} className=' relative flex w-full gap-5 items-center pr-[50px] hover:bg-black p-1 rounded-lg hover:text-white'>
        <p>Hodimlar</p>
        <i className='bx bxs-user-detail text-orange-400' ></i>
        <div className=' absolute top-[-5px] left-[-5px] bg-orange-400 min-w-[15px] flex justify-center items-center rounded-full h-[15px]'>
          <p className='text-[10px]'>0</p>
        </div>
        </Link>
        <Link className=' relative flex w-full gap-5 items-center pr-[50px] hover:bg-black p-1 rounded-lg hover:text-white'>
        <p>Bajarilgan Ishlar</p>
        <i className='bx bx-check-double text-orange-400'></i>
        <div className=' absolute top-[-5px] left-[-5px] bg-orange-400 min-w-[15px]  flex justify-center items-center rounded-full h-[15px]'>
        <p className='text-[10px]'>0</p></div>
        </Link>
        <Link className=' relative flex w-full gap-5 items-center pr-[50px] hover:bg-black p-1 rounded-lg hover:text-white'>
        <p>Bajarilmagan Ishlar</p>
        <i className='bx bx-task-x text-orange-400'></i>
        <div className=' absolute top-[-5px] left-[-5px] bg-orange-400 min-w-[15px]  flex justify-center items-center rounded-full h-[15px]'>
        <p className='text-[10px]'>0</p></div>
        </Link>
        <label className="ui-switch">
  <input onClick={()=>func()} type="checkbox"/>
  <div className="slider">
    <div className="circle"></div>
  </div>
</label>
    </div>
    
    </>
  )
}

export default Saidbar
