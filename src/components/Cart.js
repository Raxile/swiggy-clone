import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { addToCart, decreaseCart, getTotals } from '../features/cartSlice';
import { foodBuy } from '../features/resturantsSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    dispatch(getTotals())
  },[cart,dispatch])
   
  const handleDecreaseCart = (cartItem) =>{
    dispatch(decreaseCart(cartItem))
  }
  const handleIncreaseCart = (cartItem) =>{
    dispatch(addToCart(cartItem))
    dispatch(foodBuy(cartItem))
  }
  const handleCheckout = () =>{
    navigate("/checkout");
    
  }

  return (
    <div >
      {cart.cartItem.length === 0 ? (
        <>
          <div className="empty-cart ">
            <h1 className='ml-16 mt-4 text-3xl text-slate-500 font-bold font-serif'>Cart Empty</h1>
            <img className='mt-3 w-[22rem]' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2" alt="empty cart" />
          </div>
          <p className='mt-6 ml-16 w-60 text-slate-500'>Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
        </>
      ) : (
        <>
          <h1 className='mt-4 ml-6 text-3xl font-serif font-bold'>Cart</h1>
          <p className='ml-7 text-slate-500'>{cart.cartTotalQuantity} items</p>

          {cart.cartItem?.map(cartItem => (
             <div className="item flex ml-5 mt-5" key={cartItem._id}>
            <div className="name w-16 h-auto">{cartItem.name}</div>
            <div className="button-bar mx-3 ml-24 mt-1">
              <button className={` w-6 bg-lime-50 hover:bg-lime-100 rounded-sm border border-lime-300 hover:border-lime-400`}  onClick={()=>handleDecreaseCart(cartItem)} ><span className='text-lime-700'>-</span></button>
              <span className=' px-3 mx-0.5 py-0.5 border border-lime-300   bg-lime-100 text-lime-700' >{cartItem.cartQuantity}</span>
              <button className={` w-6 bg-lime-50 hover:bg-lime-100 rounded-sm border border-lime-300 hover:border-lime-400`} onClick={()=>handleIncreaseCart(cartItem)}> <span className='text-lime-700'>+</span></button>
            </div>
            <div className="price   mt-1 ">{cartItem.cartQuantity*cartItem.price}</div>
            
          </div>
          ))}
        



          <div className=" last-price flex mt-10 ml-3">
            <div className="Description">
              <p className=' font-bold text-slate-700 font-serif'>Subtotal</p>
              <p className='text-slate-500 font-serif'>Extra charges may apply</p>
            </div>
            <div className="price ml-12  font-serif text-slate-800 ">&#x20B9;{cart.cartTotalAmount}</div>
          </div>
          <button className='h-14 bg-lime-600 w-72 ml-3 mt-5 text-white ' onClick={()=> handleCheckout()}>CHECKOUT</button>
        </>
      )}

    </div>
  )
}

export default Cart
