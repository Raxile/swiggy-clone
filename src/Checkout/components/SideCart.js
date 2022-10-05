import React  from 'react'
import {  useSelector } from 'react-redux';

const SideCart = (props) => {
    const restaurant = useSelector((state) => state.resturants.foodbuys);

  return (
    <div className={`${props.className}`}>
      {restaurant?.map((foodBuyItem)=>(
        <>
        <img src={foodBuyItem.img} alt={foodBuyItem.name} />
        <p>{foodBuyItem.name}</p>
        </>
      ))}
    </div>
  )
}

export default SideCart
