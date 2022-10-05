import React from 'react'
import Navbar from './components/Navbar'
import Promo from './components/Promo'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Resturant from './components/Resturant';
import Food from './components/Food';
import Checkout from './Checkout/pages/Checkout';




const App = () => {
  return (
    <>

      <Router>
    <div className="App">
       <Navbar />
        <Routes>
        <Route exact path="/" element={<><Promo/> 
        <Resturant/>
         </>}/> 
        <Route exact path={`/resturant/:id`} element={<Food/>} />
         <Route exact path={`/checkout`} element={<Checkout />} />
        </Routes>
    </div>
    </Router>
    
    </>
  );
}

export default App
