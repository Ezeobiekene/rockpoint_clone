import React from 'react'
import { Link } from 'react-router-dom'
import online from '../assets/virtual_online.webp'
import notes from '../assets/virtual_notes.webp'
import facebook from '../assets/virtual_facebook.webp'

const Virtual = () => {
  return (
    <div>
      <img src={online} />
      <button><Link to='/'>New Service Link</Link></button>
      <button><Link to='/'>Edit Service Link</Link></button>
      <img src={notes} />
      <img src={facebook} />
    </div>
  )
}

export default Virtual