import React from 'react'
import './Header.css'

const Header = ({view,setView}) => {
  return (
    <div className='header'>
        <div  className="header-contents">
            <h2> Order Your Favorite Food Here</h2>
            <p>Check out your favourite delicucies from your favourite restaurants</p>
            <button onClick={()=>setView(!view)} className={view?"active":""} >View Menu</button>
        </div>
    </div>
  )
}

export default Header