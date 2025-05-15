import React from 'react'

const Newscards = ({ image, title, author, content }) => {
  return (
    <>
        <div>
            <img src={image}  />
            <p>{title}</p>
            <p>{author}</p>
            <p>{content}</p>
            <br />
            <br />
            <br />
        </div>
    </>
  )
}

export default Newscards