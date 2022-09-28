import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const FoodCard = (props) => {
  const { foods } = props

  
    const dispatch = useDispatch();
 
 
  const handleclick = (foods) => {
 
    dispatch(addToCart(foods))
  }
 
 
  return (
    <>
      <div className='mx-11 w-[35rem] my-4 flex  h-44 relative'>
        <div className="foodDesc">
          <div className="name mt-[3.25rem] my-2 font-serif text-base">{foods.name}</div>
          <div className="price   font-serif text-sm">&#x20b9;{foods.price}</div>
          <div className="description mt-10  text-slate-500 font-serif text-sm">{foods.description}</div>
        </div>
        <div className="image mx-3 absolute bottom-10 right-2">
          <img className='w-28 h-24 rounded-lg' src={foods.img} alt="" />
          <div className="button mx-2 mt-1">
            <button className={"w-24 bg-lime-50 hover:bg-lime-100 rounded-sm border border-lime-300 hover:border-lime-400"}>
              <span className=' text-lime-700' onClick={()=>handleclick(foods)}>ADD</span></button>
          </div>

          
       


          


        </div>
      </div>
      <hr className='ml-10  w-[34rem] border-slate-300 ' />
    </>
  )
}

export default FoodCard