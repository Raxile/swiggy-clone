import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SideCart from '../components/SideCart'
import Credintials from './Credintials'


const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate()
  const handlebutton = ()=>{
     navigate("/")
  }
  return (
       <>
    {cart.cartItem.length === 0 ? (
      <>
        <div className="empty-cart  mx-[30rem] mt-10">
          <h1 className='ml-16 mt-4 text-3xl text-slate-500 font-bold font-serif'>Cart Empty</h1>
          <img className='mt-3 w-[22rem]' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" alt="empty cart" />
        </div>
        <p className='mx-[32rem] mt-6 w-72 text-slate-500 text-sm'>You can go to home page to view more restaurants</p>
        <button className='mx-[33rem]  bg-orange-500 mt-7 h-10 w-60 font font-serif font-bold text-white hover:bg-orange-400 ' onClick={()=>handlebutton()}> SEE RESTURANTS NEAR YOU </button>
      </>
    ) :(
      <div className='w-screen h-[100vh] bg-slate-200 z-0'>
     <div className='flex flex-row py-8 z-10'> 
       <Credintials className='basis-[68%] bg-rose-600 mx-24 ' />
       <SideCart className=' basis-[32%] bg-white border border-slate-300  mr-20 h-auto  ' /> 
     </div>
    </div>) }

    </>
  )

}

export default Checkout

