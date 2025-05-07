import React from 'react'
import mens from '../assets/menslg_mens.webp'
import pic from '../assets/menslg_mens.webp'
import Newscards from '../components/Newscards'

const Menslg = () => {
  return (
    <>
      <img src={mens} />

      <button>Create New Post</button>
      <input type="text" placeholder='Search' />

{/* load posts from db */}
      <Newscards image={pic} title='A title of News' author='Ekene Ezeobi'/>
    </>
  )
}

export default Menslg