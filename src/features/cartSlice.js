import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cartItem: [] ,
    cartTotalQuantity : 0,
    cartTotalAmount : 0,

}

const handleBill = async(cartItem,cartTotalQuantity,cartTotalAmount)=>{
       
    const loSo = localStorage.getItem("billId")
       if(loSo===null){
        const response = await fetch("http://localhost:5000/api/bill", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'     
        },
        body: JSON.stringify({cartItems:cartItem,cartTotalAmount:cartTotalAmount,cartTotalQuantity:cartTotalQuantity})
      });
      const json = await response.json();
      console.log("post request call")
      console.log(json);
    
       if(json.Success){
           //save the auth token and redirect
           localStorage.setItem('billId',json.item._id);
       }
       else{
           console.log("post requsest fail #laggaye")
       }}
       else{
        console.log("patch request call ");
        const billId = localStorage.getItem('billId')
        const response = await fetch(`http://localhost:5000/api/bill/update/${billId}`, {
            method: 'PATCH', 
            headers: {
              'Content-Type': 'application/json'     
            },
            body: JSON.stringify({cartItems:cartItem,cartTotalAmount:cartTotalAmount,cartTotalQuantity:cartTotalQuantity})
          });
          const json = await response.json();
          console.log(json);
        
           if(!json.Success){
               //save the auth token and redirect
               localStorage.removeItem('billId');
           }
           else{
               console.log("patch update requsest fail #laggaye")
           }

       }
    // if(1){
    //     console.log(cartItem)
    // }
    // else{
    //     console.log("bill update")
    // }
   
 }

// const tryf = async (id='634ba57753a416ba8d461315')=>{
//     const response= await axios.get(`http://localhost:5000/api/bill/${id}`)
//     console.log(response);
// }
//  tryf();

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
                 console.log("add to cart")             
             //localStorage.setItem("cartItem",JSON.stringify(state.cartItem))
            handleBill(state.cartItem,state.cartTotalQuantity,state.cartTotalAmount);
            // handleBill();
            
           
 
             
            


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
            //localStorage.setItem("cartItem",JSON.stringify(state.cartItem))
            handleBill(state.cartItem,state.cartTotalQuantity,state.cartTotalAmount);
            console.log("decrease to cart")
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
             
              handleBill(state.cartItem,state.cartTotalQuantity,state.cartTotalAmount);
            //   if(quantity>=1){
            // }

           
            console.log("get total")
          }
          
      }
})


export const { addToCart,decreaseCart ,getTotals } = cartSlice.actions;

export default cartSlice.reducer;