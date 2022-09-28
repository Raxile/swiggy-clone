import logo from '../assets/swiggy-1.svg'
import search from '../assets/search.svg'
import help from '../assets/help.png'
import signin from '../assets/account.png'
import cart from '../assets/cart.png'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between my-4 '>
        <div className="left flex space-x-4 ml-12">
              <div className="logo w-8 mx-2">
                <img src={logo} alt="" />
              </div>
              <div className="add mt-4 mx-4 font-medium">
                <span className='font-bold text-[#3D4152] hover:text-orange-500 font-serif text-sm mx-1'>H.A.L Colony</span>
                 <span className='mx-1 text-[#686B78] font-serif text-sm'>Kanpur,Uttar Pradesh</span>
                </div>
        </div>
      <div className="right flex space-x-24 mr-14 mt-4 text-[#3D4152]">
        <div className="search flex">
            <img className='w-4 mx-2' src={search} alt="" />
             <span className='hover:text-orange-500'>Search</span>
             </div>
    
        <div className="help flex hover:text-orange-500">
            <img className='w-6 h-6 mx-2' src={help} alt="" />
             <span >Help</span>
            </div>
        <div className="signin flex hover:text-orange-500">
            <img className='w-6 h-6 mx-2' src={signin} alt="" />
            <span>Sign In</span>
            </div>
        <div className="cart flex hover:text-orange-500">
            <img className='w-6 h-6 mx-2' src={cart} alt="" />
            <span>Cart</span>
             </div>
      </div>
    </div>
  )
}

export default Navbar