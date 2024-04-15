import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const HodimlarP = () => {
  return (
    <div className='w-full flex justify-start p-5'>
       <div className='max-w-[1000px] w-full flex p-4 flex-wrap gap-4'>
            <div className='max-w-[200px] w-full flex flex-col gap-3'>
                    <img src="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg" className='w-full h-auto rounded-lg' alt="alt" />
                    <p>F.I.SH:</p>
                    <p>Lavozim:</p>
                    <Button color="purple">Biriktirilgan Ishlar Ro'yxati</Button>
            </div>
            <div className='max-w-[200px] w-full flex flex-col gap-3'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3E_Ca-rNnpMeZ48GN2PkI0ORLhKw2homRG87z0yrHhRSHCH81U5qjl0bs1PTztIKgbew&usqp=CAU" className='w-full h-auto rounded-lg' alt="alt" />
                    <p>F.I.SH:</p>
                    <p>Lavozim:</p>
                    <Button color="purple">Biriktirilgan Ishlar Ro'yxati</Button>
            </div>
       </div>
    </div>
  )
}

export default HodimlarP
