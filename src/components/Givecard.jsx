import React from 'react'

const Givecard = ({ image, title, text}) => {
  return (
    <>
        <div>
            <img src={image} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </>
  )
}

export default Givecard