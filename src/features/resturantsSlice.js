import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    item :[],
    foodbuys : localStorage.getItem("foodbuy") ? JSON.parse(localStorage.getItem("foodbuy")) : [] ,
    status : null
  
} 

export const resturantsFetch = createAsyncThunk(
    "resturants/resturantsFetch",
    async ()=>{
        const response= await axios.get("http://localhost:5000/api/resturants")
        return response?.data
    }
)



const resturantsSlice = createSlice({
    name: "resturants",
    initialState,
    reducers:{
        foodBuy(state,action)
        { 
            state.item.findIndex(
                // eslint-disable-next-line
                (resturantId) => {
                    if( resturantId._id === action.payload.resturant)
                    {
                        state.foodbuys=[]
                        state.foodbuys.push(resturantId)
                    }
                }
                )
                
                
                
                localStorage.setItem("foodbuy",JSON.stringify(state.foodbuys))
                
            }
    },
    extraReducers:{
       [resturantsFetch.pending]: (state,action) =>{
            state.status = "pending"
        },
       [resturantsFetch.fulfilled]: (state,action) =>{
            state.status = "success";
            state.item = action.payload
        },
       [resturantsFetch.rejected]: (state,action) =>{
            state.status = "rejected"
        }
    }

}); 

export const { foodBuy } = resturantsSlice.actions;

export default resturantsSlice.reducer