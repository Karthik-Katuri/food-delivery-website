import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/foodDisplay'
const Home = () => {
    const[category,setCategory] = useState("All");
    const[view, setView] = useState(false);
  return (
    <div>
        <Header view = {view} setView = {setView}/>
        <ExploreMenu category ={category} setCategory ={setCategory}/>
        <FoodDisplay category={ category}/>
    </div>
  )
}

export default Home