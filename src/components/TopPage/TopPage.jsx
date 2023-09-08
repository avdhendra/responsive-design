import React from 'react'
import logo from "../../assets/logo.png"
import pizza from "../../assets/pizza.png"
import vector from "../../assets/vector.png"
import "./TopPage.scss"
const TopPage = () => {
  return (
   
    <div className='app'>
      <div className='app-left'>
        <div className='app-left-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='app-left-heading'>
          <div>
          <h1>Discover the <span className='app-left-heading-best'>Best</span> Food and Drinks</h1>

          </div>
          <div>

          <p className='app-left-heading-sub'>Naturally made Healthcare Products for the better care & support of your body</p>
          </div>
          <div>
          <button className='app-left-heading-button'>Explore Now!</button>

          </div>
        </div>


      </div>
      <div className='app-right'>
        <div>
        <img src={pizza} alt="pizza" className='app-right-image'/>
        </div>
        <div className='app-right-vector'>
          <img src={vector} alt="vector"  />
<button className='app-right-vector-button'>Get in Touch</button>
        </div>
          
          
       

       
        
      </div>

    </div>
  )
}

export default TopPage
