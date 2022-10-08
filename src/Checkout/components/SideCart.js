import React  from 'react'
import {  useSelector } from 'react-redux';
import SideCartBill from './SideCartBill';
import SideCartResturant from './SideCartResturant';

const SideCart = (props) => {
    const restaurant = useSelector((state) => state.resturants.foodbuys);

  return (
    <div className={`${props.className}`}>
      {restaurant?.map((foodBuyItem)=>(
        <SideCartResturant foodBuyItem={foodBuyItem} key={foodBuyItem._id}/>
      ))}
         <SideCartBill />
    </div>
  )
}

export default SideCart
