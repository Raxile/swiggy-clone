import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import resturantsReducer, { resturantsFetch } from './features/resturantsSlice';
import { resturantsApi } from './features/resturantsApi';
import oneResturantReducer from './features/oneResturantSlice';
import cartReducer, { getTotals } from './features/cartSlice';

const store = configureStore({
  reducer:{
    resturants: resturantsReducer,
    oneResturant:oneResturantReducer,
    cart:cartReducer,
    [resturantsApi.reducerPath] : resturantsApi.reducer,
  },
  middleware: (getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(resturantsApi.middleware);
  },
})

store.dispatch(resturantsFetch());
store.dispatch(getTotals());




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

