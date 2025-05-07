import React from 'react'

const Ministries = ({ image, time, title, location }) => {
  return (
    <>
        <div>
            <img src={image} />
            {time} <br/>
            {title}<br/>
            {location}<br/>
        </div>
    </>
  )
}

export default Ministries