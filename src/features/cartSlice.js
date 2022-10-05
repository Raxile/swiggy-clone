import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [] ,
    cartTotalQuantity : 0,
    cartTotalAmount : 0,

}

const cartSlice =  createSlice ({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
             const itemIndex = state.cartItem.findIndex(
                (item)=> item._id === action.payload._id 
             );
             const resturantIndex = state.cartItem.findIndex(
                 (resturantId) => resturantId.resturant === action.payload.resturant
             );
             console.log()
              if(resturantIndex>=0 || state.cartTotalQuantity === 0){
                    if (itemIndex>=0){
                        state.cartItem[itemIndex].cartQuantity +=1;
                    }
                    else{
                        const tempProduct = {...action.payload , cartQuantity: 1 }
                        state.cartItem.push(tempProduct)
                        
                    }
                } 
                else {
                    window.alert(" Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant? ")
                }  
             
             localStorage.setItem("cartItem",JSON.stringify(state.cartItem))

        },
        decreaseCart(state,action){
            const itemIndex = state.cartItem.findIndex(
                cartItem => cartItem._id === action.payload._id
            )
            if(state.cartItem[itemIndex].cartQuantity > 1){
                state.cartItem[itemIndex].cartQuantity -= 1
            }
            else if(state.cartItem[itemIndex].cartQuantity === 1){
                const nextCartItem = state.cartItem.filter(
                    cartItem => cartItem._id !== action.payload._id
                )
                state.cartItem = nextCartItem;
            }
            localStorage.setItem("cartItem",JSON.stringify(state.cartItem))
        },
        getTotals(state,action){
            let  {total,quantity}= state.cartItem.reduce((cartTotal, cartItem)=>{
                const { price ,cartQuantity} = cartItem
                const itemTotal = price * cartQuantity;
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
                return cartTotal;
              },{
                  total:0,
                  quantity:0
              });
              state.cartTotalQuantity = quantity;
              state.cartTotalAmount = total;
          }
      }
})


export const { addToCart,decreaseCart ,getTotals } = cartSlice.actions;

export default cartSlice.reducer;