import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FoodCard from './FoodCard'


const FoodItem = () => {
  const foodInitial = []

  const host = "http://localhost:5000"
  const [food, setFood] = useState(foodInitial)
  
  //Get a foodItems form a specific hotel
  
  let {id} = useParams();
  const getFoodItem = async ()=>{
    //Api call
    
    const response = await fetch(`${host}/api/fooditem/${id}`,{
     method:'GET',
     headers:{
       'Content-Type': 'application/json'
     }
  }); 
   const json = await response.json()
   setFood(json)

   
  }
  useEffect(()=>{
    getFoodItem();
    // eslint-disable-next-line 
 },[])
  return (
    <>
      <h3>Recomended</h3>  
     <div className="card">
      
    {food.map((foods)=>{return <FoodCard key={foods._id} foods={foods}/>})}
    </div> 
    </>
  )
}

export default FoodItem