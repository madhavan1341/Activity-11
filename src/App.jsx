import React, { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Card from './components/card.jsx'
function App() {
let [cart,setCart]=useState(0)
let product = [
    {
        name:'Pizza',
        price:1
    },
    {
        name:'Biriyani',
        price:2
    },
    {
        name:'Tikka',
        price:5
    },
    {
        name:'Poori',
        price:1
    },
    {
        name:'Pasta',
        price:2
    },

]
  return  <>
  
  <Navbar cart={cart} setCart={setCart}/>
      <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
       {
       product.map((e,i)=>{
        return  <Card cart={cart} setCart={setCart} product={e} key={i}/>
       })
       }
  
    </div>
    </div>
    </section>
                
    </>
  
}

export default App
