import React from 'react'
import youth from '../assets/youthlg_youth.webp'
import pic from '../assets/youthlg_youth.webp'
import Newscards from '../components/Newscards'

const Youthlg = () => {
  return (
    <>
      <img src={youth} />

      <button>Create New Post</button>
      <input type="text" placeholder='Search' />

{/* Load posts from db */}
      <Newscards image={pic} title='A title of News' author='Ekene Ezeobi'/>
    </>
  )
}

export default Youthlg