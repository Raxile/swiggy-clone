import React from 'react'
import { useGetAllResturantsQuery} from '../features/resturantsApi'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getResturant } from '../features/oneResturantSlice'


const Resturant = () => {
    const {data,error,isLoading} =useGetAllResturantsQuery()
    const dispach = useDispatch();
    const navigate = useNavigate();
    const handleclick =(resturant)=>{
        dispach(getResturant (resturant) )
        navigate(`/resturant/${resturant._id}`);

    }
  return (
    <div>
         
         
         <div className='mt-10 mx-10'>
         <div className='filter flex justify-between '> 
          <div className="left text-3xl font-serif font-semibold mb-1">20 restaurant</div>
          <div className="right flex space-x-10">
            <div className="filterItem font-serif text-lg text-slate-600 hover:text-slate-700">Relevance</div>
            <div className="filterItem font-serif text-lg text-slate-600 hover:text-slate-700">Delivery Time</div>
            <div className="filterItem font-serif text-lg text-slate-600 hover:text-slate-700">Rating</div>
            <div className="filterItem font-serif text-lg text-slate-600 hover:text-slate-700">Cost:Low to High</div>
            <div className="filterItem font-serif text-lg text-slate-600 hover:text-slate-700">Cost:High to Low</div>
            <div className="filterItem font-serif text-lg text-black hover:text-orange-500">Filters</div>
            
          </div>
         </div>
         <hr className='border-slate-300 '/>
    </div>
         <div >
         {isLoading ? (
     <p>Loading...</p>
     ) :error ? (
     <p>Error occured...</p>
     ): (
        <div className='restaurant grid grid-cols-4 gap-6 mt-6 mx-8'>
          {data?.map( resturant => (
             <div key={resturant._id} onClick={()=>handleclick(resturant)}>
             <div className='h-[21rem] w-[20rem] px-5 py-5 border border-white hover:border-slate-300'>
               <div className='image'>
                 <img src={resturant.img} alt={resturant.name} />
               </div>
               <div className="name my-4 font-serif">
                 <h3 className='text-lg font-bold text-slate-700'>{resturant.name}</h3>
                 <p className='text-sm text-slate-500'>{resturant.typeoffood}</p>
               </div>
               <div className='flex justify-between text-slate-500 text-xs'>
                 <div className="rating">Rating</div>
                 <div className="time">34 MINS</div>
                 <div className="price">&#x20b9;{resturant.price} for TWO</div>
               </div>
               <div className="show my-3 ">
               <hr className='border-slate-300 '/>
               <span className='text-xs text-blue-500 font-extrabold justify-center block mt-2 mx-20 hover:text-slate-500'>QUICK VIEW</span>
               </div>
             </div>
           </div>
          ))}

        </div>
     )}
        

         </div>
         <div className="waste my-16 w-auto"></div>
    </div>
  )
}

export default Resturant
