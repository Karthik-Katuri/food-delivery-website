import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
const Home = () => {
    const[category,setCategory] = useState("All");
    const[view, setView] = useState(false);
  return (
    <div>
        <Header view = {view} setView = {setView}/>
        <ExploreMenu category ={category} setCategory ={setCategory}/>
    </div>
  )
}

export default Home