import { Button } from 'flowbite-react'
import React from 'react'

const HomeP = () => {
  return (
    <main className='w-full'>
        <div className="container1">
           <div className='w-full flex flex-col gap-5 items-start pl-[50px] pt-[50px]'>
            <div className='max-w-[800px] w-full p-3 flex flex-col gap-3 border-4 rounded-lg'>
                <div className=' flex w-full justify-between pb-2 border-b'>
                    <p>Ish Turi</p>
                    <p>Bajirish Muhlati : _ / _ / _</p>
                </div>
                <div className=' flex w-full justify-between pb-2 border-b' >
                    <p>Ma'sul Inson: _____</p>
                    <div className='flex gap-1 items-center'>
                            <Button color="failure">
                                Bajarilmagan
                            </Button>
                    </div>
                </div>
                
            </div>
            <div className='max-w-[800px] w-full p-3 flex flex-col gap-3 border-4 rounded-lg'>
                <div className=' flex w-full justify-between pb-2 border-b'>
                    <p>Ish Turi</p>
                    <p>Bajirish Muhlati : <span className='text-green-400'>tugagan</span></p>
                </div>
                <div className=' flex w-full justify-between pb-2 border-b' >
                    <p>Ma'sul Inson: _____</p>
                    <div className='flex gap-1 items-center'>
                            <Button color="success">
                                Bajarilgan
                            </Button>
                            <Button color='warning'><i className='bx bxs-trash'></i></Button>
                    </div>
                </div>
                
            </div>
           </div>
        </div>
    </main>
  )
}

export default HomeP
