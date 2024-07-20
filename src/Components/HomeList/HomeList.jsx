import React, { useContext } from 'react'

//lets import links
import {Link} from 'react-router-dom'

//import context
import { HomeContext } from '../HomeContext/HomeContext'

//import home component itself
import Home from '../Home/Home'

const HomeList = ({category}) => {
  const {homes} = useContext(HomeContext);

  return (
    <div>
      <div className="property-cards">
        {/* lets map over home data  */}
        {homes.map((home) =>{
          // lets check if the category of the home is same as that of the category section
          if(category === "All" || category ===home.category){
            return (
              //we are going to retun the home components but we also want to the component
              //to serve as a link to our homedetails, so we will access that using id
              <Link to={`/home/${home.id} `} key= {home.id} >
                <Home home={home} />
              </Link>
            )
          }
        })}
      </div>
    </div>
  )
}

export default HomeList