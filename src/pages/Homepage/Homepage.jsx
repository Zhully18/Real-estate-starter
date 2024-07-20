import React, { useState } from 'react'
import Hero from '../../Components/Hero/Hero'
import CategorySection from '../../Components/CategorySection/CategorySection'
import HomeList from '../../Components/HomeList/HomeList';
import Agents from '../../Components/Agents/Agents';

const Homepage = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Hero />
      <CategorySection category= {category} setCategory={setCategory} />
      <HomeList category= {category}/>
      <Agents/>
    </div>
  )
}

export default Homepage