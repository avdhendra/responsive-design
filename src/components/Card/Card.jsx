import React from 'react'
import "./Card.scss"
const Card = ({img,alt,title,description}) => {
  return (
    <div className='card'>
          <img src={img } alt={ alt} />
          <p className='card-title'>{ title}</p>
          <p className='card-description'>{description}</p>
          <button>Read More</button>
    </div>
  )
}

export default Card
