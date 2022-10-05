import React from 'react'
import SideCart from '../components/SideCart'
import Credintials from './Credintials'


const Checkout = () => {
  return (
    <div className='w-screen h-full bg-slate-200 z-0'>
     <div className='flex flex-row py-8 z-10'> 
       <Credintials className='basis-[68%] bg-rose-600 mx-24 ' />
       <SideCart className=' basis-[32%] bg-white border border-slate-300  mr-20 h-[40rem]  ' /> 
     </div>
    </div>
  )
}

export default Checkout

