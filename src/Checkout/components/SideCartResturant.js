import React from 'react'

const SideCartResturant = (props) => {
    const { foodBuyItem } = props
  return (
    <div className='mt-4 flex'>
      <img src={foodBuyItem.img} alt={foodBuyItem.name}  className='h-12 ml-4 mt-1 rounded-sm'/>
      <div className='ml-3'>
      <p className='font-serif font-bold text-lg'>{foodBuyItem.name}</p>
       <p className=' font-serif text-sm text-slate-600'>{foodBuyItem.address}</p>
       <hr className=' border border-black w-9 mt-1'/>
      </div>
    </div>
  )
}

export default SideCartResturant
