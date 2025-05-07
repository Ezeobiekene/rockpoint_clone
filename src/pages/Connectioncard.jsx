import React from 'react'
import Ccreceived from '../components/Ccreceived'
import pic from '../assets/ladieslg_ladies.webp'

const Connectioncard = () => {
  return (
    <>
      <h1>Connection Cards Received</h1>
      <input type="text" placeholder='Search'/>

      {/* Load cards from db */}
      <Ccreceived image={pic} name='Ekene' title='A title' date='04/13/2003'/>
    </>
  )
}

export default Connectioncard