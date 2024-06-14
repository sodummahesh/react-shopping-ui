import React from 'react'

const Header = () => {
  return (
    <div className="Headersection">
      

      <div className="left">   
        <div className='title'> Shopping mall</div>
           </div>

      <div className="center">  
         <ul>
          <li>Mens</li>
          <li>Womens</li>
          <li> Children</li>
          <li>Beauty</li>
         </ul>
         </div>
         <div className="search"> 
          <input type='text' placeholder='search'  size='15'/>
         </div>
      <div className="right">      
        <div className="signin">
          signin/signout
        </div>
        <div className='cart'> 
          cart </div>

      </div>
        
    </div>
  )
}

export default Header
