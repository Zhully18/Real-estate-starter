import React from 'react'
import { categoryItem } from '../../data'
import './CategorySection.css'

const CategorySection = ({category, setCategory}) => {
  return (
    <div>
      <div className="category">
        <h1>Explore Our Properties</h1>
        <div className="category_list">
          {categoryItem.map((item, index) => {
            return (
              <div onClick={() => setCategory((prev) => (prev === item.category_title ? "All" : item.category_title))} key={index} className="category_list_item">
                <div className={ category ===item.category_title ? "clicked" : ""}>
                  <div className="name">
                    <p>{item.category_title} </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CategorySection