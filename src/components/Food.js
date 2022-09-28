import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'
import FoodItem from './FoodItem'
import SideTitleBar from './SideTitleBar'

const Food = () => {
  const oneResturant = useSelector((state) => state.oneResturant)
  console.log(oneResturant)
  return (
    <div>
      {oneResturant.resturantItem.map((restaurantItem)=>(
      
         <div className='bg-gray-900 flex' key={restaurantItem._id} >
       <div className="image "><img className='h-40 mx-14 my-10' src={restaurantItem.img} alt="" /></div>
       <div className="name  my-12 mx-2 font-serif">
        <div className="primaryName text-white text-3xl my-2">{restaurantItem.name}</div>
        <div className="typeoffood text-slate-400 text-base py-1">{restaurantItem.typeoffood}</div>
        <div className="address text-slate-400 text-base my-1">{restaurantItem.address}</div>
       </div>
       <div className="price text-slate-300 mx-36 my-12">&#x20b9;{restaurantItem.price}
        <hr className='border-gray-500 my-3'/>
         Rating
         <hr className='border-gray-500 my-3'/>
         Delivery time
       </div>
      
       </div>
      ))}
        <div className="container flex divide-x-2 divide-slate-300 my-4">
       <div className="SideTitleBar  ml-12 mr-7 "><SideTitleBar/></div>
         <div className="FoodItem "><FoodItem /></div>
       
        <div className="cart"> <Cart/></div>
     </div>
    </div>
  )
}

export default Food
