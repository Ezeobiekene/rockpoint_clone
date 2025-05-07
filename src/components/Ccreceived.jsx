import React from 'react'

const Ccreceived = ({ image, name, title, date }) => {
  return (
    <>
        <img src={image} />
        <p>{name}</p>
        <span>{title}</span>
        <span>{date}</span>
    </>
  )
}

export default Ccreceived