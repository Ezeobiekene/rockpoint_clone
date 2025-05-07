import React from 'react'

const Newscards = ({ image, title, author }) => {
  return (
    <>
        <div>
            <img src={image}  />
            <p>{title}</p>
            <p>{author}</p>
        </div>
    </>
  )
}

export default Newscards