import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resturantItem: localStorage.getItem("oneResturantItem") ? JSON.parse(localStorage.getItem("oneResturantItem")) :[] ,
    
}

const oneResturantSlice =  createSlice ({
    name:"oneResturant",
    initialState,
    reducers:{
        getResturant(state,action){
             
            if(state.resturantItem !== 0){
                state.resturantItem = []
            }
                const tempProduct = {...action.payload  }
                state.resturantItem.push(tempProduct)
            localStorage.setItem("oneResturantItem",JSON.stringify(state.resturantItem))
            
    }
    
   },
})


 export const { getResturant } = oneResturantSlice.actions;

export default oneResturantSlice.reducer;