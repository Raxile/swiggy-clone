import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart, getTotals } from '../../features/cartSlice';
import { foodBuy } from '../../features/resturantsSlice';


const SideCartBill = () => {
     
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();
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

  return (
    <div>
        {cart.cartItem?.map((cartItem) =>(
            <div className="item flex ml-5 mt-5" key={cartItem._id}>
            <div className="name w-[8rem] text-xs h-auto">{cartItem.name}</div>
            <div className="button-bar mx-3 ml-[2rem] mt-1">
              <button className={` w-6 bg-lime-50 hover:bg-lime-100 rounded-sm border border-lime-300 hover:border-lime-400`}  onClick={()=>handleDecreaseCart(cartItem)} ><span className='text-lime-700'>-</span></button>
              <span className=' px-3 mx-0.5 py-0.5 border border-lime-300   bg-lime-100 text-lime-700' >{cartItem.cartQuantity}</span>
              <button className={` w-6 bg-lime-50 hover:bg-lime-100 rounded-sm border border-lime-300 hover:border-lime-400`} onClick={()=>handleIncreaseCart(cartItem)}> <span className='text-lime-700'>+</span></button>
            </div>
            <div className="price   mt-1 font-serif ">&#x20B9;{cartItem.cartQuantity*cartItem.price}</div>
                      
          </div>
        ))}
           
         
           <div className=" last-price mt-10 ml-5 text-sm">
              <p className=' font-bold text-slate-700 font-serif '>Bill Details</p>
            <div className="price flex">
              <p className='text-slate-500 mt-2 font-serif '>Item Totals</p>
              <div className="ml-44 font-serif mt-2 text-slate-700 ">&#x20B9;{cart.cartTotalAmount}</div>
            </div>

            <div className="price flex text-sm">
              <p className='text-slate-500 mt-2 font-serif '>Delivery charges</p>
              <div className=" ml-[6.90rem] font-serif mt-2  ">
                <span className='mr-1 text-slate-300 '>&#x20B9;20.00</span>
                <span className='text-green-600'>FREE</span>                
                </div>
            </div>
            <hr className='border border-slate-300 w-72 mt-3 text-sm' />
            <div className="price flex">
              <p className='text-slate-500 mt-2 font-serif '>Taxes And Charges</p>
              <div className=" ml-[9.30rem] font-serif mt-2  ">
                <span className='mr-1 text-slate-500 '>&#x20B9;0</span>    
                </div>
            </div>
            <hr className='border border-black w-72 mt-5' />
            <div className="price flex mb-3">
              <p className=' mt-2 font-serif font-semibold '>To Pay</p>
              <div className=" ml-[12.30rem] font-serif mt-2  ">
                <span className='mr-1 '>&#x20B9;{cart.cartTotalAmount}</span>    
                </div>
            </div>
          </div>
    </div>
  )
}

export default SideCartBill
