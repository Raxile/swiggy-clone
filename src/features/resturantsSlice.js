import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    item :[],
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
    reducers:{},
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

export default resturantsSlice.reducer